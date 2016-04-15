'use strict'

const fs = require('fs')

const nodegit = require('nodegit')

function isKeys (keypath) {
  try {
    fs.statSync(`${keypath}/deploy`)
    fs.statSync(`${keypath}/deploy.pub`)
    return true
  } catch (err) {
    return false
  }
}

function successMessage (branch, commit) {
  return `Deployed ${branch}

    ${commit.toString()}

    ${commit.summary()}\n`
}

function clone (path, repo_url, branch, keypath) {
  let options = {
    bare: true,
    checkoutBranch: branch
  }

  if (isKeys(keypath)) {
    options.fetchOpts = {}
    options.fetchOpts.callbacks = {
      credentials: (_, user) => {
        return nodegit.Cred.sshKeyNew(
          user, `${keypath}/deploy.pub`, `${keypath}/deploy`, '')
      }
    }
  }

  let ref
  let repository

  return nodegit.Clone(repo_url, `${path}/.git`, options)
    .then((repo) => {
      return repo.config()
    })
    .then((config) => {
      config.setInt64('bare', 0)
    })
    .then(() => {
      return nodegit.Repository.open(path)
    })
    .then((repo) => {
      repository = repo
      return repo.getHeadCommit()
    })
    .then((commit) => {
      ref = commit
      return commit
    })
    .then((commit) => {
      nodegit.Reset.reset(repository, commit, nodegit.Reset.TYPE.HARD)
    })
    .then(() => {
      console.log(successMessage(branch, ref))
    })
    .catch((err) => {
      console.log(err)
    })
}

function update (path, branch, keypath) {
  let repository

  return nodegit.Repository.open(path)
    .then((repo) => {
      let options = {}

      if (isKeys(keypath)) {
        options.callbacks = {
          credentials: (_, user) => {
            return nodegit.Cred.sshKeyNew(
              user, `${keypath}/deploy.pub`, `${keypath}/deploy`, '')
          }
        }
      }

      repository = repo
      return repo.fetch('origin', options)
    })
    .then(() => {
      return repository.getBranchCommit(`origin/${branch}`)
    })
    .then((commit) => {
      nodegit.Reset.reset(repository, commit, nodegit.Reset.TYPE.HARD)
    })
    .then(() => {
      return repository.getHeadCommit()
    })
    .then((commit) => {
      console.log(successMessage(branch, commit))
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = { clone, update }

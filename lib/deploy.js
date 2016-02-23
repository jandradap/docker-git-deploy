'use strict'

var nodegit = require('nodegit')

function successMessage (branch, commit) {
  return `Deployed ${branch}

    ${commit.toString()}

    ${commit.summary()}\n`
}

function clone (path, repo, branch) {
  let ref

  return nodegit.Clone(repo, path, {checkoutBranch: branch})
    .then((repo) => {
      return repo.getHeadCommit().then((commit) => {
        ref = commit
      })
    })
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      console.log(successMessage(branch, ref))
    })
}

function update (path, branch) {
  let repository

  return nodegit.Repository.open(path)
    .then((repo) => {
      repository = repo
      return repository.fetch('origin')
    })
    .then(() => {
      return repository.getBranchCommit(`origin/${branch}`)
    })
    .then((commit) => {
      return nodegit.Reset.reset(repository, commit, nodegit.Reset.TYPE.HARD)
    })
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      repository.getHeadCommit().then((commit) => {
        console.log(successMessage(branch, commit))
      })
    })
}

module.exports = { clone, update }

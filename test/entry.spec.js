/* global describe, it, before */

const gas = require('gas-local')

describe('sample gas app', () => {
  let app

  before(() => {
    app = gas.require('./dist', {
      console
    })
  })

  describe('call globalFunction', () => {
    it('output message with dependent class', () => {
      app.globalFunction()
    })
  })
})

/* global describe, it, before */

const assert = require('power-assert')
const gas = require('gas-local')

describe('sample lib', () => {
  let app

  before(() => {
    app = gas.require('./dist', {
      console
    })
  })

  describe('#propInt', () => {
    it('=== 1', () => {
      assert.equal(app.dig(app.createKlass(), 'propInt'), 1)
    })
  })

  describe('#speak', () => {
    it('nonsense', () => {
      app.createKlass().speak('foooooooooooo')
    })
  })
})

/**
 * @fileOverview Base API Surface tests.
 */
var chai = require('chai');
var expect = chai.expect;

var nodeonExpressError = require('../..');

describe('Base API Surface', function() {
  it('should expose proper methods', function(){
    expect(nodeonExpressError).to.be.a('function');
  });
});

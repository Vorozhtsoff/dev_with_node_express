var fortune = require('../libs/fortune.js'),
    expect = require('chai').expect;

suite('тесты печенек', function(){
  test('getFortune() должна возвращать предсказание', function(){
    expect(typeof fortune.getFortune() === 'string');
  });
});

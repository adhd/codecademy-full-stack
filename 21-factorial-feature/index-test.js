var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('will test if the output of 5! is 120', () => {
      const result = Calculate.factorial(5);
      const expectedResult = 120;
      assert.equal(result, expectedResult);
    })
    it('will test if the output of 10! is 3628800', () => {
      const result = Calculate.factorial(10);
      const expectedResult = 3628800;
      assert.equal(result, expectedResult);
    })

    it('will test the base case of 0!', () => {
      const result = Calculate.factorial(0);
      const expectedResult = 1;
      assert.equal(result, expectedResult);
    })
  });
});

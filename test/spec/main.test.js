/* jshint mocha: true, expr: true, strict: false */

describe('test suite', function () {
  it('should assert true and false', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('hello', function() {
  it('should return Luke', function() {
    hello().should.equal('Luke');
  });
});

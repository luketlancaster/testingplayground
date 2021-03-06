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

describe('getStock', function() {
  it('should return a stock object', function(done) {
    getStock('AAPL', function(stock) {
      stock.Name.should.equal('Apple Inc');
      done();
    });
  });
  it('should return another stock object', function(done) {
    getStock('MSFT', function(stock) {
      stock.Name.should.equal('Microsoft Corp');
      done();
    });
  });
});

before (function() {
  $('body').append('<form><input></form>');
});


describe('getInputValue', function() {
  it('should return the value in the input form', function() {
    getTableData().should.be.a('string');
  });
});

after (function() {
  $('form').empty();
});

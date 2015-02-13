function hello() {
  return 'Luke';
}

function getStock(symbol, cb) {
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol;
  $.get(url, function(res) {
    return cb(res);
  }, 'jsonp');
}

function getTableData() {
  var inputValue = $('input').val();
  return inputValue;
}

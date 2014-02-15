var assert = require('assert');
var each = require('call-each');

describe('call-each', function () {
  var count;

  function inc() {
    count += 1;
  }

  beforeEach(function () {
    count = 0;
  });

  it('should call each function', function () {
    var run = each([inc,inc,inc]);
    run();
    assert(count === 3);
  });

  it('should call each function in a context', function (done) {
    var obj = {};
    function test() {
      assert(this === obj);
      done();
    }
    each([test], obj)();
  });

});
var logging = require('./../');
var assert = require('assert');

describe('logging', function() {
    it('should have wroking setLevel', function(done) {
        assert.equal(logging.level, logging.LEVEL_ALL);
        logging.setLevel(logging.LEVEL_OFF);
        assert.equal(logging.level, logging.LEVEL_OFF);
        done();
    });
});

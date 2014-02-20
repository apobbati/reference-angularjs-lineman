var protractor = require('protractor');
require('protractor/jasminewd');

describe('my app', function() {
  var ptor;

  describe('visiting the home page', function() {
    ptor = protractor.getInstance();

    beforeEach(function() {
      ptor.get('/');
    });

    it('should work', function() {
      ptor.findElement(protractor.By.binding('{{message}}')).getText().then(function(text) {
        expect(text).toEqual('A Message');
      });
    });
  });
});

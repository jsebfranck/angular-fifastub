'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /allMatches when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/allMatches");
  });

  describe('calendar', function() {

    beforeEach(function() {
      browser.get('index.html#/createNewMatch');
    });

    //TODO fixme
    it('should filter the matches list as user types into the search box', function() {
      var matches = element.all(by.repeater('match in matches'));
      var query = element(by.model('matchSearchQuery'));

      expect(matches.count()).toBe(3);

      query.sendKeys('Bastia');
      expect(matches.count()).toBe(1);

      query.clear();
      query.sendKeys('toulouse');
      expect(matches.count()).toBe(1);
    });
  });
});

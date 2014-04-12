'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /lastMatch when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/lastMatch");
  });


  describe('lastMatch', function() {

    beforeEach(function() {
      browser.get('index.html#/lastMatch');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('calendar', function() {

    beforeEach(function() {
      browser.get('index.html#/calendar');
    });

    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});

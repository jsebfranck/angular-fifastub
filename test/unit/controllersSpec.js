'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  it('should have one last match initialized', inject(function($controller) {
    var scope = {},
        ctrl = $controller('LastMatchController');

    expect(scope.match).toBeDefined();
    expect(scope.match.homeTeam).toBe('Olympique Lyonnais');
  }));

  it('should have three matches in the calendar', inject(function($controller) {
    var scope = {},
        ctrl = $controller('CalendarController');

    expect(scope.matches).toBeDefined();
    expect(scope.matches.length).toBe(3);
  }));
});

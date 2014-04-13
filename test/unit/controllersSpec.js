'use strict';

/* jasmine specs for controllers go here */

describe('Controllers', function() {

  describe('LastMatchController', function() {
    var scope, ctrl, $httpBackend;

    var matchJson = {'homeTeam': 'Olympique Lyonnais',
                     'awayTeam': 'Paris SG',
                     'homeScore': 0,
                     'awayScore': 1,
                     'date': '2014-04-13'
                    };

    beforeEach(module('myApp.controllers'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('match/lastMatch').respond(matchJson);

      scope = $rootScope.$new();
      ctrl = $controller('LastMatchController', {$scope: scope});
      $httpBackend.flush();
    }));

    it('should have one last match initialized', inject(function($controller) {
      expect(scope.match).toBeDefined();
      expect(scope.match.homeTeam).toBe('Olympique Lyonnais');
    }));
  });

  describe('LastMatchController', function() {
    beforeEach(module('myApp.controllers'));

    it('should have three matches in the calendar', inject(function($controller) {
      var scope = {},
          ctrl = $controller('CalendarController', {$scope:scope});

      expect(scope.matches).toBeDefined();
      expect(scope.matches.length).toBe(3);
    }));
  });
});

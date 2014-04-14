'use strict';

/* jasmine specs for controllers go here */

describe('Controllers', function() {

  describe('AllMatchesController', function() {
    var scope, ctrl, $httpBackend;

    var matchJson = [{'homeTeam': 'Olympique Lyonnais',
                     'awayTeam': 'Paris SG',
                     'homeScore': 1,
                     'awayScore': 0,
                     'date': '2014-04-13'
                    },
                    {'homeTeam': 'Marseille',
                     'awayTeam': 'Bastia',
                     'homeScore': 2,
                     'awayScore': 1,
                     'date': '2010-04-01'
                    }];

    beforeEach(module('myApp.controllers'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:3000/match/all').respond(matchJson);

      scope = $rootScope.$new();
      ctrl = $controller('AllMatchesController', {$scope: scope});
      $httpBackend.flush();
    }));

    it('should have two matches initialized', inject(function($controller) {
      expect(scope.matches).toBeDefined();
      expect(scope.matches.length).toBe(2);
    }));
  });
});

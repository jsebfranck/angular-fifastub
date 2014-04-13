var db = require("mongojs");

var databaseUrl = "sampledb";
var collections = ["things"]
db.connect(databaseUrl, collections);

exports.getLastMatch = function(req, res) {
  res.send({'homeTeam': 'Olympique Lyonnais',
            'awayTeam': 'Paris SG',
            'homeScore': 0,
            'awayScore': 1,
            'date': '2014-04-13'
           });
};

exports.getLastMatch2 = function(req, res) {
    db.things.find('', function(err, matches) {
	if( err || !matches) console.log("No matches found");
	else {
	  res.end(matches);
	}
  });
};

exports.createNewMatch = function(req, res) {
  db.things.save({'homeTeam': 'Olympique Lyonnais',
                             'awayTeam': 'Paris SG',
                             'homeScore': 0,
                             'awayScore': 1,
                             'date': '2014-04-13'
                            },
  function(err, saved) {
    if( err || !saved ) res.end('Error creating the match : ' + err);
    else res.end('Match has been created');
  });
};

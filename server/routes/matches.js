var mongojs = require("mongojs");

var db = mongojs("sampledb", ["things"]);

exports.getLastMatch = function(req, res) {
  db.things.find().limit(1, function(err, matches) {
	if( err || !matches || matches.length < 1) console.log("No matches found");
	else {
	  res.send(matches[0]);
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

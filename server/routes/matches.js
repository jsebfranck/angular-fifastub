var mongojs = require("mongojs");

var db = mongojs("sampledb", ["things"]);

exports.getAll = function(req, res) {
  db.things.find(function(err, matches) {
	if( err || !matches || matches.length < 1) console.log('No matches found');
	else {
    console.log('Matches found count : ' + matches.length);
	  res.send(matches);
	}
  });
};

exports.createNewMatch = function(req, res) {
  console.log('Create a new match, request body is : ', req.body);

  db.things.save(req.body,
  function(err, saved) {
    if( err || !saved ) res.send('Error creating the match : ' + err);
    else res.send('Match has been created');
  });
};

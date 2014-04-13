exports.getLastMatch = function(req, res) {
  res.send({'homeTeam': 'Olympique Lyonnais',
            'awayTeam': 'Paris SG',
            'homeScore': 0,
            'awayScore': 1,
            'date': '2014-04-13'
           });
};

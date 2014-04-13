var express = require('express'),
    matches = require('./routes/matches');

var app = express();

app.use(function(req, res, next) {
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
        if (req.method === 'OPTIONS') return res.send(200);
    }
    next();
});

app.get('/match/lastMatch', matches.getLastMatch);
app.get('/match/createNewMatch', matches.createNewMatch);

app.listen(3000);

console.log('Listening on port 3000...');
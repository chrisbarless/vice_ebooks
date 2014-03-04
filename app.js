var Twit = require('twit'),
		_ = require('lodash'),
		fs = require('fs');

var T = new Twit(require('./config.js'));

var swag = {q: "vice", count: 5, result_type: "recent"};

T.get('search/tweets', swag, function(err, data) {

	var results;
  if (err) throw err;
  
  results = data.statuses;
  fs.writeFile('test', _.pluck(results, 'text').join('\n'), function(){
		
  });
});
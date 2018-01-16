var request = require('request');
var exports = module.exports = {};

exports.log = function(request_) {
  console.log(request_);
};

//http://www.icndb.com/api/
exports.search = function(request_, callback){
	request('http://api.icndb.com/jokes/random?exclude=[explicit]', function (error, response, body) {
  		console.log('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  		console.log('body:', body); // Print the HTML for the Google homepage.
  		json_obj = JSON.parse(body);
  		console.log(json_obj);
  		callback(json_obj.value.joke);
	});
}

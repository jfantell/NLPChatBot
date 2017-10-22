var builder = require('botbuilder');
var express = require('express');
var https = require('https');
var http = require('http');
var apiairecognizer = require('api-ai-recognizer');
var recognizer = new apiairecognizer("ebac356c08ec4fb2b3114a51df618d79");
var server = express();
var port = process.env.PORT || process.env.port || 5000;
server.use(express.static(__dirname + '/Views'));
server.listen(port);

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: "2c40a8a8-5272-4b64-b2f0-32095f40fe68",
    appPassword: "UQna86whcmvC6VOFBZY3KRX"
});

var bot = new builder.UniversalBot(connector); 

var intents = new builder.IntentDialog({ recognizers: [recognizer] }); 

bot.dialog('/',intents); 

intents.matches('Question_Intent',function(session, args){ 
	var fulfillment = builder.EntityRecognizer.findEntity(args.entities,'fulfillment');
     if (fulfillment) {
        var speech = fulfillment.entity;          
        session.send(speech);
     }
});

intents.matches('Human_Support_Intent',function(session, args){ 
    var fulfillment = builder.EntityRecognizer.findEntity(args.entities,'fulfillment');
     if (fulfillment) {
        var speech = fulfillment.entity;          
        session.send(speech);
     }
});


intents.matches('Default Welcome Intent',function(session, args){ 
	var fulfillment = builder.EntityRecognizer.findEntity(args.entities,'fulfillment');
     if (fulfillment) {
        var speech = fulfillment.entity;          
        session.send(speech);
     }
});

intents.matches('Default Fallback Intent',function(session, args){ 
    var fulfillment = builder.EntityRecognizer.findEntity(args.entities,'fulfillment');
     if (fulfillment) {
        var speech = fulfillment.entity;          
        session.send(speech);
     }
});


// Listen for messages from users 
server.get('/', function (req, res) {
  res.sendFile( __dirname + "/Views/" + "index.html" );
});

server.get('/mitr', function (req, res) {
  res.sendFile( __dirname + "/Views/" + "mitr.html" );
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());


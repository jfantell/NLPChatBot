var builder = require('botbuilder');
var express = require('express');
var https = require('https');
var http = require('http');
var apiairecognizer = require('api-ai-recognizer');
var recognizer = new apiairecognizer("ebac356c08ec4fb2b3114a51df618d79");
var server = express();
var port = process.env.PORT || process.env.port || 5001;
var util = require('./utility_functions');
server.use(express.static(__dirname + '/Views'));
server.listen(port, function(){
    console.log("Listening on port " + port);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: "2c40a8a8-5272-4b64-b2f0-32095f40fe68",
    appPassword: "UQna86whcmvC6VOFBZY3KRX"
});

var bot = new builder.UniversalBot(connector); 
bot.use(builder.Middleware.dialogVersion({ version: 0.2, resetCommand: /^reset/i }));

// Add custom API.ai recognizer for interacting with API.ai
bot.recognizer(new builder.IntentDialog({ recognizers: [recognizer] }));

bot.dialog('Welcome-Dialog', function(session,args) {
    console.log('Entered Welcome-Dialog');
    session.send(`Hi! What's your question?`);
}).triggerAction( { matches: 'Default Welcome Intent' } );


bot.dialog('Question-Dialog', function(session,args) {
    var request = builder.EntityRecognizer.findEntity(args.entities,'any');
    util.log(request);

    //Return relevant results to user
    var fulfillment = builder.EntityRecognizer.findEntity(args.entities,'fulfillment');
      if (fulfillment) {
        var speech = fulfillment.entity;          
        session.send(speech);
    }

    //Search documentation for request
    util.search(request, function(callback){
      console.log(callback);
      var msg = new builder.Message(session);
      msg.attachmentLayout(builder.AttachmentLayout.carousel)
      msg.attachments([
          new builder.HeroCard(session)
              .title("Did you know?")
              .text(callback)
              .images([builder.CardImage.create(session, 'http://petersapparel.parseapp.com/img/whiteshirt.png')])
              .buttons([
                  builder.CardAction.postBack(session, "helpful_", "Yes"),
                  builder.CardAction.postBack(session, "not_helpful_", "No")
              ])
      ]);
      session.send(msg);
    });
}).triggerAction( { matches: 'Question_Intent' } );


bot.dialog('Fallback-Dialog', function(session,args) {
    console.log('Entered Fallback-Dialog');
    session.send(`Sorry, I do not understand your question. Please try rephrasing your question.`);
}).triggerAction( { matches: 'Default Fallback Intent' } );


// Listen for messages from users 
server.get('/', function (req, res) {
  res.sendFile( __dirname + "/Views/" + "index.html" );
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());
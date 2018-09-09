# NLPChatBot

Sample NLP Chatbot built using Microsoft Bot Framework.

## Installation

1. Open up a web browser and create an account with [Microsoft Bot Framework](https://dev.botframework.com/).
2. Create a new bot (the MS site will walk you through this process).
3. Enable the "Web Chat" channel for your bot.
4. Clone this repository to your machine.
5. Replace the iframe snippet in the `Views/index.html` file with the one found on the MS "Web Chat" configuration page. Remember to replace the word "Secret Key" with your secret key (which also can be found on the "Web Chat" configuration page).
6. Click on the "Settings" tab on the MS bot site.
7. Open up two terminal windows; in each terminal navigate to the repository directory.
8. In one terminal, enter `npm install`. This will install all of the required modules for the chatbot and node server to work.
9. In the same terminal, enter `node server.js`. This will launch the server on `localhost:5001`.
9. In the second terminal window enter `./ngrok http 5001`.
9. Copy and paste the https Forwarding address (it should end in `.ngrok.io`) from the second terminal window into the "Messaging endpoint" field on the "Settings" page.
10. Click save at the bottom of the webpage.
11. Now enter `http://localhost:5001` in a web broswer to interact with the chatbot.



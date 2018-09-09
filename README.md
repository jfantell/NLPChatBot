# NLPChatBot

This repository features a Node.js chatbot built using Microsoft Bot Framework and Google's Dialogflow NLP API.

This repository was originally created in 2017. Since then, Microsoft now requires all new chatbot users to create an account through their Microsoft Azure service. As a result, most of the steps outlined in the `Installation` section will not work (unless you created a chatbot account prior to 2018).

Furthermore, this sample chatbot uses Dialogflow API v1 for natural language processing instead of v2, the latest API version.

I intend to upgrade this sample bot to utilize the latest bot framework SDK and Dialogflow API in the near future.

## Installation Instructions (Fall 2017)

1. Open up a web browser and create an account with [Microsoft Bot Framework](https://dev.botframework.com/).
2. Create a new bot (the MS site will walk you through this process).
3. Enable the "Web Chat" channel for your bot and click on the edit button to get to web chat configurations page.
4. Clone this repository to your machine.
5. Replace the iframe snippet in the `Views/index.html` file with the one found on the web chat configuration page. Remember to replace "Secret Key" with your actual secret key (which also can be found on the web chat configuration page).
6. In your browser, click on the chatbot settings page.
7. Open up two terminal windows; in each terminal navigate to the repository directory.
8. In the first terminal enter `npm install`. This will install all of the required modules for the chatbot and node server to work.
9. In the first terminal enter `node server.js`. This will launch the server on `localhost:5001`.
10. In the second terminal enter `./ngrok http 5001`.
11. Copy the https Forwarding address (it should end in `.ngrok.io`) from the second terminal window. 
12. In your browser, paste this address into the "Messaging endpoint" field of the chatbot settings page.
13. Click save at the bottom of the webpage.
14. Now enter `http://localhost:5001` in a web broswer to interact with the chatbot.



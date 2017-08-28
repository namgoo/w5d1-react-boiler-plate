Chatty App
=====================

Chatty App is a client-side SPA(single-page App) like Slack, which enables users to send out messages through WebSockets and Express. Users can change their names and the app keeps the log of the number of people who are on the page at the same time.

### Screenshots

!["Screenshot of 1st page of Chatty"](https://github.com/namgoo/w5d1-react-boiler-plate/blob/master/docs/Chatty_1st_1User.png)

!["Screenshot of view of 2nd User "](https://github.com/namgoo/w5d1-react-boiler-plate/blob/master/docs/Chatty_2nd_2%20Users.png)

!["Screenshot of 1st User Sending a message through server and getting it back"](https://github.com/namgoo/w5d1-react-boiler-plate/blob/master/docs/Chatty_3rd_User1_can_send%20a%20message.png)

!["Screenshot of 2nd User seeing the message 1st User sent"](https://github.com/namgoo/w5d1-react-boiler-plate/blob/master/docs/Chatty_4th_User2_Can_See_Message.png)

!["Screenshot of users can change their name"](https://github.com/namgoo/w5d1-react-boiler-plate/blob/master/docs/Chatty_5_User_Change_Name.png)

!["Screenshot of 2nd user sending a message"](https://github.com/namgoo/w5d1-react-boiler-plate/blob/master/docs/Chatty_5th_2nd_User_Can_Send.png)

!["Screenshot of console logging"](https://github.com/namgoo/w5d1-react-boiler-plate/blob/master/docs/Chatty_6th_Console.png)


### Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the npm install command.
3. Start the web server using the npm start. The app will be served at http://localhost:3000/
4. Start WebSocket server by going into the "chatty_server" and using "node chatty_server.js." 
   The server will listen on http://localhost:3001/
5. Go to http://localhost:3000/ in your browser.


### Dependencies

babel-core
babel-loader
babel-preset-es2015
babel-preset-react
css-loader
node-sass
sass-loader
sockjs-client
style-loader
webpack
webpack-dev-server
react
react-dom
express
websockets


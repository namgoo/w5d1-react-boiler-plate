// server.js
const WebSocket = require('ws');
const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

// Create Random IDs
const uuidv4 = require('uuid/v4')

wss.on('connection', (ws) => {
  console.log('Client connected');
  let numOfPeople = {type: "userCount", number: wss.clients.size }
    console.log('numOfPeople', numOfPeople)
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(numOfPeople))
        }
    })
  ws.on('message', (data) => {
    console.log('I am receiving content from the browser into the server')
    if (JSON.parse(data).type === "postMessage") {
      const message = JSON.parse(data)
      const idMessage = {type: "incomingMessage", id:uuidv4(), username: message.username, content: message.content}
      console.log("User " + idMessage.username + " said " + idMessage.content)
   // broadcast to everyone (including myself)
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(idMessage));
        }
      })
    }
    if (JSON.parse(data).type === "postNotification") {
      const notification = JSON.parse(data)
      const newNotification = {type: "incomingNotification", content: notification.content}
      console.log(newNotification)
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(newNotification));
        }
      })
    }

  })

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected')
    let numOfPeople = {type: "userCount", number: wss.clients.size }
    console.log('numOfPeople', numOfPeople)
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(numOfPeople))
        }
    })
  });


});



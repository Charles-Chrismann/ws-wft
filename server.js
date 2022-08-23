
const express = require('express');
const WebSocketServer = require("ws");

const PORT = process.env.PORT || 5000;
const INDEX = './public/index.html';



// Does not work with app

const app = express()
.listen(PORT, () => console.log(`Listening on ${PORT}`));
const wss = new WebSocketServer.Server({ app });

//  work with server

// const server = express()
// .listen(PORT, () => console.log(`Listening on ${PORT}`));
// const wss = new WebSocketServer.Server({ server });

// Comment un block of code and uncomment the other to try

// server.js
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: process.env.PORT || 3000 });

server.on('connection', (socket) => {
    socket.on('message', (message) => {
        // Broadcast the message to all connected clients
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

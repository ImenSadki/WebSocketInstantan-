// Importer la bibliothèque WebSocket
const WebSocket = require('ws');

// Créer un serveur WebSocket sur le port 3000
const server = new WebSocket.Server({ port: 3000 });

// Événement déclenché lorsqu'un client se connecte
server.on('connection', (socket) => {
  console.log('Client connected');

  // Événement déclenché lorsqu'un message est reçu du client
  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Répondre au client avec le même message
    socket.send(`Server received: ${message}`);
  });

  // Événement déclenché lorsqu'un client se déconnecte
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

// Afficher un message lorsque le serveur démarre
console.log('WebSocket server is running on ws://localhost:3000');

class ExampleGameModuleExtension {
  clientManager: any;
  players: {
    [s: string]: {
      rotation: number,
      x: number,
      y: number,
      playerId: string,
      userId: number,
      team: string,
    },
  } = {};
  star = {
    x: Math.floor(Math.random() * 960) + 50,
    y: Math.floor(Math.random() * 960) + 50,
  };
  scores = {
    blue: 0,
    red: 0,
  };

  constructor(clientManager: any) {
    this.clientManager = clientManager;
  }

  /**
   * Implements the setup hook.
   * Called once after the app starts. Use this hook to add custom behavior to the
   * clientManager, and to initialize your extension.
   */
  setup() {
    /**
     * The client-authenticated event is emitted after the client has been
     * authenticated.
     */
    process.on('client-authenticated', (sessionId: string, authData: { uid: number }) => {
      const socket = this.clientManager.sockets[sessionId];

      console.log('a user connected');

      // create a new player and add it to our players object
      this.players[sessionId] = {
        rotation: 0,
        x: Math.floor(Math.random() * 700) + 50,
        y: Math.floor(Math.random() * 500) + 50,
        playerId: sessionId,
        userId: authData.uid,
        team: (Math.floor(Math.random() * 2) === 0) ? 'red' : 'blue',
      };
      // send the players object to the new player
      socket.emit('currentPlayers', this.players);
      // send the star object to the new player
      socket.emit('starLocation', this.star);
      //   // send the current scores
      socket.emit('scoreUpdate', this.scores);
      // update all other players of the new player
      socket.broadcast.emit('newPlayer', this.players[sessionId]);

      // when a player disconnects, remove them from our players object
      process.on('client-disconnect', (sessionId: string) => {
        // remove this player from our players object
        delete this.players[sessionId];
        // emit a message to all players to remove this player
        socket.emit('playerDisconnect', sessionId);
        socket.broadcast.emit('playerDisconnect', sessionId);
      });

      // when a player moves, update the player data
      socket.on('playerMovement', (movementData: { x: number, y: number, rotation: number }) => {
        this.players[sessionId].x = movementData.x;
        this.players[sessionId].y = movementData.y;
        this.players[sessionId].rotation = movementData.rotation;
        // emit a message to all players about the player that moved
        socket.broadcast.emit('playerMoved', this.players[sessionId]);
      });

      socket.on('starCollected', () => {
        if (this.players[sessionId].team === 'red') {
          this.scores.red += 10;
        }
        else {
          this.scores.blue += 10;
        }
        this.star.x = Math.floor(Math.random() * 960) + 50;
        this.star.y = Math.floor(Math.random() * 960) + 50;
        socket.emit('starLocation', this.star);
        socket.broadcast.emit('starLocation', this.star);
        socket.emit('scoreUpdate', this.scores);
        socket.broadcast.emit('scoreUpdate', this.scores);
      });
    });
  }
}

module.exports = (clientManager: any) => {
  const server = new ExampleGameModuleExtension(clientManager);
  server.setup();
};

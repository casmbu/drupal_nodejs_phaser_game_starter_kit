import * as Lobby from './scenes/lobby';

// game class
export class ExampleGameModule extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

// when the page is loaded, create our game instance
{
  const checkSocket = () => {
    if (!Drupal.Nodejs.socket) {
      window.setTimeout(checkSocket, 100);
      return;
    }

    const config: GameConfig = {
      type: Phaser.AUTO,
      parent: document.getElementById('example_game_module') || 'example_game_module',
      width: 960,
      height: 960,
      render: {
        autoResize: false,
      },
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: { y: 0 },
        },
      },
      scene: [
        new Lobby.MainScene(Drupal.Nodejs.socket),
        new Lobby.UIMainScene(Drupal.Nodejs.socket),
      ],
    };

    const game = new ExampleGameModule(config);

    const resize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight - 88;
      game.resize(windowWidth, windowHeight);
    };

    window.setTimeout(resize, 1000);
    window.addEventListener('resize', resize, false);
  };
  (() => {
    window.setTimeout(checkSocket, 0);
  })();
}

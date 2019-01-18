import * as Entity from '../game_objects/entity';

export class MainScene extends Phaser.Scene {
  socket: any;
  ship: Entity.Player | null = null;
  star: Phaser.Physics.Arcade.Image | null = null;
  otherPlayers: Entity.OtherPlayer[] = [];

  constructor(socket: any) {
    super({
      key: 'MainScene',
    });
    this.socket = socket;
  }

  preload() {
    const assetFolder = 'sites/example.com/modules/custom/example_game_module/assets/';

    this.load.image('ship', `${assetFolder}spaceShips_001.png`);
    this.load.image('otherPlayer', `${assetFolder}enemyBlack5.png`);
    this.load.image('star', `${assetFolder}star_gold.png`);

    this.load.image('town-tiles', `${assetFolder}town_tileset.png`);
  }

  create() {
    // tslint:disable:max-line-length
    const level = [
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
      [177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177],
    ];
    // tslint:enable:max-line-length
    const map = this.make.tilemap({
      data: level,
      tileWidth: 32,
      tileHeight: 32,
    });
    const tiles = map.addTilesetImage('town-tiles');
    const layer = map.createStaticLayer(0, tiles, 0, 0);

    // set bounds so the camera won't go outside the game world
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setViewport(0, 0, 500, 500);

    this.socket.on('currentPlayers', (
      players: {
        [playerId: string]: {
          x: number,
          y: number,
          team: string,
          playerId: string,
        },
      },
    ) => {
      Object.keys(players).forEach((sessionId) => {
        if (sessionId === this.socket.id) {
          this.addPlayer(players[sessionId]);
        }
        else {
          this.addOtherPlayer(players[sessionId]);
        }
      });
    });

    this.socket.on('newPlayer', (
      playerInfo: {
        x: number,
        y: number,
        team: string,
        playerId: string,
      },
    ) => {
      this.addOtherPlayer(playerInfo);
    });

    this.socket.on('playerDisconnect', (playerId: string) => {
      this.otherPlayers.every((otherPlayer: Entity.OtherPlayer, i) => {
        if (playerId === otherPlayer.playerId) {
          otherPlayer.sprite.destroy();
          this.otherPlayers.splice(i, 1);
          return false;
        }
        return true;
      });
    });

    this.socket.on('playerMoved', (
      { x, y, rotation, team, playerId }: {
        x: number,
        y: number,
        rotation: number,
        team: string,
        playerId: string,
      },
    ) => {
      this.otherPlayers.every((otherPlayer: Entity.OtherPlayer) => {
        if (otherPlayer.playerId === playerId) {
          otherPlayer.sprite.setRotation(rotation);
          otherPlayer.sprite.setPosition(x, y);
          return false;
        }
        return true;
      });
    });

    this.socket.on('starLocation', (starLocation: { x: number, y: number }) => {
      if (this.star) this.star.destroy();
      if (!this.ship) return;
      this.star = this.physics.add.image(
        starLocation.x,
        starLocation.y,
        'star',
      );
      this.physics.add.overlap(this.ship.sprite, this.star, () => {
        if (this.star) this.star.destroy();
        this.socket.emit('starCollected');
      });
    });

    this.events.on('resize', this.resize, this);
  }

  update() {
    if (!this.ship) return;

    const pointer = this.input.activePointer;
    if (pointer.isDown) {
      const angle = Phaser.Math.Angle.Between(
        this.ship.sprite.x,
        this.ship.sprite.y,
        pointer.x + this.cameras.main.scrollX,
        pointer.y + this.cameras.main.scrollY,
      );
      this.ship.sprite.angle = (angle - Math.PI / 2) * Phaser.Math.RAD_TO_DEG;

      this.physics.velocityFromRotation(
        this.ship.sprite.rotation + 1.5,
        700,
        (this.ship.sprite.body as Phaser.Physics.Arcade.Body).acceleration,
      );
    }
    else {
      this.ship.sprite.setAcceleration(0);
    }

    this.physics.world.wrap(this.ship.sprite, 5);

    if (
      this.ship.oldPosition
      && this.ship.hasMoved()
    ) {
      this.socket.emit('playerMovement', {
        x: this.ship.sprite.x,
        y: this.ship.sprite.y,
        rotation: this.ship.sprite.rotation,
      });
    }
    this.ship.saveOldPosition();
  }

  resize(width: number, height: number) {
    let w = width;
    let h = height;
    if (w === undefined) { w = 500; }
    if (h === undefined) { h = 500; }

    this.cameras.resize(w, h);
  }

  private addPlayer(
    { x, y, team, playerId }: {
      x: number,
      y: number,
      team: string,
      playerId: string,
    },
  ) {
    if (this.ship) return;
    this.ship = new Entity.Player(this, x, y, playerId);
    if (team === 'blue') {
      this.ship.sprite.setTint(0x0000ff);
    }
    else {
      this.ship.sprite.setTint(0xff0000);
    }
    this.ship.sprite.setDrag(100);
    this.ship.sprite.setAngularDrag(100);
    this.ship.sprite.setMaxVelocity(200);

    // make the camera follow the player
    this.cameras.main.startFollow(this.ship.sprite);
  }

  private addOtherPlayer(
    { x, y, team, playerId }: {
      x: number,
      y: number,
      team: string,
      playerId: string,
    },
  ) {
    const otherPlayer = new Entity.OtherPlayer(this, x, y, playerId);
    if (team === 'blue') {
      otherPlayer.sprite.setTint(0x0000ff);
    }
    else {
      otherPlayer.sprite.setTint(0xff0000);
    }
    otherPlayer.playerId = playerId;
    this.otherPlayers.push(otherPlayer);
  }
}

export class UIMainScene extends Phaser.Scene {
  socket: any;
  blueScoreText: Phaser.GameObjects.Text | null = null;
  redScoreText: Phaser.GameObjects.Text | null = null;

  constructor(socket: any) {
    super({
      key: 'UIMainScene',
      active: true,
    });
    this.socket = socket;
  }

  create() {
    this.blueScoreText = this.add.text(16, 16, '', {
      fontSize: '24px',
      fill: '#0000FF',
    });
    this.redScoreText = this.add.text(16, 56, '', {
      fontSize: '24px',
      fill: '#FF0000',
    });

    this.socket.on('scoreUpdate', ({ blue, red }: { blue: number, red: number }) => {
      if (!this.blueScoreText || !this.redScoreText) return;

      this.blueScoreText.setText(`Blue: ${blue}`);
      this.redScoreText.setText(`Red: ${red}`);
    });
  }
}

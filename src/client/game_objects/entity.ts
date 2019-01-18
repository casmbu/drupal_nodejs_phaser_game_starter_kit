abstract class Entity {
  protected scene: Phaser.Scene;
  public abstract sprite: Phaser.GameObjects.GameObject;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }
}

export class Player extends Entity {
  sprite: Phaser.Physics.Arcade.Image;
  oldPosition: { x: number, y: number, rotation: number };
  playerId: string | null;

  constructor(
    scene: Phaser.Scene,
    initialX: number,
    initialY: number,
    playerId: string,
  ) {
    super(scene);
    this.sprite = this.scene.physics.add.image(
      initialX,
      initialY,
      'ship',
    ).setOrigin(0.5, 0.5).setDisplaySize(53, 40);
    this.oldPosition = {
      x: initialX,
      y: initialY,
      rotation: this.sprite.rotation,
    };
    this.playerId = playerId;
  }

  public hasMoved() {
    if (
      this.sprite.x !== this.oldPosition.x
      || this.sprite.y !== this.oldPosition.y
      || this.sprite.rotation !== this.oldPosition.rotation
    ) {
      return true;
    }
    return false;
  }

  public saveOldPosition() {
    this.oldPosition.x = this.sprite.x;
    this.oldPosition.y = this.sprite.y;
    this.oldPosition.rotation = this.sprite.rotation;
  }
}

export class OtherPlayer extends Entity {
  sprite: Phaser.GameObjects.Sprite;
  playerId: string | null;

  constructor(scene: Phaser.Scene, initialX: number, initialY: number, playerId: string) {
    super(scene);
    this.sprite = scene.add.sprite(
      initialX,
      initialY,
      'otherPlayer',
    ).setOrigin(0.5, 0.5).setDisplaySize(53, 40);
    this.playerId = playerId;
  }
}

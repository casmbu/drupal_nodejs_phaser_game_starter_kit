# Drupal Node.js Phaser Game Starter Kit

This is a starter kit meant to get you off the ground when developing a Node.js and Phaser 3 game for a Drupal 8 website. The code here can probably be adapted to any Node.js server software or client side system required.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need Node.js and npm. You can obtain them from https://nodejs.org. You will also need Drupal 8.

### Installing

Here is some steps that should get you up and running in a local environment. I use Visual Studio Code as an editor, however the project should work with other editors.

Clone this repository.

Open a prompt and navigate to the root of this repository and run `npm install`.

Once that is done, you can run `npm run build` to create the compiled javascript.

The `dist/example_game_module` is the module code that you can install into your Drupal modules folder. This will create a route at /example_game_module that runs the game.

In Drupal, you will need to install Nodejs from [drupal/nodejs](https://www.drupal.org/project/nodejs). Follow their instructions to set up the drupal-node.js server.

In your `nodejs.config.js` file (which is part of the drupal-node.js server), make the extensions array look like this:

```
extensions: [
  '../../../example_game_module/js/server.bundle.js'
]
```

The exact value for the server extension location depends on where you installed your drupal-node.js server. This path starts in the `./node_modules/drupal-node.js/extensions/` folder.

Change to the drupal-node.js folder and run `node app.js` or, if you've opted to install `forever` you can run `forever start app.js`. You must do this from the drupal-node.js folder.

You should be ready to go to http://[YOUR DOMAIN]/example_game_module to test out your configuration.

If you experience any issues please submit an issue to [issues](https://github.com/casmbu/drupal_nodejs_phaser_game_starter_kit/issues).

## Built With

* [Node.js](https://nodejs.org/) - The server framework
* [Drupal 8](https://www.drupal.org/) - CMS to host a website around the game
* [Drupal Nodejs](https://www.drupal.org/project/nodejs/) - Drupal module to integrate Node.js
* [Phaser 3](https://phaser.io/phaser3) - Client side game engine

## Authors

* **Tyson Gray** - *Initial work* - [casmbu](https://github.com/casmbu)

See also the list of [contributors](https://github.com/casmbu/drupal_nodejs_phaser_game_starter_kit/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Original example game code came from [gamedevacademy.org](https://gamedevacademy.org/create-a-basic-multiplayer-game-in-phaser-3-with-socket-io-part-1/).

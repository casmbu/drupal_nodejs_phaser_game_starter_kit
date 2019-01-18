<?php
namespace Drupal\example_game_module\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Component\Utility\Xss;

/**
 * Defines ExampleGameModuleController class.
 */
class ExampleGameModuleController extends ControllerBase {

  /**
   * Display the markup.
   *
   * @return array
   *   Return markup array.
   */
  public function mainPage() {
    // Start building the content.
    $build = [];

    // Main container DIV. We give it a unique ID so that Phaser can find it.
    $build['content'] = [
      '#type' => 'markup',
      '#markup' => '<div id="example_game_module"></div>',
    ];
    // Attach library containing css and js files.
    $build['#attached']['library'][] = 'example_game_module/example_game_module.phaser';
    $build['#attached']['library'][] = 'example_game_module/example_game_module.game';

    return $build;
  }
}

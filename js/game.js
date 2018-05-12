window.onload = () => {
  game.TransitionTo('overWorld')
  game.loop.Start(game)
}

var game = {
  defaultControls: require('./defaultControls'),
  loop: require('./loop'),
  scene: {active: false},

  TransitionTo: function (sceneName) {
    if (game.scene.active) {
      game.scene.Stop()
      document.getElementById('wrapper').innerHTML = ''
      delete game.scene
    }

    game.scene = require('./scenes/' + sceneName + '/' + sceneName + '.js')
    game.scene.Start()
    game.scene.active = true
  }

}

module.exports = game

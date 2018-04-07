window.onload = () => {
  game.TransitionTo('overWorld')
}

var game = {
  defaultControls: require('./defaultControls'),
  scene: {active: false},

  TransitionTo: function (sceneName) {
    if (game.scene.active) {
      game.scene.Stop()
      document.onkeydown = function (e) { game.defaultControls.KeyDown(e.keyCode) }
      document.getElementById('wrapper').innerHTML = ''
      delete game.scene
    }

    game.scene = require('./scenes/' + sceneName + '/' + sceneName + '.js')
    game.scene.Start()
    game.scene.active = true
  }
}

module.exports = game

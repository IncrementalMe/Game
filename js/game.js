window.onload = () => {
  game.TransitionTo('overWorld')
  game.loop.Start(game)

  window.onkeydown = window.onkeyup = function (e) {
    game.keysDown[e.keyCode] = e.type === 'keydown'
  }
}

var game = {
  loop: require('./loop'),
  scene: {active: false},
  keysDown: {},

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

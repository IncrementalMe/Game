window.onload = () => {
  game.TransitionTo('overWorld')
}

var game = {
  defaultControls: require('./defaultControls'),
  sceneName: '',

  TransitionTo: function (sceneName) {
    if (game.sceneName !== '') {
      game[game.sceneName].Stop()
      document.onkeydown = function (e) { game.defaultControls.KeyDown(e.keyCode) }
      document.getElementById('wrapper').innerHTML = ''
      delete game[game.sceneName]
    }

    game[sceneName] = require('./scenes/' + sceneName + '/' + sceneName + '.js')
    game.sceneName = sceneName
    game[sceneName].Start()
  }
}

module.exports = game

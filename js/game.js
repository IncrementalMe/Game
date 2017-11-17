window.onload = () => {
    game.TransitionTo('overWorld')
    game.sceneName = "overWorld"
    game.overWorld.Start()
}

var game = {
    sceneName: '',

    TransitionTo: function (sceneName) {
        if (game.sceneName !== '') {
            game[game.sceneName].Stop()
            document.getElementById('wrapper').innerHTML = ''
            delete game[game.sceneName]
        }

        game[sceneName] = require('./scenes/' + sceneName + '/' + sceneName + '.js')
        game.sceneName = sceneName
    }
}

module.exports = game
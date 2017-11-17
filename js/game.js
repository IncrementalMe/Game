window.onload = () => {
    game.TransitionTo('overWorld')
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
        game[sceneName].Start()
    }
}

module.exports = game
var draw = require('./overWorld/draw.js')
require('./overWorld/controls.js')

window.onload = () => {
    draw.OnLoad()
    game.player.Spawn({ x: 1, y: 1 })
}

var game = {
    map: require('./overWorld/map.js'),
    player: require('./overWorld/player.js')
}

module.exports = game
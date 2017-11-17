var draw = require('./draw.js')
require('./controls.js')

window.onload = () => {
    draw.OnLoad()
    game.map.player.Spawn({ x: 1, y: 1 })
}

var game = {
    map: require('./overWorld.js')
}

module.exports = game
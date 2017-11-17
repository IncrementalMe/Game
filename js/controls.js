document.onkeydown = function (e) {
    const remote = require('electron').remote

    switch (e.keyCode) {
        case 38: // up
            game.map.player.TryMove({ x: 0, y: -1 })
            break
        case 39: // right
            game.map.player.TryMove({ x: 1, y: 0 })
            break
        case 40: // down
            game.map.player.TryMove({ x: 0, y: 1 })
            break
        case 37: // left
            game.map.player.TryMove({ x: -1, y: 0 })
            break

        case 87: // w
            game.map.player.TryMove({ x: 0, y: -1 })
            break
        case 68: // d
            game.map.player.TryMove({ x: 1, y: 0 })
            break
        case 83: // s
            game.map.player.TryMove({ x: 0, y: 1 })
            break
        case 65: // a
            game.map.player.TryMove({ x: -1, y: 0 })
            break

        case 27: // escape
            remote.getCurrentWindow().close()
            break
    }
}
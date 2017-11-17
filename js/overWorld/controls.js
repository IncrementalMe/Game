document.onkeydown = function (e) {
    const remote = require('electron').remote

    switch (e.keyCode) {
        case 38: // up
            game.player.TryMove({ x: 0, y: -1 })
            break
        case 39: // right
            game.player.TryMove({ x: 1, y: 0 })
            break
        case 40: // down
            game.player.TryMove({ x: 0, y: 1 })
            break
        case 37: // left
            game.player.TryMove({ x: -1, y: 0 })
            break

        case 87: // w
            game.player.TryMove({ x: 0, y: -1 })
            break
        case 68: // d
            game.player.TryMove({ x: 1, y: 0 })
            break
        case 83: // s
            game.player.TryMove({ x: 0, y: 1 })
            break
        case 65: // a
            game.player.TryMove({ x: -1, y: 0 })
            break

        case 27: // escape
            remote.getCurrentWindow().close()
            break
    }
}
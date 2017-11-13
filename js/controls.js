document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 38: // up
            overWorld.player.TryMove({ x: 0, y: -1 })
            break;
        case 39: // right
            overWorld.player.TryMove({ x: 1, y: 0 })
            break;
        case 40: // down
            overWorld.player.TryMove({ x: 0, y: 1 })
            break;
        case 37: // left
            overWorld.player.TryMove({ x: -1, y: 0 })
            break;

        case 87: // w
            overWorld.player.TryMove({ x: 0, y: -1 })
            break;
        case 68: // d
            overWorld.player.TryMove({ x: 1, y: 0 })
            break;
        case 83: // s
            overWorld.player.TryMove({ x: 0, y: 1 })
            break;
        case 65: // a
            overWorld.player.TryMove({ x: -1, y: 0 })
            break;
    }
}
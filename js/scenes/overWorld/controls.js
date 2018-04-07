document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38: // up
      window.game.overWorld.player.TryMove({ x: 0, y: -1 })
      break
    case 39: // right
      window.game.overWorld.player.TryMove({ x: 1, y: 0 })
      break
    case 40: // down
      window.game.overWorld.player.TryMove({ x: 0, y: 1 })
      break
    case 37: // left
      window.game.overWorld.player.TryMove({ x: -1, y: 0 })
      break

    case 87: // w
      window.game.overWorld.player.TryMove({ x: 0, y: -1 })
      break
    case 68: // d
      window.game.overWorld.player.TryMove({ x: 1, y: 0 })
      break
    case 83: // s
      window.game.overWorld.player.TryMove({ x: 0, y: 1 })
      break
    case 65: // a
      window.game.overWorld.player.TryMove({ x: -1, y: 0 })
      break

    default:
      window.game.defaultControls.KeyDown(e.keyCode)
  }
}

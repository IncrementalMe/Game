document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38: // up
      window.game.scene.player.TryMove({ x: 0, y: -1 })
      break
    case 39: // right
      window.game.scene.player.TryMove({ x: 1, y: 0 })
      break
    case 40: // down
      window.game.scene.player.TryMove({ x: 0, y: 1 })
      break
    case 37: // left
      window.game.scene.player.TryMove({ x: -1, y: 0 })
      break

    case 87: // w
      window.game.scene.player.TryMove({ x: 0, y: -1 })
      break
    case 68: // d
      window.game.scene.player.TryMove({ x: 1, y: 0 })
      break
    case 83: // s
      window.game.scene.player.TryMove({ x: 0, y: 1 })
      break
    case 65: // a
      window.game.scene.player.TryMove({ x: -1, y: 0 })
      break

    default:
      window.game.defaultControls.KeyDown(e.keyCode)
  }
}

var player = {
  pos: null,

  Spawn: function (pos) {
    window.game.overWorld.map.current[pos.y][pos.x] = 2
    this.pos = pos
  },

  TryMove: function (dir) {
    if (this.pos === null) { return }
    var targetPos = { x: this.pos.x + dir.x, y: this.pos.y + dir.y }

    switch (window.game.overWorld.map.current[targetPos.y][targetPos.x]) {
      case 1:
        window.game.overWorld.map.current[targetPos.y][targetPos.x] = 2
        window.game.overWorld.map.current[this.pos.y][this.pos.x] = 1
        this.pos = targetPos
        break

      case 3:
        window.game.TransitionTo('battle')
    }
  }
}

module.exports = player

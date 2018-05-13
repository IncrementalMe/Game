var player = {
  pos: null,
  img: document.createElement('img'),
  render: true,
  scale: { width: 55, hieght: 55 },
  movespeed: 3,
  bounds: { x: 0, y: 0 },

  Spawn: function (pos) {
    this.pos = pos
    this.img.src = ('./img/lorc/teeth.png')
  },

  TryMove: function () {
    if (this.pos === null) { return }

    var keysDown = window.game.keysDown
    var dir = { x: 0, y: 0 }

    if (keysDown['87'] === true) dir.y -= 1 // w
    if (keysDown['65'] === true) dir.x -= 1 // a
    if (keysDown['83'] === true) dir.y += 1 // s
    if (keysDown['68'] === true) dir.x += 1 // d

    var targetPos = this.pos

    if (Math.abs(dir.x) + Math.abs(dir.y) === 2) { // diagonal movement
      targetPos.x += Math.sqrt(2) / 2 * dir.x * this.movespeed
      targetPos.y += Math.sqrt(2) / 2 * dir.y * this.movespeed
    } else {
      targetPos.x += dir.x * this.movespeed
      targetPos.y += dir.y * this.movespeed
    }

    var bounds = this.bounds
    this.bounds.width = window.game.scene.draw.ctx.canvas.width
    this.bounds.height = window.game.scene.draw.ctx.canvas.height

    if (this.pos.x < bounds.x) this.pos.x = bounds.x
    if (this.pos.x > bounds.width) this.pos.x = bounds.width
    if (this.pos.y < bounds.y) this.pos.y = bounds.y
    if (this.pos.y > bounds.height) this.pos.y = bounds.height
  },

  Update: function (ctx) {
    player.TryMove()
  },

  Draw: function (ctx) {
    if (player.render) {
      ctx.drawImage(this.img, this.pos.x, this.pos.y, this.scale.width, this.scale.hieght)
    }
  },

  Stop: function () {
    this.render = false
  }
}

module.exports = player

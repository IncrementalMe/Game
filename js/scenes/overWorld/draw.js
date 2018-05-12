var draw = {
  ctx: null,

  Start: function () {
    draw.ctx = document.getElementById('mainCanvas').getContext('2d')
    draw.ctx.canvas.width = window.innerWidth
    draw.ctx.canvas.height = window.innerHeight

    window.requestAnimationFrame(draw.Update)
  },

  stopAnimating: false,
  Update: function () {
    if (draw.ctx === null) { return }
    if (draw.stopAnimating) { return }

    window.game.scene.map.current.forEach((row, y) => {
      row.forEach((tile, x) => {
        draw.Tile({ x: x, y: y }, tile)
      })
    })
  },

  Tile: function (pos, tile) {
    var fill = true

    switch (tile) {
      case 3:
        fill = false
        break
      case 2:
        draw.ctx.fillStyle = '#123b98'
        break
      case 0:
        draw.ctx.fillStyle = '#685b48'
        break
      default:
        draw.ctx.fillStyle = '#5aa457'
    }

    var target = {
      x: pos.x * window.game.scene.map.tileWidth,
      y: pos.y * window.game.scene.map.tileHeight,
      width: window.game.scene.map.tileWidth,
      height: window.game.scene.map.tileHeight
    }

    if ((pos.x + pos.y) % 2 === 0) {
      draw.ctx.fillStyle = draw.BrightenTile(draw.ctx.fillStyle, 4)
    } else {
      draw.ctx.fillStyle = draw.BrightenTile(draw.ctx.fillStyle, -4)
    }
    if (fill) {
      draw.ctx.fillRect(target.x, target.y, target.width, target.height)
    } else {
      var img = document.createElement('img')
      img.src = ('./img/lorc/teeth.png')
      draw.ctx.drawImage(img, target.x, target.y, target.width, target.height)
    }
  },

  BrightenTile: function (hexString, amount) {
    var reg = /[a-z1-9]{2}/g
    var result
    var out = '#'
    while ((result = reg.exec(hexString)) !== null) {
      var value = parseInt(result, 16) + amount
      if (value > 255) value = 255
      out += value.toString(16)
    }
    return out
  }
}

module.exports = draw

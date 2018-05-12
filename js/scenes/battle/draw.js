var draw = {
  ctx: null,

  Start: function () {
    draw.ctx = document.getElementById('battleCanvas').getContext('2d')
    draw.ctx.canvas.width = window.innerWidth
    draw.ctx.canvas.height = window.innerHeight

    window.addEventListener('resize', draw.Resize)
  },

  Stop: function () {
    draw.stopAnimating = true

    window.removeEventListener('resize', draw.Resize)
  },

  stopAnimating: false,
  Update: function () {
    if (draw.ctx === null) { return }
    var ctx = draw.ctx

    ctx.fillStyle = '#808080'
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

    ctx.beginPath()
    ctx.fillStyle = '#509060'
    ctx.arc(window.innerWidth / 2, window.innerHeight + 11685, 12000, 0, Math.PI, true)
    ctx.fill()

    window.game.scene.player.Draw(ctx)

    window.game.scene.enemyContainer.all.forEach(enemy => {
      enemy.Update(draw.ctx)
    })
  },

  Resize: function () {
    draw.ctx.canvas.width = window.innerWidth
    draw.ctx.canvas.height = window.innerHeight
  }
}

module.exports = draw

var draw = {
    ctx: null,

    Start: function () {
        draw.ctx = document.getElementById('battleCanvas').getContext('2d')
        draw.ctx.canvas.width = window.innerWidth
        draw.ctx.canvas.height = window.innerHeight

        window.addEventListener('resize', draw.Resize)

        requestAnimationFrame(draw.Update)
    },

    Stop: function () {
        draw.stopAnimating = true

        window.removeEventListener('resize', draw.Resize)
    },

    stopAnimating: false,
    Update: function () {
        if (draw.ctx == null) { return }
        if (draw.stopAnimating) { return }

        draw.ctx.fillStyle = '#808080'
        draw.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

        draw.ctx.beginPath()
        draw.ctx.fillStyle = '#50a060'
        draw.ctx.arc(window.innerWidth / 2, window.innerHeight + 11685, 12000, 0, Math.PI, true)
        draw.ctx.fill()

        game.battle.enemyContainer.all.forEach(enemy => {
            enemy.Update(draw.ctx)
        })

        requestAnimationFrame(draw.Update)
    },

    Resize: function () {
        draw.ctx.canvas.width = window.innerWidth
        draw.ctx.canvas.height = window.innerHeight
    }
}

module.exports = draw                      
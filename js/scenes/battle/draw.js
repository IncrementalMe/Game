var draw = {
    ctx: null,

    Start: function () {
        draw.ctx = document.getElementById('battleCanvas').getContext('2d')
        draw.ctx.canvas.width = window.innerWidth
        draw.ctx.canvas.height = window.innerHeight

        window.addEventListener('resize', draw.Resize)

        requestAnimationFrame(draw.Update)
    },

    stopAnimating: false,
    Update: function () {
        if (draw.ctx == null) { return }
        if (draw.stopAnimating) { return }

        draw.ctx.fillStyle = '#808080'
        draw.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

        draw.ctx.fillStyle = '#50a060'
        draw.ctx.fillRect(0, window.innerHeight * 0.55, window.innerWidth, window.innerWidth * 0.55)


        requestAnimationFrame(draw.Update)
    },

    Resize: function () {
        draw.ctx.canvas.width = window.innerWidth
        draw.ctx.canvas.height = window.innerHeight
    }
}

module.exports = draw                      
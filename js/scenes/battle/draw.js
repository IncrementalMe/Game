window.addEventListener('resize', function (e) {
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
})

var draw = {
    Start: function () {
        ctx = document.getElementById('battleCanvas').getContext('2d')
        ctx.canvas.width = window.innerWidth
        ctx.canvas.height = window.innerHeight
        requestAnimationFrame(draw.Update)
        ctx.font = 'bold 10pt sans-serif'
    },

    stopAnimating: false,
    Update: function () {
        if (ctx == null) { return }
        if (draw.stopAnimating) { return }

        ctx.fillStyle = '#808080'
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

        ctx.fillStyle = '#50a060'
        ctx.fillRect(0, window.innerHeight * 0.55, window.innerWidth, window.innerWidth * 0.55)

        requestAnimationFrame(draw.Update)
    }
}

module.exports = draw                      
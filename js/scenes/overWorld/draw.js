var draw = {

    fps: {
        currentSecond: 0,
        frameCount: 0,
        framesLastSecond: 0,

        Update: function () {
            var sec = Math.floor(Date.now() / 1000)
            if (sec != this.currentSecond) {
                this.currentSecond = sec
                this.framesLastSecond = this.frameCount
                this.frameCount = 1
            }
            else { this.frameCount++ }
            ctx.fillStyle = '#ff0000'
            ctx.fillText('FPS: ' + this.framesLastSecond, 10, 20)
        }
    },

    Start: function () {
        ctx = document.getElementById('mainCanvas').getContext('2d')
        ctx.canvas.width = game.overWorld.map.width * game.overWorld.map.tileWidth
        ctx.canvas.height = game.overWorld.map.height * game.overWorld.map.tileHeight
        requestAnimationFrame(draw.Update)
        ctx.font = 'bold 10pt sans-serif'
    },

    stopAnimating: false,
    Update: function () {
        if (ctx == null) { return }
        if (draw.stopAnimating) { return }

        game.overWorld.map.current.forEach((row, y) => {
            row.forEach((tile, x) => {
                draw.Tile({ x: x, y: y }, tile)
            })
        })

        draw.fps.Update()
        requestAnimationFrame(draw.Update)
    },

    Tile: function (pos, tile) {
        var fill = true

        switch (tile) {
            case 3:
                fill = false
                image = true
                break;
            case 2:
                ctx.fillStyle = '#123b98'
                break;
            case 0:
                ctx.fillStyle = '#685b48'
                break;
            default:
                ctx.fillStyle = '#5aa457'
        }

        var target = {
            x: pos.x * game.overWorld.map.tileWidth,
            y: pos.y * game.overWorld.map.tileHeight,
            width: game.overWorld.map.tileWidth,
            height: game.overWorld.map.tileHeight
        }

        if ((pos.x + pos.y) % 2 === 0)
            ctx.fillStyle = draw.BrightenTile(ctx.fillStyle, 4)
        else
            ctx.fillStyle = draw.BrightenTile(ctx.fillStyle, -4)

        if (fill)
            ctx.fillRect(target.x, target.y, target.width, target.height)
        else {
            var img = new Image()
            img.src = ('./img/teeth.png')
            ctx.drawImage(img, target.x, target.y, target.width, target.height)
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
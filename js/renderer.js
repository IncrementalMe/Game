window.onload = () => {
    draw.OnLoad()
    overWorld.player.Spawn({ x: 1, y: 1 })
}

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
            ctx.fillStyle = "#ff0000"
            ctx.fillText("FPS: " + this.framesLastSecond, 10, 20)
        }
    },

    OnLoad: function () {
        ctx = document.getElementById('game').getContext("2d")
        ctx.canvas.width = overWorld.width * overWorld.tileWidth
        ctx.canvas.height = overWorld.height * overWorld.tileHeight
        requestAnimationFrame(draw.Update)
        ctx.font = "bold 10pt sans-serif"
    },

    Update: function () {
        if (ctx == null) { return }

        overWorld.current.forEach((row, y) => {
            row.forEach((tile, x) => {
                draw.Tile({ x: x, y: y }, tile)
            })
        })

        draw.fps.Update()
        requestAnimationFrame(draw.Update)
    },

    Tile: function (pos, tile) {
        switch (tile) {
            case 2:
                ctx.fillStyle = "#123b98"
                break;
            case 0:
                ctx.fillStyle = "#685b48"
                break;
            default:
                ctx.fillStyle = "#5aa457"
        }
        ctx.fillRect(pos.x * overWorld.tileWidth, pos.y * overWorld.tileHeight, overWorld.tileWidth, overWorld.tileHeight)
    }
}
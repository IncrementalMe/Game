var test = document.getElementById('test');
test.innerHTML = "Test"

var map = {
    current: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],

    tileWidth: 40,
    tileHeight: 40,
}
map.width = map.current[0].length
map.height = map.current.length

var player = {
    pos: null,

    Spawn: function (pos) {
        map.current[pos.y][pos.x] = 2
        this.pos = pos
    },

    TryMove: function (dir) {
        if (this.pos == null) { return }
        var targetPos = { x: this.pos.x + dir.x, y: this.pos.y + dir.y }

        if (map.current[targetPos.y][targetPos.x] == 1) {
            map.current[targetPos.y][targetPos.x] = 2
            map.current[this.pos.y][this.pos.x] = 1
            this.pos = targetPos
        }
    }
}

window.onload = () => {
    draw.OnLoad()
    player.Spawn({ x: 1, y: 1 })
}

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37: // left
            player.TryMove({ x: -1, y: 0 })
            break;
        case 38: // up
            player.TryMove({ x: 0, y: -1 })
            break;
        case 39: // right
            player.TryMove({ x: 1, y: 0 })
            break;
        case 40: // down
            player.TryMove({ x: 0, y: 1 })
            break;
    }
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
        ctx.canvas.width = map.width * map.tileWidth
        ctx.canvas.height = map.height * map.tileHeight
        requestAnimationFrame(draw.Update)
        ctx.font = "bold 10pt sans-serif"
    },

    Update: function () {
        if (ctx == null) { return }

        map.current.forEach((row, y) => {
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
        ctx.fillRect(pos.x * map.tileWidth, pos.y * map.tileHeight, map.tileWidth, map.tileHeight)
    }
}
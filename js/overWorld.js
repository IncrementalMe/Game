var overWorld = {
    tileWidth: 40,
    tileHeight: 40,

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

    player: {
        pos: null,

        Spawn: function (pos) {
            overWorld.current[pos.y][pos.x] = 2
            this.pos = pos
        },

        TryMove: function (dir) {
            if (this.pos == null) { return }
            var targetPos = { x: this.pos.x + dir.x, y: this.pos.y + dir.y }

            if (overWorld.current[targetPos.y][targetPos.x] == 1) {
                overWorld.current[targetPos.y][targetPos.x] = 2
                overWorld.current[this.pos.y][this.pos.x] = 1
                this.pos = targetPos
            }
        }
    }
}
overWorld.width = overWorld.current[0].length
overWorld.height = overWorld.current.length

module.exports = overWorld
var loop = {
  tick: require('./tick'),
  game: null,

  Start: function (gameIn) {
    this.game = gameIn
    this.tick.start()
    this.Loop()
  },

  Loop: function () {
    loop.Update(loop.tick.tick())
    loop.game.scene.draw.Update()
    window.requestAnimationFrame(loop.Loop)
  },

  Update: function (ticks) {
    if (ticks > 0) loop.game.scene.Update()
  }
}

module.exports = loop

var tick = {
  lastTick: null,
  totalDeltaTime: null,

  start: function () {
    tick.lastTick = new Date().getTime()
    tick.totalDeltaTime = 0
  },

  tick: function () {
    var now = new Date().getTime()
    var deltaTime = now - tick.lastTick
    tick.totalDeltaTime += deltaTime
    tick.lastTick = now

    if (tick.totalDeltaTime >= 1000 / 60) {
      var ticks = Math.floor(tick.totalDeltaTime / (1000 / 60))
      tick.totalDeltaTime -= 1000 / 60 * ticks
      return ticks
    }
    return 0
  }
}

module.exports = tick

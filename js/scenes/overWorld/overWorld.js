var overWorld = {
  draw: require('./draw.js'),
  map: require('./map.js'),
  player: require('./player.js'),
  controls: require('./controls.js'),

  Start: function () {
    document.getElementById('wrapper').innerHTML =
      `<h1 class="ttCenter" id="test">World Map</h1>
            <div class="ttCenter">Witty in-dev joke</div>
                <div id="tileWrapper">
            <canvas id="mainCanvas"></canvas>
            </div>`

    overWorld.player.Spawn({ x: 1, y: 1 })
    overWorld.draw.Start()

    document.onkeydown = function (e) { overWorld.controls.keyDown(e) }
  },

  Update: function () {
  },

  Stop: function () {
    document.onkeydown = function () {}
    overWorld.controls = null
    overWorld.draw.stopAnimating = true
  }
}

module.exports = overWorld

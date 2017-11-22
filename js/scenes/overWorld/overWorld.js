var overWorld = {
  draw: require('./draw.js'),
  map: require('./map.js'),
  player: require('./player.js'),

  Start: function () {
    document.getElementById('wrapper').innerHTML =
      `<h1 class="ttCenter" id="test">World Map</h1>
            <div class="ttCenter">Witty in-dev joke</div>
                <div id="tileWrapper">
            <canvas id="mainCanvas"></canvas>
            </div>`

    overWorld.player.Spawn({ x: 1, y: 1 })
    overWorld.draw.Start()

    require('./controls.js')
  },

  Stop: function () {
    overWorld.draw.stopAnimating = true
  }
}

module.exports = overWorld

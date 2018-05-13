var battle = {
  draw: require('./draw.js'),
  player: require('./player.js'),
  Enemy: require('./enemy.js'),
  enemyContainer: { all: [] },

  Start: function () {
    document.getElementById('wrapper').innerHTML =
      `<canvas id="battleCanvas"></canvas>`

    var newEnemy = new battle.Enemy({ x: 70, y: 460 })
    battle.enemyContainer.all.push(newEnemy)

    newEnemy = new battle.Enemy({ x: 70, y: 380 })
    battle.enemyContainer.all.push(newEnemy)

    newEnemy = new battle.Enemy({ x: 140, y: 420 })
    battle.enemyContainer.all.push(newEnemy)

    battle.player.Spawn({ x: 60, y: 60 })
    battle.draw.Start()
  },

  Update: function () {
    battle.player.Update()
  },

  Stop: function () {
    battle.draw.Stop()
  }
}

module.exports = battle

var battle = {
  draw: require('./draw.js'),
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

    battle.draw.Start()
  },

  Stop: function () {
    battle.draw.Stop()
  }
}

module.exports = battle

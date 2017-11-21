var battle = {
    draw: require('./draw.js'),
    enemy: require('./enemy.js'),
    enemyContainer: { all: [] },

    Start: function () {
        document.getElementById('wrapper').innerHTML =
            `<canvas id="battleCanvas"></canvas>`

        var newEnemy = new battle.enemy({ x: 70, y: 460 })
        battle.enemyContainer.all.push(newEnemy)

        newEnemy = new battle.enemy({ x: 70, y: 380 })
        battle.enemyContainer.all.push(newEnemy)

        newEnemy = new battle.enemy({ x: 140, y: 420 })
        battle.enemyContainer.all.push(newEnemy)

        battle.draw.Start()
    },

    dothing: function () {
        console.log("whythefuck")
    },

    Stop: function () {
        battle.draw.Stop()
    }
}

module.exports = battle
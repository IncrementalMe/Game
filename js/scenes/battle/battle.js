var battle = {
    draw: require('./draw.js'),

    Start: function () {
        document.getElementById('wrapper').innerHTML =
            `<canvas id="battleCanvas"></canvas>`
        battle.draw.Start()
    },

    dothing: function () {
        console.log("whythefuck")
    },

    Stop: function () {
    }
}

module.exports = battle
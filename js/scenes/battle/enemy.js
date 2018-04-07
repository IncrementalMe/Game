function Enemy (pos = { x: 0, y: 0 }) {
  this.img = document.createElement('img')
  this.img.src = ('./img/lorc/teeth.png')
  this.render = true

  this.pos = pos
  this.scale = { width: 55, hieght: 55 }

  this.Start = function () {
    document.getElementById('wrapper').innerHTML =
      `<canvas id="battleCanvas"></canvas>`
    window.battle.draw.Start()
  }

  this.Update = function (ctx) {
    if (this.render) this.Draw(ctx)
  }

  this.Draw = function (ctx) {
    ctx.drawImage(this.img, this.pos.x, this.pos.y, this.scale.width, this.scale.hieght)
  }

  this.Stop = function () {
    this.render = false
  }
}

module.exports = Enemy

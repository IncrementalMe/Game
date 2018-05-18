var player = {
  pos: null,
  render: true,
  img: null,
  scale: { width: 55, hieght: 55 },
  movespeed: 3,
  bounds: { x: 0, y: 0 },
  animations: {},
  animationFrame: 1,
  animationFrameCounter: 0,
  currentAnimation: 'idle',
  lastAnimation: 'idle',

  Spawn: function (pos) {
    this.pos = pos
    this.animations['attack'] = this.CreateAnimation('./img/gob/attack', '.png', 6)
    this.animations['death'] = this.CreateAnimation('./img/gob/death', '.png', 7)
    this.animations['idle'] = this.CreateAnimation('./img/gob/idle', '.png', 3)
    this.animations['run'] = this.CreateAnimation('./img/gob/run', '.png', 6)
    this.img = this.animations['idle'][0]
  },

  CreateAnimation: function (path, ending, length, start = 1) {
    var arrayOut = []
    for (var i = 1; i < length + 1; i++) {
      var newImg = document.createElement('img')
      newImg.src = path + i + ending
      arrayOut.push(newImg)
    }
    return arrayOut
  },

  TryMove: function () {
    if (this.pos === null) { return }

    var keysDown = window.game.keysDown
    var dir = { x: 0, y: 0 }

    if (keysDown['87'] === true) dir.y -= 1 // w
    if (keysDown['65'] === true) dir.x -= 1 // a
    if (keysDown['83'] === true) dir.y += 1 // s
    if (keysDown['68'] === true) dir.x += 1 // d

    var targetPos = this.pos

    if (Math.abs(dir.x) + Math.abs(dir.y) === 2) { // diagonal movement
      this.currentAnimation = 'run'
      targetPos.x += Math.sqrt(2) / 2 * dir.x * this.movespeed
      targetPos.y += Math.sqrt(2) / 2 * dir.y * this.movespeed
    } else if (dir.y + dir.x !== 0) {
      this.currentAnimation = 'run'
      targetPos.x += dir.x * this.movespeed
      targetPos.y += dir.y * this.movespeed
    } else {
      this.currentAnimation = 'idle'
    }

    if (this.lastAnimation === this.currentAnimation) {
      this.animationFrameCounter++
      if (this.animationFrameCounter > 20) {
        this.animationFrameCounter = 0
        this.animationFrame++
        if (this.animationFrame > this.animations[this.currentAnimation].length - 1) {
          this.animationFrame = 1
        }
      }
      console.log(this.currentAnimation + '  ' + this.animationFrame)
      this.img = this.animations[this.currentAnimation][this.animationFrame]
    } else {
      this.animationFrame = 1
      this.animationFrameCounter = 0
    }

    var bounds = this.bounds
    this.bounds.width = window.game.scene.draw.ctx.canvas.width
    this.bounds.height = window.game.scene.draw.ctx.canvas.height

    if (this.pos.x < bounds.x) this.pos.x = bounds.x
    if (this.pos.x > bounds.width) this.pos.x = bounds.width
    if (this.pos.y < bounds.y) this.pos.y = bounds.y
    if (this.pos.y > bounds.height) this.pos.y = bounds.height

    this.lastAnimation = this.currentAnimation
  },

  Update: function (ctx) {
    player.TryMove()
  },

  Draw: function (ctx) {
    if (player.render) {
      console.log(this.img.src)
      ctx.drawImage(this.img, this.pos.x, this.pos.y, this.scale.width, this.scale.hieght)
    }
  },

  Stop: function () {
    this.render = false
  }
}

module.exports = player

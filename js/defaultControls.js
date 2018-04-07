var defaultControls = {
  remote: require('electron').remote,

  KeyDown: function (keyCode) {
    switch (keyCode) {
      case 27: // escape
        window.game.scene.Stop()
        defaultControls.remote.getCurrentWindow().close()
        break
    }
  }
}

module.exports = defaultControls

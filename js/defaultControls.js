var defaultControls = {
  remote: require('electron').remote,

  KeyDown: function (keyCode) {
    if (keyCode === 27) { // esc
      window.game.scene.Stop()
      defaultControls.remote.getCurrentWindow().close()
    }
  }
}

module.exports = defaultControls

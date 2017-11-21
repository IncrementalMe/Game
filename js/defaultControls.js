var defaultControls = {
    remote: require('electron').remote,

    KeyDown: function (keyCode) {
        switch (keyCode) {
            case 27: // escape
                defaultControls.remote.getCurrentWindow().close()
                break
        }
    }
}

module.exports = defaultControls
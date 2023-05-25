if (theme.backgrounds) {
    var backgrounds = require(`${theme.backgrounds}`)
    var index = 0
    setInterval(function() {
      $('body').css('background-image', `url(${backgrounds[index]})`)
      index = (index + 1) % backgrounds.length
    }, 10000)  
  }
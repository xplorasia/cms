window.jQuery = window.$ = require('jquery')

$(document).ready(function () {
  var trigger = $('.hamburger')
  var overlay = $('.overlay')
  var isClosed = false

  trigger.click(function () {
    hamburgerCross()
  })

  function hamburgerCross () {
    if (isClosed === true) {
      overlay.hide()
      trigger.removeClass('is-open')
      trigger.addClass('is-closed')
      isClosed = false
    } else {
      overlay.show()
      trigger.removeClass('is-closed')
      trigger.addClass('is-open')
      isClosed = true
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled')
  })

  $('#sidebar-wrapper a.router-link-active').click(function () {
    $('[data-toggle="offcanvas"]').click()
  })
})

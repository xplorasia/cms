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

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('#wrapper').toggleClass('toggled')
  })

  $('#sidebar-wrapper .close-menu').on('click', function () {
    $('[data-toggle="offcanvas"]').click()
  })
})

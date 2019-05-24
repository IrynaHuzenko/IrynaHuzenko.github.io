// function for main-header scroll
$(function() {
    var header = $(".main-header");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("changeColor");
        } else {
            header.removeClass("changeColor");
        }
    });
  });
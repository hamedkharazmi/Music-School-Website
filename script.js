$ (function () {
  $ (window).scroll (function () {
    var FACTOR = 0.5;
    var $heroImage = $ ('.hero-image');

    var distanceScrolled = Math.max (0, $ (window).scrollTop ());
    var totalDistanceToScroll = $heroImage.height ();
    var percentComplete = Math.min (
      distanceScrolled / totalDistanceToScroll,
      1
    );

    var translateY = percentComplete * 100 * FACTOR;

    $heroImage.css ({transform: 'translateY(' + translateY + '%)'});


    var $navbar = $ ('nav');
    var $navbarWrapper = $ ('.navbar-wrapper');

    var pinPoint = $navbarWrapper.offset ().top;

    if (distanceScrolled >= pinPoint) {
      $navbar.addClass ('pinned');
    } else {
      $navbar.removeClass ('pinned');
    }
  });



  $ ('a[href*="#"]').click (function (e) {
    e.preventDefault ();
    var $target = $ ($ (this).attr ('href'));
    var scrollTop = $target.offset ().top;
    $ ('html, body').animate ({scrollTop: scrollTop}, 500);
  });
});


$('#checkbox').change(function(){
  setInterval(function () {
      moveRight();
  }, 3000);
});

var slideCount = $('#slider ul li').length;
var slideWidth = $('#slider ul li').width();
var slideHeight = $('#slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;

$('#slider').css({ width: slideWidth, height: slideHeight });

$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

  $('#slider ul li:last-child').prependTo('#slider ul');

  function moveLeft() {
      $('#slider ul').animate({
          left: + slideWidth
      }, 200, function () {
          $('#slider ul li:last-child').prependTo('#slider ul');
          $('#slider ul').css('left', '');
      });
  };

  function moveRight() {
      $('#slider ul').animate({
          left: - slideWidth
      }, 200, function () {
          $('#slider ul li:first-child').appendTo('#slider ul');
          $('#slider ul').css('left', '');
      });
  };

  $('a.control_prev').click(function () {
      moveLeft();
  });

  $('a.control_next').click(function () {
      moveRight();
  });


  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  




$(document).ready(function() {



  $.ajax({    
    type: "GET",
    url: "backend.php?q=asatid",             
    dataType: "html",                   
    success: function(response){                    
      $(".asatid-table").html(response); 
    }
  });
  $.ajax({    
    type: "GET",
    url: "backend.php?q=term",             
    dataType: "html",               
    success: function(response){                    
      $(".term-table").html(response); 
    }
  });
  $.ajax({  
    type: "GET",
    url: "backend.php?q=class",             
    dataType: "html",               
    success: function(response){                    
      $(".class-table").html(response); 
    }
  });


});
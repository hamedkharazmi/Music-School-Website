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




$(document).ready(function() {



  



  $.ajax({   
    type: "GET",
    url: "backend.php?q=asatid-admin",             
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
    url: "backend.php?q=class-admin",             
    dataType: "html",              
    success: function(response){                    
      $(".class-table").html(response); 
    }
  });
  $.ajax({    
    type: "GET",
    url: "backend.php?q=honarjo-admin",             
    dataType: "html",                
    success: function(response){                    
      $(".honarjo-table").html(response); 
    }
  });
  $.ajax({   
    type: "GET",
    url: "backend.php?q=term-admin",             
    dataType: "html",                 
    success: function(response){                    
      $(".term-table").html(response); 
    }
  });

  $("#backup").click(function() {                
    $.ajax({   
      type: "GET",
      url: "backend.php?q=backup",             
      dataType: "html",              
    });
    $('#backup-done').css('visibility', 'visible');
  });

  $("#restore").click(function() {                
    $.ajax({   
      type: "GET",
      url: "backend.php?q=restore",             
      dataType: "html",                 
    });
    $('#restore-done').css('visibility', 'visible');
  });




});

function printData1() {
  var divToPrint=document.getElementById("table1");
  newWin= window.open("");
  newWin.document.write(divToPrint.outerHTML);
  newWin.print();
  newWin.close();
}

function printData2() {
  var divToPrint=document.getElementById("table2");
  newWin= window.open("");
  newWin.document.write(divToPrint.outerHTML);
  newWin.print();
  newWin.close();
}

function printData3() {
  var divToPrint=document.getElementById("table3");
  newWin= window.open("");
  newWin.document.write(divToPrint.outerHTML);
  newWin.print();
  newWin.close();
}

function printData4() {
  var divToPrint=document.getElementById("table4");
  newWin= window.open("");
  newWin.document.write(divToPrint.outerHTML);
  newWin.print();
  newWin.close();
}


function searchToggle(obj, evt){
  var container = $(obj).closest('.search-wrapper');
      if(!container.hasClass('active')){
          container.addClass('active');
          evt.preventDefault();
      }
      else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
          container.removeClass('active');
          // clear input
          container.find('.search-input').val('');
      }
}




var btn = document.querySelector( '#btn' );
var btnFront = btn.querySelector( '#btn-front' );
btnFront.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn.offsetLeft, my = event.clientY - btn.offsetTop;
  var w = btn.offsetWidth, h = btn.offsetHeight;
  var directions = [ { id: 'top', x: w/2, y: 0 }, { id: 'right', x: w, y: h/2 }, { id: 'bottom', x: w/2, y: h }, { id: 'left', x: 0, y: h/2 } ];
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn.setAttribute( 'data-direction', directions.shift().id );
  btn.classList.add( 'is-open' );
});

var btn2 = document.querySelector( '#btn2' );
var btnFront2 = btn2.querySelector( '#btn-front2' );
btnFront2.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn2.offsetLeft, my = event.clientY - btn2.offsetTop;
  var w = btn2.offsetWidth, h = btn2.offsetHeight;
  var directions = [ { id: 'top', x: w/2, y: 0 }, { id: 'right', x: w, y: h/2 }, { id: 'bottom', x: w/2, y: h }, { id: 'left', x: 0, y: h/2 } ];
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn2.setAttribute( 'data-direction', directions.shift().id );
  btn2.classList.add( 'is-open' );
});

var btn3 = document.querySelector( '#btn3' );
var btnFront3 = btn3.querySelector( '#btn-front3' );
btnFront3.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn3.offsetLeft, my = event.clientY - btn3.offsetTop;
  var w = btn3.offsetWidth, h = btn3.offsetHeight;
  var directions = [ { id: 'top', x: w/2, y: 0 }, { id: 'right', x: w, y: h/2 }, { id: 'bottom', x: w/2, y: h }, { id: 'left', x: 0, y: h/2 } ];
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn3.setAttribute( 'data-direction', directions.shift().id );
  btn3.classList.add( 'is-open' );
});

var btn4 = document.querySelector( '#btn4' );
var btnFront4 = btn4.querySelector( '#btn-front4' );
btnFront4.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn4.offsetLeft, my = event.clientY - btn4.offsetTop;
  var w = btn4.offsetWidth, h = btn4.offsetHeight;
  var directions = [ { id: 'top', x: w/2, y: 0 }, { id: 'right', x: w, y: h/2 }, { id: 'bottom', x: w/2, y: h }, { id: 'left', x: 0, y: h/2 } ];
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn4.setAttribute( 'data-direction', directions.shift().id );
  btn4.classList.add( 'is-open' );
});

var btn5 = document.querySelector( '#btn5' );
var btnFront5 = btn5.querySelector( '#btn-front5' );
btnFront5.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn5.offsetLeft, my = event.clientY - btn5.offsetTop;
  var w = btn5.offsetWidth, h = btn5.offsetHeight;
  var directions = [ { id: 'top', x: w/2, y: 0 }, { id: 'right', x: w, y: h/2 }, { id: 'bottom', x: w/2, y: h }, { id: 'left', x: 0, y: h/2 } ];
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn5.setAttribute( 'data-direction', directions.shift().id );
  btn5.classList.add( 'is-open' );
});
var btn6 = document.querySelector( '#btn6' );
var btnFront6 = btn6.querySelector( '#btn-front6' );
btnFront6.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn6.offsetLeft, my = event.clientY - btn6.offsetTop;
  var w = btn6.offsetWidth, h = btn6.offsetHeight;
  var directions = [ { id: 'top', x: w/2, y: 0 }, { id: 'right', x: w, y: h/2 }, { id: 'bottom', x: w/2, y: h }, { id: 'left', x: 0, y: h/2 } ];
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn6.setAttribute( 'data-direction', directions.shift().id );
  btn6.classList.add( 'is-open' );
});
var btn7 = document.querySelector( '#btn7' );
var btnFront7 = btn7.querySelector( '#btn-front7' );
btnFront7.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn7.offsetLeft, my = event.clientY - btn7.offsetTop;
  var w = btn7.offsetWidth, h = btn7.offsetHeight;
  var directions = [ { id: 'top', x: w/2, y: 0 }, { id: 'right', x: w, y: h/2 }, { id: 'bottom', x: w/2, y: h }, { id: 'left', x: 0, y: h/2 } ];
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn7.setAttribute( 'data-direction', directions.shift().id );
  btn7.classList.add( 'is-open' );
});
var btn8 = document.querySelector( '#btn8' );
var btnFront8 = btn8.querySelector( '#btn-front8' );
btnFront8.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn8.offsetLeft, my = event.clientY - btn8.offsetTop;
  var w = btn8.offsetWidth, h = btn8.offsetHeight;
  var directions = [ { id: 'top', x: w/2, y: 0 }, { id: 'right', x: w, y: h/2 }, { id: 'bottom', x: w/2, y: h }, { id: 'left', x: 0, y: h/2 } ];
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn8.setAttribute( 'data-direction', directions.shift().id );
  btn8.classList.add( 'is-open' );
});
var btn9 = document.querySelector( '#btn9' );
var btnFront9 = btn9.querySelector( '#btn-front9' );
btnFront9.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn9.offsetLeft, my = event.clientY - btn9.offsetTop;
  var w = btn9.offsetWidth, h = btn9.offsetHeight;
  var directions = [ { id: 'top', x: w/2, y: 0 }, { id: 'right', x: w, y: h/2 }, { id: 'bottom', x: w/2, y: h }, { id: 'left', x: 0, y: h/2 } ];
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn9.setAttribute( 'data-direction', directions.shift().id );
  btn9.classList.add( 'is-open' );
});
var btn10 = document.querySelector( '#btn10' );
var btnFront10 = btn10.querySelector( '#btn-front10' );
btnFront10.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn10.offsetLeft, my = event.clientY - btn10.offsetTop;
  var w = btn10.offsetWidth, h = btn10.offsetHeight;
  var directions = [ { id: 'top', x: w/2, y: 0 }, { id: 'right', x: w, y: h/2 }, { id: 'bottom', x: w/2, y: h }, { id: 'left', x: 0, y: h/2 } ];
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn10.setAttribute( 'data-direction', directions.shift().id );
  btn10.classList.add( 'is-open' );
});




function distance( x1, y1, x2, y2 ) {
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt( dx*dx + dy*dy );
}
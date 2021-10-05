$ ('.info-item .btn').click (function () {
  $ ('.container').toggleClass ('log-in');
});
$ ('.container-form .btn').click (function () {
  $ ('.container').addClass ('active');
});



function Mainpage () {
  window.location.href = 'index.html';
}

$('#myForm-signup').submit(function() {
  $('#error-form').text("ثبت نام انجام شد");
  $('#submit-myForm-signup').remove();
  setTimeout ('Mainpage()', 3000);
  return false;
});
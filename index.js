$(function() {
  'use strict';


$('.question-item').click(function() {
    var $answer = $(this).next();

    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();

      $(this).find('span').text('+');

    } else {
      $answer.addClass('open');
      $answer.slideDown();

      $(this).find('span').text('-');
    }
  });

$('#classes').addClass('none');

// ページ内リンク、スムーススクロール
$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 1000;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing" );
		return false;
	});
});



});
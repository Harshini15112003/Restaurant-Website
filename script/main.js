
$(document).ready(function() {
$("#menu-icon").click(function(){
  $(".sidebar").addClass("open");
    $(".sidebar").removeClass("close");
	$(".cover_close").addClass("cover");
});
$("#close").click(function(){
  $(".sidebar").removeClass("open");
    $(".sidebar").addClass("close");
	$(".cover_close").removeClass("cover");
});

$(".cover_close").click(function(){
  $(".sidebar").removeClass("open");
    $(".sidebar").addClass("close");
	$(".cover_close").removeClass("cover");
});
});
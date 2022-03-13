jQuery(function ($) {
  //$(".title").css('background-color', 'rgb(255,0,0)');
  $(".info").append('<span data-v-f3ac38c0 class="favorite styled" id="button">★</span>');
  
  $(".favorite").click(function(){
    $(this).toggleClass('isActive');
  })

  $(".loginMenu").append('<li data-v-69b3dcd9><a data-v-69b3dcd9 href=/bookmark>"ブックマーク"</a></li>');
});
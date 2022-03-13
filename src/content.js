jQuery(function ($) {
  $(".info").append('<span data-v-f3ac38c0 class="favorite styled" id="button">★</span>');

  $(".favorite").click(function () {
    $(this).toggleClass('isActive');
  })

  $(".menuBtn").click(function () {
    if (!($('#BtnBookMark').length)) {
      $(".loginMenu").append('<li data-v-69b3dcd9><a data-v-69b3dcd9 href=/bookmark id="BtnBookMark">★ ブックマーク</a></li>');
    }
  })
});
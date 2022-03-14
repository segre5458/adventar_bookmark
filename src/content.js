jQuery(function ($) {
  $(".info").append('<span data-v-f3ac38c0 class="favorite styled" id="button">★</span>');

  $(".favorite").click(function () {
    $(this).toggleClass('isActive');
    if ($(this).css("color") == "rgb(255, 165, 0)") {
      $(".isActive").parent().parent().prop("class", "item fav");
    }
  })

  $(".menuBtn").click(function () {
    if (!($('#BtnBookMark').length)) {
      $(".loginMenu").append('<li data-v-69b3dcd9 id="bookMark"><button data-v-69b3dcd9 id="BtnBookMark">★ ブックマーク</button></li>');
      if ($(".item").prop("class") == "item fav") {
        var refer = $(".fav > .title").prop("href");
        var title = $(".fav > .title").text();
        console.log(refer);
        console.log(title);
        var content = '<a data-v-69b3dcd9 href=' + refer + '>' + title + '</a>';
        $("#bookMark").append(content);
      }
    }
  })
});
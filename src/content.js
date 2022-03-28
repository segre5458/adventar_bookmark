jQuery(function ($) {
  $(".info").append('<span data-v-f3ac38c0 class="favorite styled" id="button">★</span>');

  $(".favorite").click(function () {
    if ($(this).css("color") == "rgb(255, 165, 0)") {
      $(".isActive").parent().parent().prop("class", "item");
    }
    $(this).toggleClass('isActive');
    if ($(this).css("color") == "rgb(255, 165, 0)") {
      $(".isActive").parent().parent().prop("class", "item fav");
    }
  })

  $(".menuBtn").click(function () {
    if (!($('#BtnBookMark').length)) {
      $(".loginMenu").append('<li data-v-69b3dcd9 id="bookMark"><button data-v-69b3dcd9 id="BtnBookMark">★ ブックマーク</button></li>');
      $(".fav").each(function () {
        var refer = $(this).find(".title").prop("href");
        var title = $(this).find(".title").text();
        console.log(refer);
        console.log("hoge");
        var content = '<a data-v-69b3dcd9 href=' + refer + '>' + title + '</a>';
        $("#bookMark").append(content);
      })
    }
  })
});
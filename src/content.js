jQuery(function ($) {
  // 星マークを追加
  $(".info").append('<span data-v-f3ac38c0 class="favorite styled" id="button">★</span>');
  // ブックマーク済みの記事をブックマーク
  $(".title").each(function () {
    var title = $(this).text();
    var active = $(this).parent().find(".info").find(".favorite");
    chrome.storage.local.get("BookMarkContent", function (value) {
      if (title == value.BookMarkContent.title) {
        active.toggleClass('isActive');
      }
    });
  });

  $(".favorite").click(function () {
    if ($(this).css("color") == "rgb(255, 165, 0)") {
      $(this).parent().parent().prop("class", "item");
    }
    $(this).toggleClass('isActive');
    if ($(this).css("color") == "rgb(255, 165, 0)") {
      $(this).parent().parent().prop("class", "item fav");
      var refer = $(this).parent().parent().find(".title").prop("href");
      var title = $(this).parent().parent().find(".title").text();
      chrome.storage.local.set({ "BookMarkContent": { "href": refer, "title": title } }, function () { });
    }
  })

  $(".menuBtn").click(function () {
    //ブックマークタグがない場合は追加
    if (!($('#BtnBookMark').length)) {
      $(".loginMenu").append('<li data-v-69b3dcd9 id="bookMark"><button data-v-69b3dcd9 id="BtnBookMark">★ ブックマーク</button></li>');

      //ブックマークした記事をブックマークタグ以下に追加
      $(".fav").each(function () {
        // var refer = $(this).find(".title").prop("href");
        // var title = $(this).find(".title").text();
        chrome.storage.local.get("BookMarkContent", function (result) {
          var refer = result.BookMarkContent.href;
          var title = result.BookMarkContent.title;
          console.log(title);
          console.log(refer);
          var content = '<a data-v-69b3dcd9 href=' + refer + '>' + title + '</a>';
          $("#bookMark").append(content);
        });
        console.log("hoge");
        //var content = '<a data-v-69b3dcd9 href=' + refer + '>' + title + '</a>';
        //$("#bookMark").append(content);
      });
    }
  })
});
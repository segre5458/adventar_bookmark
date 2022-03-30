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
    }
    // bookmark用json生成
    //var data = "[";
    var data = "{";
    var cnt = 1;
    $(".fav").each(function () {
      var refer = $(this).find(".title").prop("href");
      var title = $(this).find(".title").text();
      var datas = "\""+cnt+"\":";
      var js = { "href": refer, "title": title };
      var addData = JSON.stringify(js);
      data += datas + addData + ",";
      cnt++;
    })
    var json = data.slice(0, -1);
    json += "}";
    console.log(json);
    var obj = JSON.parse(json);
    console.log(obj);
    chrome.storage.local.set(obj, function () {
      console.log("hoghe");
    });
  })

  $(".menuBtn").click(function () {
    //ブックマークタグがない場合は追加
    if (!($('#BtnBookMark').length)) {
      $(".loginMenu").append('<li data-v-69b3dcd9 id="bookMark"><button data-v-69b3dcd9 id="BtnBookMark">★ ブックマーク</button></li>');

      //ブックマークした記事をブックマークタグ以下に追加
      $(".fav").each(function () {
        chrome.storage.local.get("", function (result) {
          var refer = result.href;
          var title = result.title;
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
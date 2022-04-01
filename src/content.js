jQuery(function ($) {
  // 星マークを追加
  $(".info").append('<span data-v-f3ac38c0 class="favorite styled" id="button">★</span>');
  // ブックマーク済みの記事をブックマーク
  let title = "";
  for (let i = 1; i <= 100; i++) {
    chrome.storage.local.get(String(i), function (result) {
      try {
        title = result[i].title;
        $("a:contains(" + title + ")").parent().find(".info").find(".favorite").toggleClass('isActive');
      }
      catch (error) {
      }
    })
  }

  let cnt = 0;
  $(".favorite").click(function () {
    if ($(this).css("color") == "rgb(255, 165, 0)") {
      $(this).parent().parent().prop("class", "item");
    }
    $(this).toggleClass('isActive');
    if ($(this).css("color") == "rgb(255, 165, 0)") {
      $(this).parent().parent().prop("class", "item fav");
    }
    // bookmark用json生成
    // TO DO: bookmarkを外したときjsonから削除
    cnt = 0;
    let data = "{";
    $(".fav").each(function () {
      cnt++;
      let refer = $(this).find(".title").prop("href");
      let title = $(this).find(".title").text();
      let datas = "\"" + cnt + "\":";
      let js = { "href": refer, "title": title };
      let addData = JSON.stringify(js);
      data += datas + addData + ",";
    })
    let json = data.slice(0, -1);
    json += "}";
    let obj = JSON.parse(json);
    console.log(obj);
    chrome.storage.local.set(obj, function () {
    });
  })

  $(".menuBtn").click(function () {
    //ブックマークタグがない場合は追加
    if (!($('#BtnBookMark').length)) {
      $(".loginMenu").append('<li data-v-69b3dcd9 id="bookMark"><button data-v-69b3dcd9 id="BtnBookMark">★ ブックマーク</button></li>');
      for (let article = 1; article <= cnt; article++) {
        chrome.storage.local.get(String(article), function (result) {
          let refer = result[article].href;
          let title = result[article].title;
          console.log(refer);
          console.log(title);
          let content = '<a data-v-69b3dcd9 href=' + refer + '>' + title + '</a>';
          $("#bookMark").append(content);
        })
      }
    }
  })
});
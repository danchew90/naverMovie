$(function () {
  var showBanner = 0;
  console.log(showBanner);
  var obj = $(".banner>.b1").clone();
  $(".banner").append(obj);
  function moveBanner() {
    if (showBanner == 3) {
      showBanner = 0;
      $(".banner").css("margin-left", 0);
    }
    showBanner++;
    $(".banner")
      .stop()
      .animate(
        {
          marginLeft: `${showBanner * -1920}px`,
        },
        1000
      );
  }
  $(".leftBtn").click(function () {
    if (showBanner > 0) {
      showBanner--;
    }
    moveBanner();
  });
  $(".rightBtn").click(function () {
    if (showBanner < 3) {
      showBanner++;
    }
    moveBanner();
  });

  setInterval(moveBanner, 5000);
});

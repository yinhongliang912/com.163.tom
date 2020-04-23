$(function () {
  var numberImg = $(".pic li").length; //获取图片的长度
  var index = 0; //定义图片初始化个数
  setInterval(function () {
    index++;
    if (index == numberImg) {
      index = 0;
    }
    $(".pic li").eq(index).siblings().css("display", "none");
    $(".pic li").eq(index).css("display", "block");
  }, 2000);
});

$(function () {
  var zhi = $(".liu ul").length; //获取图片的长度
  var num = 0; //定义图片初始化个数
  setInterval(function () {
    num++;
    if (num == zhi) {
      num = 0;
    }
    $(".liu ul").eq(num).siblings().css("display", "none");
    $(".liu ul").eq(num).css("display", "block");
  }, 2000);
});

$(".qi li").on("mouseover", function () {
  // 1.当前的这个小li的宽度要变成224px 里面的小图片要淡出 大图片要淡入
  $(this)
    .stop()
    .animate({
      width: 693,
    })
    .find(".small")
    .stop()
    .fadeOut()
    .siblings(".big")
    .stop()
    .fadeIn(); // 2.其余的兄弟li要变成69 里面的小图片要淡入 大图片要淡出
  $(this)
    .siblings("li")
    .stop()
    .animate({
      width: 119,
    })
    .find(".small")
    .stop()
    .fadeIn()
    .siblings(".big")
    .stop()
    .fadeOut();
});

$(".san-hhh").click(function () {
  console.log(666)
  $(".hp").show();
});

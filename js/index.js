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
  var zhi = $(".liu ul").length;
  var num = 0;
  setInterval(function () {
    num++;
    if (num == zhi) {
      num = 0;
    }
    $(".liu ul").eq(num).siblings().css("display", "none");
    $(".liu ul").eq(num).css("display", "block");
  }, 5000);
});

//手风琴
$(".king li").on("mouseover", function () {
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
    .fadeIn();
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

//右边固定定位
$(".mli").click(function () {
  $(".gddw").hide();
});

//礼包的显示与隐藏
$(".san-hhh").click(function () {
  $(".hp").show();
  $(".hhoi").show();
});
$(".hp img").click(function () {
  $(".hp").hide();
  $(".hhoi").hide();
});

//视频的显示与隐藏
$(".san-ps").click(function () {
  $(".dasp").show();
  $(".ycdasp").show();
});
$(".ycdasp").click(function () {
  $(".dasp").hide();
  $(".ycdasp").hide();
});





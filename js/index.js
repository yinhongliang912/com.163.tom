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

// $(function () {
//   var zhi = $(".liu ul").length; 
//   var num = 0; 
//   setInterval(function () {
//     num++;
//     if (num == zhi) {
//       num = 0;
//     }
//     $(".liu ul").eq(num).siblings().css("display", "none");
//     $(".liu ul").eq(num).css("display", "block");
//   }, 5000);
// });

 


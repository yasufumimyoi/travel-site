"use  strict";

// ヘッダー　アコーディオン
$(function () {
  $(".menu__ttl").on("click", function () {
    $(this).next().slideToggle();
  });
});

// Homeスライダー
$(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    fade: true,
    speed: 2000,
    swipe: false,
    initialSlide: 0,
  });
});

// Tourスライダー
$(function () {
  $(".slider__tour").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    swipe: true,
    initialSlide: 0,
  });
});

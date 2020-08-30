$('.slick01').slick({
  // 矢印キーでスライドを切り替えるか [初期値:true]
  accessibility: true,
  // スライドの高さが違うときに自動調整するか [初期値:false]
  adaptiveHeight: false,
  // 自動再生するか [初期値:false]
  autoplay: true,
  // 自動再生で切り替えする時間(ミリ秒) [初期値:3000]
  autoplaySpeed: 2500,
  // 前次ボタンを表示するか [初期値:true]
  arrows: true,
  prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
  nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
  dots: true
  });
  
  
  $(".slick01").slick({
    dotsClass: 'slide-dots'
    
  });
  
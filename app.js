(function(global) {
  var brand = document.querySelector('.brand'),
      brand_text = document.querySelector('.brand + p'),
      demo_title = document.querySelector('.demo__title'),
      demo_list = document.querySelector('.demo__list'),
      copyright = document.querySelector('.copyright');
  TweenLite.from(brand, 1, {
  	opacity: 0,
  	y: -10
  });
  TweenLite.from(brand_text, 1, {
  	opacity: 0,
  	y: -10,
  	delay: .5
  });
  TweenLite.from(demo_title, 1, {
  	opacity: 0,
  	y: -10,
  	delay: 1
  });
  TweenLite.from(demo_list, 1, {
  	opacity: 0,
  	y: -10,
  	delay: 1
  });
  TweenLite.from(copyright, 1.5, {
  	opacity: 0,
  	delay: 1.4
  });
})(window);
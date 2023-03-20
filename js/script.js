let slides = $('.clients-wrapper img');
let i = 0;

setInterval(function() {
  slides.eq(i).fadeOut(500, function() {
    i++;
    if (i == slides.length) {
      i = 0;
    }
    slides.eq(i).fadeIn(500);
  });
}, 4000);

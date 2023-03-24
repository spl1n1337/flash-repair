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

$('.prevent').click(function (e) { 
  e.preventDefault();  
});

// let trigers = document.querySelectorAll('.base-triger');

// trigers.forEach(function(triger) {
//   triger.addEventListener('click', function(i) {
//     i.preventDefault();
//     this.querySelector(".base-triger-icon").classList.toggle('active-triger');
//     let list = this.nextElementSibling;
//     if(this.querySelector(".base-triger-icon").classList.contains('active-triger')) {
//       list.slideDown()
//       // this.nextElementSibling.style.height = 'auto';
//     }
    
//   });
// });

$(".base-triger").on("click", function(e) {
  e.preventDefault();
  $(this).find(".base-triger-icon").toggleClass("active-triger");
  if($(this).find(".base-triger-icon").hasClass("active-triger")) {
  $(this).next().slideDown(600);
  }else {
    $(this).next().slideUp(600);
  }
  });
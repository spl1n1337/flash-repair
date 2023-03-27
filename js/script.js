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


$(".base-triger").on("click", function(e) {
  e.preventDefault();
  $(this).find(".base-triger-icon").toggleClass("active-triger");
  if($(this).find(".base-triger-icon").hasClass("active-triger")) {
  $(this).next().slideDown(600);
  }else {
    $(this).next().slideUp(600);
  }
  });

  const form = document.querySelectorAll("form");
const thankyou = document.getElementById("thankyou");
const overlay1 = document.querySelector(".overlay1");

form.forEach(element => {
  element.addEventListener("submit", async (event) => {
    event.preventDefault();

    const phoneInput = element.querySelector("#number-1678823830535");
    const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;

    if (!phoneRegex.test(phoneInput.value)) {
      alert("Пожалуйста, введите корректный телефонный номер РФ");
      return;
    }

    try {
      const response = await fetch("mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(new FormData(form)).toString(),
      });

      const data = await response.json();
      if (data.status === "success") {
        thankyou.style.display = "block";
        overlay1.style.display = "block";

        setTimeout(() => {
          thankyou.style.display = "none";
          overlay1.style.display = "none";
          form.reset();
        }, 2000);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Ошибка при отправке формы");
    }
  });

});


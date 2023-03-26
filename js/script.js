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

  let form = document.querySelectorAll("form");
  let thankyou = document.getElementById("thankyou");
  let overlay1 = document.querySelector('.overlay1');
  
  // Обрабатываем отправку формы
  form.forEach(function(form) {
    form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Отправляем данные формы на сервер
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "mail.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        // Если ответ получен, обрабатываем его
        let response = JSON.parse(xhr.responseText);
        if (response.status === "success") {
          // Если отправка прошла успешно, показываем блок "thankyou"
          thankyou.style.display = "block";
          overlay1.style.display = "block";
          // Скрываем блок через 2 секунды
          setTimeout(function() {
            thankyou.style.display = "none";
            overlay1.style.display = "none";
            // Перенаправляем пользователя на страницу index.html
            window.location.href = "index.html";
          }, 2000);
        } else {
          // Если произошла ошибка при отправке, показываем сообщение с ошибкой
          alert(response.message);
        }
      }
    };
    xhr.send("name=" + encodeURIComponent(form.name.value) + "&phone=" + encodeURIComponent(form.phone.value));
    });
    });


let iframes = document.querySelectorAll('iframe');

function showIframes(items) {
  console.log('i start')
  items.forEach((i) => {
    i.style.display = 'block';
  });
  console.log('i\'ll show all')
}

window.addEventListener('DOMContentLoaded', ()=> {
  setTimeout(() => showIframes(iframes), 10000);
});

let images = document.querySelectorAll('img');

images.forEach((img) => {
  img.setAttribute('loading', 'lazy');
});


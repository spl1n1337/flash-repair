<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Получаем данные из формы
  $name = $_POST["text-1678823666851"];
  $phone = $_POST["number-1678823830535"];
  $address = $_POST["text-1678823840998"];
  $message = $_POST["textarea-1678823846303"];

  // Проверяем, что все поля заполнены
  if ($name == "" || $phone == "" || $address == "" || $message == "") {
    $response = array("status" => "error", "message" => "Пожалуйста, заполните все поля формы");
    echo json_encode($response);
    exit;
  }

  // Проверяем формат номера телефона
  $phoneRegex = "/^((\+7|7|8)+([0-9]){10})$/";
  if (!preg_match($phoneRegex, $phone)) {
    $response = array("status" => "error", "message" => "Пожалуйста, введите корректный телефонный номер РФ");
    echo json_encode($response);
    exit;
  }

  // Получаем url адрес хостинга и создаем переменную from со значением from@URL
  $from = "form@" . $_SERVER['HTTP_HOST'];

  // Формируем сообщение
  $message = "Имя: " . $name . "\n\n" . "Телефон: " . $phone . "\n\n" . "Адрес: " . $address . "\n\n" . "Сообщение: " . $message;

  // Отправляем сообщение на указанный email-адрес
  $to = "panov1337.lp@gmail.com";

  // Присваиваем значение заголовку письма
  $subject = "Запрос на вызов курьера";

  // Помещаем в заголовок переменную from@URL
  $headers = "From: $from";

  if (mail($to, $subject, $message, $headers)) {
    // Если сообщение отправлено успешно, возвращаем успешный статус
    $response = array("status" => "success");
    echo json_encode($response);
  } else {
    // Если произошла ошибка при отправке сообщения, возвращаем сообщение об ошибке
    $response = array("status" => "error", "message" => "Ошибка при отправке сообщения");
    echo json_encode($response);
  }
}

"use strict";
// Напиши скрипт имитирующий авторизацию пользователя.
// Есть массив паролей зарегистрированных пользователей passwords.
// При посещении страницы, необходимо попросить пользователя ввести свой пароль,
// после чего проверить содержит ли массив passwords пароль введенный пользователем.
// Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attemptsLeft.
// 🔔 Используй цикл while или do...while
// Если был введен пароль который есть в массиве passwords,
// вывести alert с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
// Если был введен не существующий пароль, отнять от лимита попыток единицу,
// вывести alert с текстом 'Неверный пароль, у вас осталось n попыток', где n это оставшееся количество попыток.
// Если закончились попытки, вывести alert с текстом 'У вас закончились попытки, аккаунт заблокирован!'
// Продолжать запрашивать пароль до тех пор, пока пользователь не введет существующий пароль,
// не кончатся попытки или пока пользователь не нажмет Cancel в prompt.
'use strics';

var passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
var attemptsLeft = 3;
var userLog;

while (attemptsLeft) {
  userLog = prompt('Введите пароль для авторизации');

  if (userLog === null) {
    alert('Авторизация отклонена');
    break;
  }

  if (passwords.includes(userLog)) {
    alert('Добро пожаловать!');
    break;
  }

  attemptsLeft -= 1;
  alert("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C, \u0443 \u0432\u0430\u0441 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ".concat(attemptsLeft, " \u043F\u043E\u043F\u044B\u0442\u043E\u043A"));

  if (!attemptsLeft) {
    alert('Аккаунт заблокирован, закончились попытки!');
    break;
  }
}
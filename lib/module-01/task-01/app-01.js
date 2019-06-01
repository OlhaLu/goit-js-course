// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:
// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который не совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Доступ запрещен, неверный пароль!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Добро пожаловать!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let message;
'use strict';

var ADMIN_PASSWORD = 'm4ng0h4ckz';
var CANCEL_MESSAGE = 'Отменено пользователем!';
var CORECT_PASSWORD_MESSAGE = 'Добро пожаловать!';
var WRONG_PASSWORD_MESSAGE = 'Доступ запрещен, неверный пароль!';
var message = prompt('Please enter your password');

if (message === null) {
  alert(CANCEL_MESSAGE);
} else if (message !== ADMIN_PASSWORD) {
  alert(WRONG_PASSWORD_MESSAGE);
} else {
  alert(CORECT_PASSWORD_MESSAGE);
}
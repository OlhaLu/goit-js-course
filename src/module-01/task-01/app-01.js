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

const ADMIN_PASSWORD = 'm4ng0h4ckz';
const CANCEL_MESSAGE = 'Отменено пользователем!';
const CORECT_PASSWORD_MESSAGE = 'Добро пожаловать!';
const WRONG_PASSWORD_MESSAGE = 'Доступ запрещен, неверный пароль!';

let message = prompt('Please enter your password');

if (message === null) {
  alert(CANCEL_MESSAGE);
} else if (message !== ADMIN_PASSWORD) {
  alert(WRONG_PASSWORD_MESSAGE);
} else {
  alert(CORECT_PASSWORD_MESSAGE);
}

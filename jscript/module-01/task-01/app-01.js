// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который не совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Доступ запрещен, неверный пароль!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Добро пожаловать!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let message;

'use strict'

const ADMIN_PASSWORD = 'm4ng0h4ckz'
const inform_cancel = 'Отменено пользователем!'
const inform_right = 'Добро пожаловать!'
const wrong_password = 'Доступ запрещен, неверный пароль!'

let message = prompt('Please enter your password')

if (message === null) {
  alert(inform_cancel)
} else if (message !== ADMIN_PASSWORD) {
  alert(wrong_password)
} else {
  alert(inform_right)
}

console.log(message)

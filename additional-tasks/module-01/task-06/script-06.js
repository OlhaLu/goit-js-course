/*
  Напиши скрипт который:

  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/

let userAnswer = prompt('Введите произвольное целое число');

// let number = '5';
// let doubleNumer = '5.6';
// console.log(Number.isInteger(number));
// console.log(Number.isInteger(doubleNumer));

Number(userAnswer) % 1 === 0;

if (userAnswer === null) {
  console.log('Ну и ладно, пока!');
} else if (Number.isInteger(Number(userAnswer))) {
  console.log('Спасибо!');
} else {
  console.log('Необходимо было ввести целое число!');
}

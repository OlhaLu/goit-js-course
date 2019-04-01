/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

'use strics';

// В переменной message хранится произвольная строка
const message = 'Proin sociis natoque et magnis parturient montes mus';
let price = 0;
const wordsPrice = 10;

// Разбить строку в массив, разделитель - пробел, и записать в переменную words
let words = message.split(' ');
console.log(words);

// Выведи в консоли длину массива words
console.log(`Длинна массива ${words.length}`); // 8

// Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// for (i = 0; i < ; i += 1) {
// }
for (let i = 0; i < words.length; i += 1) {
  price += wordsPrice;
}

console.log(`Стоимость гравировки ${price}`); // 80

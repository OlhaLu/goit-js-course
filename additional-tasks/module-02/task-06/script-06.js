/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

'use strics';

const message = "May the force be with you";
let words = message.split(' ');
let longestWord = words[0];
let checkinWord;

for (let i = 1; i < words.length; i +=1) {
  checkinWord = words[i];
  
if (checkinWord.length > longestWord.length)
longestWord = checkinWord;
}

console.log(longestWord); // 'force'
/* 
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное

  PS: попробуй использовать тернарный оператор
*/

let value = Number.parseInt(Math.random() * 100);

let evenNumber = 'even';
let oddNumber = 'odd';

let type = value%2 === 0 ? evenNumber : oddNumber;

console.log(`${value} is ${type}`);

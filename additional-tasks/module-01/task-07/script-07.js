/* 
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное

  PS: попробуй использовать тернарный оператор
*/

const value = Number.parseInt(Math.random() * 100);

console.log(`${value} is ${type}`);

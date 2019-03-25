/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

  Сравни эти значения и по результатам выведи:

    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"

  Проверь работоспособность кода с разными значениями переменной ordered.
*/

const TOTAL = 100;
const ORDERED = 50;

let lessGoodsMessage = 'На складе недостаточно товаров!';
let allGoodsMessage = 'Вы забираете весь товар cо склада!';
let boughtGoodsMessage = 'Заказ оформлен, с вами свяжется менеджер';

if (ORDERED > TOTAL) {
  alert(lessGoodsMessage);
} else if (ORDERED === TOTAL) {
  alert(allGoodsMessage);
} else {
  alert(boughtGoodsMessage);
}

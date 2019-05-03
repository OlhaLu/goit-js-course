'use strics';

/*
  Напиши функцию getTotal(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  Используй метод reduce.
*/

const getTotal = (products, order) => {
  const product = Object.values(products).reduce(
    (prod, value) => prod + value,
    0,
  );
  const product2 = Object.values(order).reduce(
    (prod, value) => prod + value,
    0,
  );

  return product + product2;
};

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40,
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1,
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 2,
  apples: 1,
};

const orderC = {
  bread: 2,
  cheese: 2,
};

// Вызовы функции для проверки
console.log(getTotal(products, orderA)); // 122
console.log(getTotal(products, orderB)); // 121
console.log(getTotal(products, orderC)); // 119

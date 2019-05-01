/*
 * Добавь классу Car свойство цены автомобиля, назови его сам.
 * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
 */
'use strict';

class Car {
  constructor({ maxSpeed, price }) {
    this._maxSpeed = maxSpeed;
    this._price = price;
  }
  set value(cost) {
    this._price = cost;
  }

  get value() {
    return this._price;
  }
}

const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000

const car2 = new Car({ maxSpeed: 100, price: 5000 });
console.log(car2.value); // 200

car2.value = 8000;
console.log(car2.value);

/*
 * Напиши класс Car с указанными свойствами и методами
 */
'use strict';

class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    /*
      Добавь свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        - maxSpeed - для хранения максимальной скорости 
        - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
        - distance - содержит общий киллометраж, изначально с 0
    */

    this.turnOn = function() {
      if (!this.running) {
        this.running = true;
        console.log('Удачного пути');
      } else {
        console.log('Ваш автомобиль уже заведен, трогай))');
      }
      // Добавь код для того чтобы завести автомобиль
      // Просто записывает в свойство running значание true
    };

    this.turnOff = function() {
      if (this.running) {
        this.running = false;
        console.log('Авто заглушен');
      } else {
        console.log(
          'Ваш автомобиль и так заглушен, нету смысла это делать еще раз',
        );
      }
      // Добавь код для того чтобы заглушить автомобиль
      // Просто записывает в свойство running значание false
    };

    this.accelerate = function(spd) {
      if (spd <= maxSpeed && this.running) {
        this.speed = spd;
      } else if (maxSpeed < spd) {
        console.log('Сорри, но ваша скорость привышает возможности автомобиля');
      } else if (!this.running) {
        console.log('Заведите автомобиль!');
      }
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed
    };

    this.decelerate = function(spd) {
      if (spd > 0 && spd <= maxSpeed && this.running) {
        this.speed = spd;
        console.log(`Ваша скорость изменилась к ${this.speed}`);
      } else if (spd < 0) {
        console.log('Движение с минусовой скоростью НЕ возможно');
      } else if (!this.running) {
        console.log('Заведите свой автомобиль!');
      }
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed и не меньше нуля
    };

    this.drive = function(hours) {
      if (this.running) {
        this.distance = hours * this.speed;
        console.log(`Пробег Вашего авто ${this.distance}`);
      }
      // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
      // но только в том случае если машина заведена!
    };
  }
}

const car = new Car({ maxSpeed: 100 });
console.log('Созданный автомобиль', car);

car.turnOn();
console.log(car);

car.turnOn();
console.log(car);

car.turnOff();
console.log(car);

car.turnOff();
console.log(car);

car.turnOn();

car.accelerate(80);
console.log(car);

car.decelerate(60);
console.log(car);

car.decelerate(-60);
console.log(car);

car.drive(8);
console.log(car);

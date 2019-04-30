/*
 * Добавь к классу Car из предыдущего задания статический
 * метод getSpecs, который принимает объект-машину как параметр
 * и выводит в консоль значения полей maxSpeed, speed, running и distance.
 */
'use strict';

class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;

    this.turnOn = function() {
      if (!this.running) {
        this.running = true;
        // Добавь код для того чтобы завести автомобиль
        // Просто записывает в свойство running значание true
      }
    };

    this.turnOff = function() {
      if (this.running) {
        this.running = false;
        // Добавь код для того чтобы заглушить автомобиль
        // Просто записывает в свойство running значание false
      }
    };

    this.accelerate = function(spd) {
      if (spd <= maxSpeed) {
        this.speed = spd;
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed
      }
    };

    this.decelerate = function(spd) {
      if (spd > 0 && spd <= maxSpeed) {
        this.speed = spd;
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed и не меньше нуля
      }
    };

    this.drive = function(hours) {
      if (this.running) {
        this.distance = hours * this.speed;
      }
      // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
      // но только в том случае если машина заведена!
    };
  }

  static getSpecs() {
    console.log(car);
  }
}

const car = new Car({ maxSpeed: 100 });

car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

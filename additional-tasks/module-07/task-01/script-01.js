'use strics';

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan принимает два параметра - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
const findGreaterThan = (num, arr) => {
  return arr.filter(x => x > num);
};

console.log(findGreaterThan(2, [1, 2, 3, 4, 5])); // [3, 4, 5,]
console.log(findGreaterThan(3, [1, 2, 3, 4, 5])); // [4, 5,]
console.log(findGreaterThan(1, [1, 2, 3, 4, 5])); // [2, 3, 4, 5,]

/* 
  Функция multiplyBy принимает два параметра - число и массив. 
  Возвращает массив все значения которого умножены на число.
*/
const multiplyBy = (num, arr) => {
  return arr.map(x => x * num);
};

console.log(multiplyBy(2, [1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log(multiplyBy(3, [1, 2, 3, 4, 5])); // [3, 6, 9, 12, 15]
console.log(multiplyBy(4, [1, 2, 3, 4, 5])); // [4, 8, 12, 16, 20]

/*
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/
function summAllNumbers(...args) {
const summ = args.reduce((acc, value) => acc + value, 0);
return summ;
};

function getSums([...args]){
const total = [];
  args.reduce(function(acc, value) {
    total.push(acc);
    return acc + value;
  });
  return total;
};

alert(getSums([1,2,3,4,5])); // результат: 1,3,6,10

console.log(summAllNumbers(1, 2, 3)); // 6
console.log(summAllNumbers(1, 2, 3, 4)); // 10
console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15

/* 
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/
const findEvery = (num, [...arr]) => {
return arr.every(x => x >= num);
}

console.log(findEvery(5, [5, 6, 7, 8, 9])); // true
console.log(findEvery(6, [5, 6, 7, 8, 9])); // false
console.log(findEvery(4, [5, 6, 7, 8, 9])); // true

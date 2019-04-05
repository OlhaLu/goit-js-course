/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
'use strics';

function findLargestNumber(numbers) {
  let maxNumber = numbers[0];

  for (const number of numbers) {
    if (number > maxNumber) maxNumber = number;
  }
  return maxNumber;
}

// Вызовы функции для проверки
console.log(findLargestNumber([1, 2, 3])); // 3

console.log(findLargestNumber([27, 12, 18, 5])); // 27

console.log(findLargestNumber([31, 128, 14, 74])); // 128

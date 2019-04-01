/*
* Есть массив имен пользователей
* Используя методы массива, последовательно выполнить указанные операции
*/

'use strics';

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить первый элемент массива
console.log(users.shift());
console.log(users); 
// ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
console.log(users.pop());
console.log(users); 
// ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
console.log(users.unshift("Lux"));
console.log(users); 
// ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users.push("Jay","Kiwi"));
console.log(users); 
//  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = "Ajax";
users.splice(2, 1);
console.log(users); 
//  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
const userToInsertBefore = "Jay";
users.splice(2, 0, "Kong");
console.log(users); 
//  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/
'use strict';

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};

let maxTasks = 0;
let employeeName = '';
for (const task in tasksCompleted) {
if (maxTasks < tasksCompleted[task]){
  maxTasks = tasksCompleted[task];
  employeeName = task;
}
}

console.log(`Name: ${employeeName}`);
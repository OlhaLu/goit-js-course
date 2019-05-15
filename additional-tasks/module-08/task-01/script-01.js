'use strics';
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

const category = document.querySelectorAll('.categories > li');

for (let elem = 0; elem < category.length; elem += 1) {
let name = category[elem].firstChild.data;

const countElem = category[elem].getElementsByTagName('li').length;
console.log(`Категория: ${name}Количество вложенных li: ${countElem}`);
}


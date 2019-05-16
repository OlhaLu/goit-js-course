'use strics';

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const listItemMenu = document.querySelector('.list');

for (let i = 0; i < elements.length; i += 1) {
const itemList = document.createElement('li');
itemList.innerHTML = elements[i];

listItemMenu.appendChild(itemList);
};

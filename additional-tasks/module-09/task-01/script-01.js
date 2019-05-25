'use strics';
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const buttonClick = document.querySelector('.button');
let countClk = 0;
buttonClick.addEventListener('click', () => {
buttonClick.textContent = countClk++ + 1;
});


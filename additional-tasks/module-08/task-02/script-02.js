'use strics';

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

document.querySelector('.list > li:first-child').style.color = '#ff0400';
document.querySelector('.list > li:last-child').style.color = '#3201b7';
'use strics';

/*      
  Напиши функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays больше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const setGuestState = (guests, period) =>
  guests.map(guest => {
    guest.inactiveDays > period
      ? (guest.isActive = false)
      : (guest.isActive = true);

    return guest;
  });

const guests = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true },
];

const guests2 = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true },
];

const guests3 = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true },
];

// Вызовы функции для проверки
console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

console.log(setGuestState(guests2, 20)); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

console.log(setGuestState(guests3, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

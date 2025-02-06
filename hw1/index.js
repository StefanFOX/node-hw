//- Филтрирање на дадена низа по даден параметар
//- Сортирање на дадена низа по даден параметар
//- Сумирање на параметри од дадена низа
//- Пронаоѓање на член од дадена низа

const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

// filter
const filter = numbers.filter((num) => num > 4);
console.log(filter);

// sort
const sort = numbers.sort((a, b) => b - a);
console.log(sort);
// reduce
const reduce = numbers.reduce((acc, curr) => (acc += curr), 0);
console.log( reduce);

// find
const find = numbers.find((num) => num > 4);
console.log(find);
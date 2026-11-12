//Q1
const numbers = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

const result = sum(...numbers);
console.log(result);

const { title, author, characters, publication } = book;
const { year, publisher } = publication;
console.log(title);
console.log(author);
console.log(characters);
console.log(year);
console.log(publisher);

//Q2
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = { ...obj1 };
console.log(obj3);
console.log(obj4);

//Q3
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
const obj4 = { ...obj1 };
console.log(obj3);
console.log(obj4);

const { numbers1: array1, numbers2: array2 } = data;
const array3 = [...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(array3);
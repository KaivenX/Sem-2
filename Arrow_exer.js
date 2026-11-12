//Q1 
const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map((num) => num ** 2)
console.log(squaredNumbers)


//Q2
const numbers = [1, 2, 3, 4, 5]
const list2 = list.filter((num) =>num > 2)
console.log(list2)


//Q3
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => console.log(num))


//Q4
const numbers = [1, 2, 3, 4, 5, 6]
const firstDivisibleByThree = numbers.find((num) =>num % 3 === 0)
console.log(firstDivisibleByThree)


//Q5
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter((num) =>num > 2).map((num) =>num * num);
console.log(result);


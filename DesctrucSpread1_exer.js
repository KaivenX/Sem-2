//Q1
const student = {
    id: '101',
    name: 'John Doe',
    courses: ['Math', 'English', 'Science'],
    parents: {
        father: 'Mr. Doe',
        mother: 'Mrs. Doe'
    }
};

const { id, name, courses, parents } = student;
const { father, mother } = parents;
console.log(id);
console.log(name);
console.log(father);


//Q2
const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
const arr4 = [...arr1];
console.log(arr3);
console.log(arr4);

//Q3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [num1, num2, num3, num4, num5, ...secondHalf] = numbers;
const firstHalf = [num1, num2, num3, num4, num5];
console.log(firstHalf);
console.log(secondHalf)

//Q4
const numbers = [ 1, 2, 3 ];
function sum(a, b, c) {
    return a + b + c;
}

const result = sum(...numbers);
console.log(result);
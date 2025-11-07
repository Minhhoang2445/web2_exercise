// bai 1
export function productionInfo(name, price) {
    return `Sản phẩm: ${name}, Giá: ${price.toLocaleString()} VNĐ`;
}

// bai 2
export function greet(userName) {
    return `Xin chào, ${userName}`;
}
// bai 3
export function sumUpTo(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// bai 4
export const square = (x) => x * x;
//bai 5
export const isEven = (num) => num % 2 === 0;
//bai 6 
export const firstElement = (arr) => arr.length > 0 ? arr[0] : undefined;
// bai 7
export const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
// bai 8
export const divideObject = (user) => {
    let age = user.age;
    let name = user.name;
    return `Name: ${name}, Age: ${age}`;
}
//bai 9
export function listPeopleFromObject(peopleObj) {
    let listName = peopleObj.people.map(person => person.name);
    return listName;
}
//bai 10
export const stringLength = (str) => str.length;
//bai 11
export const toUpperCase = (str) => str.toUpperCase();
//bai 12
export const formatCurrency = (amount) => {
    return `${amount.toLocaleString()} VNĐ`;
};
//bai 13
export const largestNumber = (arr) => {
    return Math.max(...arr);
}
//bai 14
export const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
//bai 15
export const repeatString = (str, times) => {
    return str.repeat(times);
}
//bai 16
export const sumOddNumbers = (arr) => {
    return arr.filter(num => num % 2 !== 0).reduce((acc, val) => acc + val, 0);
}
//bai 17
export const sumGreaterThan = (arr, min) => {
    return arr.filter(num => num > min).reduce((acc, val) => acc + val, 0);
}
//bai 18
export const formatDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${day}/${month}/${year}`;
};
// bai 19
export const firstThreeElements = (arr) => arr.slice(0, 3);
// bai 20
export const containsCharacter = (str, char) => str.includes(char);
// bai 21
export const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
//bai 22
export const countOccurrences = (arr, val) => {
    return arr.filter(item => item === val).length;
}
// bai23
export const filterOddNumbers = (arr) => {
    return arr.filter(num => num % 2 !== 0);
}
//bai 24
export const greaterThan = (arr, threshold) => {
    return arr.filter(num => num > threshold);
}
//bai 25
export const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
//bai 26
export const separateEvenOdd = (arr) => {
    let even = arr.filter(num => num % 2 === 0);
    let odd = arr.filter(num => num % 2 !== 0);
    return { "even": even, "odd": odd };
}
//bai 27
export const sortArrayAsc = (arr) => {
    return arr.slice().sort((a, b) => a - b);
}
//bai 28
export const sumEvenIndex = (arr) => {
    return arr.filter((_, index) => index % 2 === 0).reduce((acc, val) => acc + val, 0);
}
//bai 29
export const multiplyByTwo = (arr) => {
    return arr.map(num => num * 2);
}
//bai 30
export const arrayToString = (arr) => {
    let a = '';
    for(let i = 0; i < arr.length; i++) {
        a += arr[i];
    }
    return a;
};
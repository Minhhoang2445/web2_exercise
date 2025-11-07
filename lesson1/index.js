import { productionInfo } from './utils.js';
console.log(productionInfo('Sach', 20000 ));
//bai 2
import { greet } from './utils.js';
console.log(greet('Hoang'));
//bai 3
import { sumUpTo } from './utils.js';
console.log(sumUpTo(5));
//bai 4
import { square } from './utils.js';
console.log(square(4));
//bai 5
import { isEven } from './utils.js';
if (isEven(4)) {
    console.log('So chan');
} else {
    console.log('So le');
}
//bai 6
import * as utils from './utils.js';
console.log(utils.firstElement([1, 2, 3, 4]));

// bai7 
console.log(utils.sum(1, 2, 3, 4, 5));

//bai 8
console.log(utils.divideObject({ name: 'Hoang', age: 20 }));
//bai 9
let people = [{ name: 'Hoang' }, { name: 'An' }, { name: 'Binh' }];
let listPeople = utils.listPeopleFromObject({ people: people });
for (let i = 0; i < listPeople.length; i++) {
    console.log(`Tên: ${listPeople.join(', ')}`);
}
//bai 10
console.log(utils.stringLength('Hello World'));

//bai 11
console.log(utils.toUpperCase('Hello World'));
//bai 12
console.log(utils.formatCurrency(1000000));
//bai 13
console.log(utils.largestNumber([1, 5, 3, 9, 2]));
//bai 14
console.log(utils.isPrime(7));
//bai 15
console.log(utils.repeatString('Hi! ', 3));

//bai 16
console.log(utils.sumOddNumbers([1, 2, 3, 4, 5]));
// bai 17
console.log(utils.sumGreaterThan([1, 10, 20, 30, 40, 50], 25));
//bai 18
console.log(utils.formatDate("2024-11-28"));
//bai 19
console.log(utils.firstThreeElements([10, 20, 30, 40, 50]));
// bai 20
console.log(utils.containsCharacter('Hello World', 'k'));
//bai 21
console.log(utils.mergeArrays([1, 2, 3], [4, 5, 6]));
//bai 22
console.log(utils.countOccurrences([1, 2, 3, 1, 2, 1], 1));
//bai 23
console.log(utils.filterOddNumbers([1, 2, 3, 4, 5]));
//bai 24
console.log(utils.greaterThan([1, 2, 3, 4, 5], 3));
//bai 25
console.log(utils.factorial(5));
//bai 26
console.log(utils.separateEvenOdd([1, 2, 3, 4, 5]));
//bai 27
console.log(utils.sortArrayAsc([5, 3, 8, 1, 2]));
//bai 28
console.log(utils.sumEvenIndex([1, 2, 3, 4, 5]));
//bai 29
console.log(utils.multiplyByTwo([1, 2, 3, 4, 5]));
//bai 30
console.log(utils.arrayToString(['h', 'o', 'a', 'n', 'g']));


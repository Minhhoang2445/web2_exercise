import * as utils from './utils.js';
//bai 1
console.log("Bai 1:", utils.sumArray([1, 2, 3, 4, 5]));
//bai 2
console.log("Bai 2:", utils.countOccurrences([1, 2, 3, 2, 4, 2], 2));
//bai 3
console.log("Bai 3:", utils.removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
//bai 4
console.log("Bai 4:", utils.flattenArray([1, [2, 3], [4, 5]]));
//bai 5
console.log("Bai 5:", utils.isSymmetric([1, 2, 3, 5, 1]));
//bai 6
console.log("Bai 6:", utils.findSecondLargest([5, 3, 9, 1, 7, 9]));
//bai 7
console.log("Bai 7:", utils.sortProductsByPrice([
    { name: "Product A", price: 30 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 50 }
]));
//bai 8
console.log("Bai 8:", utils.findMostExpensiveProduct([
    { name: "Product A", price: 30 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 50 }
]));
//bai 9
console.log("Bai 9:", utils.groupByType([
    { name: "Item 1", type: "A" },
    { name: "Item 2", type: "B" },
    { name: "Item 3", type: "A" },
    { name: "Item 4", type: "C" }
]));
//bai 10
console.log("Bai 10:", utils.isSubset([1, 2, 2, 3], [1, 2, 3, 4, 5]));
//bai 11
console.log("Bai 11:", utils.findMaxKeys({
    a: 10,
    b: 20,
    c: 20,
    d: 30
}));
//bai 12
console.log("Bai 12:", utils.mergeObjectsSumValues(
    { a: 1, b: 2, c: 3 },
    { b: 3, c: 4 }
));
//bai 13
console.log("Bai 13:", utils.countElements([1, 2, 2, 3, 4, 4, 5]));
//bai 14
console.log("Bai 14:", utils.cleanObject({
    a: 1, b: null, c: undefined, d: 4, e: ''
}));
//bai 15
console.log("Bai 15:", utils.hasDuplicate([1, 2, 3, 4, 5, 3]));
//bai 16 
console.log("Bai 16:", utils.sumByGroup([
    { group: "A", value: 10 },
    { group: "B", value: 20 },
    { group: "A", value: 30 },
    { group: "B", value: 40 }
]));
//bai 17
console.log("Bai 17:", utils.uniqueValues([1, 2, 3], [3, 4, 5, 6, 1]));
//bai 18
console.log("Bai 18:", utils.isPermutation([1, 2, 3], [3, 2, 1]));
//bai 19
console.log("Bai 19:", utils.findLongestString(["apple", "a", "cherry", "date"]));
//bai 20
console.log("Bai 20:", utils.intersection([1, 2, 3], [2, 3, 4, 5]));
//bai 21
console.log("Bai 21:", utils.filterByMinValue([1, 2, 3, 4, 5, 6], 4));
//bai 22
console.log("Bai 22:", utils.findLongestValues({
    a: "apple",
    b: "banana",
    c: "cherry",
    d: "date"
}));
//bai 23
console.log("Bai 23:", utils.groupByFirstLetter(["apple", "banana", "apricot", "cherry", "blueberry"]));
//bai24
console.log("Bai 24:", utils.getAdults([
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Bob", age: 30 }
]));
// bai25
console.log("Bai 25:", utils.convertToArray({
    a: "apple",
    b: "banana",
    c: "cherry"
}));
//bai 26
console.log("Bai 26:", utils.sortStringsByLength(["apple", "banana", "cherry", "date"]));
//bai 27
const key1 = prompt ("Nhap key can tim trong bai 27:");
console.log("Bai 27:", utils.sumByKey([
    { key: "fruit", value: 10 },
    { key: "vegetable", value: 20 },
    { key: "fruit", value: 30 }
], key1));
//bai 28
console.log("Bai 28:", utils.countWords("Hello world! Hello everyone."));
//bai 29
console.log("Bai 29:", utils.findMinKeys({
    a: 10,
    b: 20,
    c: 100,
    d: 30
}));
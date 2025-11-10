// bai1
export function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
// bai2
export function countOccurrences(arr, val) {
    return arr.filter(item => item === val).length;
}
// bai 3
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}
//bai 4
export function flattenArray(arr) {
    return arr.flat();
}
//bai 5
export function isSymmetric(arr)   {
    const len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
//bai 6
export function findSecondLargest(arr) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
}
//bai 7
export function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}
//bai 8
export function findMostExpensiveProduct(products) {
    return products.reduce((max, product) => product.price > max.price ? product : max, products[0]);
} 
//bai 9
export function groupByType(items) {
    return items.reduce((grouped, item) => {
        if (!grouped[item.type]) {
            grouped[item.type] = [];
        }
        grouped[item.type].push(item);
        return grouped;
    }, {});
}
//bai10
export function isSubset(arr1, arr2) {
    return arr1.every(item => arr2.includes(item));
}
//bai 11
export function findMaxKeys(obj) {
    const maxKeys = [];
    let maxValue = -Infinity;
    for (const key in obj) {
        if (obj[key] > maxValue) {
            maxKeys.length = 0;
            maxKeys.push(key);
            maxValue = obj[key];
        } else if (obj[key] === maxValue) {
            maxKeys.push(key);
        }
    }
    return maxKeys;
}
//bai 12
export function mergeObjectsSumValues(obj1, obj2) {
    const merged = { ...obj1 };
    for (const key in obj2) {
        if (merged[key]) {
            merged[key] += obj2[key];
        } else {
            merged[key] = obj2[key];
        }
    }
    return merged;
}
//bai13
export function countElements(arr) {
    return arr.reduce((countMap, item) => {
        countMap[item] = (countMap[item] || 0) + 1;
        return countMap;
    }, {});
}
//bai 14
export function cleanObject(obj) {
    const cleaned = {};
    for (const key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
            cleaned[key] = obj[key];
        }
    }
    return cleaned;
}
//bai 15
export function hasDuplicate(arr) {
    const map = new Map();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (const [key, value] of map) {
        if (value > 1) {
            return true;
        }
    }
    return false;
}
// bai 16
export function sumByGroup(items) {
    return items.reduce((groupSums, item) => {
        if (!groupSums[item.group]) {
            groupSums[item.group] = 0;
        }
        groupSums[item.group] += item.value;
        return groupSums;
    }, {});
}
//bai 17
export function uniqueValues(arr1, arr2) {
    const arrTemp = [...arr1, ...arr2];
    return [...new Set(arrTemp)];
}
//bai 18
export function isPermutation(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[arr2.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
//bai19
export function findLongestString(arr) {
    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
//bai20
export function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
//bai 21
export function filterByMinValue(arr, min) {
    return arr.filter(num => num >= min);
}
//bai 22
export function findLongestValues(obj) {
    let longestKeys = [];
    let maxLength = 0;
    for (const key in obj) {
        const valueLength = obj[key].length;
        if (valueLength > maxLength) { 
            longestKeys = [key];
            maxLength = valueLength;
        } else if (valueLength === maxLength) {
            longestKeys.push(key);
        }
    }
    const result = {};
    longestKeys.forEach(key => {
        result[key] = obj[key];
    });
    return result;

}
//bai 23
export function groupByFirstLetter(arr) {
    return arr.reduce((grouped, item) => {
        const firstLetter = item.charAt(0).toUpperCase();
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(item);
        return grouped;
    }, {});
}
//bai 24
export function getAdults(people) {
    return people.filter(person => person.age >= 18);
}
//bai 25
export function convertToArray(obj) {
    const arr = [];
    for (const key in obj) {
        arr.push({ key, value: obj[key] });
    }
    return arr;
}
// bai26
export function sortStringsByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
// bai27
export function sumByKey(arr, key1) {
    let sum = 0;
    for (const obj of arr) {
        if (obj.key === key1 && typeof obj.value === 'number') {
            sum += obj.value;
        }
    }
    const result = {key1, sum};
    return result;
}
// bai 28
export function countWords(str) {
    const wordArr = str.split(" ");
    return wordArr.length;
}
// bai 29
export function findMinKeys(obj) {
    const minKeys = [];
    let minValue = Infinity;
    for (const key in obj) {
        if (obj[key] < minValue) {
            minKeys.length = 0;
            minKeys.push(key);
            minValue = obj[key];
        } else if (obj[key] === minValue) {
            minKeys.push(key);
        }
    }
    return minKeys;
}

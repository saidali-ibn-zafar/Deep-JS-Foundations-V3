// const get_missing_letters = (str) => {
//   const alphabet = "abcdefghijklmnopqrstuvwxvz";
//   str = str.toLowerCase().split("");
//   const userString = new Map();

//   for (let i = 0; i < str.length; i++) {
//     const character = str[i];
//     userString.set(character, character);
//   }

//   const missing_letters = Array.from(alphabet).filter(
//     (letter) => !userString.has(letter)
//   );

//   return missing_letters;
// };

// const result = get_missing_letters("Saidali");

// console.log(`Missing letters : ${result}`);

// function getMissingLetters(str) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     const strSet = new Set(str);
//     let missingLetters = "";

//     for (let letter of alphabet) {
//       if (!strSet.has(letter)) {
//         missingLetters += letter;
//       }
//     }

//     return missingLetters;
//   }

// Sum of Missing Numbers
// Create a function that returns the sum of missing numbers
// from the given list.

// Examples
// sum_missing_numbers([4, 3, 8, 1, 2]) ➞ 18
// # 5 + 6 + 7 = 18

// sum_missing_numbers([17, 16, 15, 10, 11, 12]) ➞ 27
// # 13 + 14 = 27

// sum_missing_numbers([1, 2, 3, 4, 5]) ➞ 0
// # No Missing Numbers (i.e. all numbers in [1, 5] are
// present in the list)
// Notes
// The numerical range to consider when searching for the missing
// numbers in the list is the sequence of consecutive numbers between
//  the minimum and maximum of the numbers (inclusive).

// const sum_missing_numbers = (arr) => {
// var minNum = Math.min(arr);
// var maxNum = Math.max(arr);
// var numbersRange = [];

//   for (let i = minNum; i <= maxNum; i++) {
//     numbersRange.push(i);
//   }

//   const numsSet = new Set(numbersRange);
//   let sum_of_missing_numbers = [];

//   for (let num of arr) {
//     if (!numsSet.has(num)) {
//       sum_of_missing_numbers.push(num);
//     }
//   }

//   return sum_of_missing_numbers.reduce((acc, num) => acc + num, 0);
// };

// console.log(sum_missing_numbers([2,4,5]));

// const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);

// const sum_of_missing_numbers = (arr) => {
//   var minNum = Math.min(...arr);
//   var maxNum = Math.max(...arr);
//   var nums_range = [];

//   for (let i = minNum; i <= maxNum; i++) {
//     nums_range.push(i);
//   }
//   return sum(nums_range) - sum(arr);
// };

// console.log(`Sum of missing nums: ${sum_of_missing_numbers([3, 6])}`);

// const sum_of_list_elements = (arr) => {
//   var result_arr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const sum_except_lst_el = arr
//       .slice(0, i)
//       .concat(arr.slice(i + 1))
//       .reduce((a, b) => a + b, 0);

//     result_arr.push(sum_except_lst_el);
//   }

//   return result_arr;
// };

// console.log(`Sum of L.E.E Itself :
// [${sum_of_list_elements([1, 2, 3])}].`);

// const sum_of_list_elements = (arr) => {
//   var result_arr = [];
//   var total_sum = arr.reduce((acc, num) => acc + num, 0);

//   for (let i = 0; i < arr.length; i++) {
//     result_arr.push(total_sum - arr[i]);
//   }

//   return result_arr;
// };

// console.log(`Sum of L.E.E Itself :
// [${sum_of_list_elements([1, 2, 3])}].`);


//  = = = = = = = = = = = = = = = = = = = = = = =

const sum_of_nums = (arr, num = 2) => {
  if (arr.length < num) {
    return "There should be at least two elements in the array!";
  }
  var min = 0;

  for (let i = 0; i < num; i++) {
    const filtered_arr = arr.filter((el) => el > min);
    min += Math.min(...filtered_arr);
  }

  return min;
};
console.log(sum_of_nums([19, 5, 42, 2, 77])); // 7 
console.log(sum_of_nums([4])); // 
console.log(sum_of_nums([10, 343445353, 3453445, 3453545353453])); // 3453455
console.log(sum_of_nums([2, 9, 6])); // 8
console.log(sum_of_nums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); 563
console.log(sum_of_nums([3683, 2902, 3951, -475, 1617, -2385])); // 4519

//  = = = = = = = = = = = = = = = = = = = = = = =


// const filteredArr = arr.filter((el) => el > 0);
// var smallest = Math.min(...filteredArr);

// var smallest2 = filteredArr.find((el) => el > smallest);

// arr.forEach((element) => {
//   if (element < smallest2 && element !== smallest) {
//     smallest2 = element;
//   }
// });

// return `${smallest} + ${smallest2} = ${smallest + smallest2}`;

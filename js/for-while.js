// // let i = 0;

// // while (i < 10) {
// //   console.log(i);
// //   i++;
// // }

// // while (i++ < 10) {
// //   console.log(i);
// // }

// // do {
// //   console.log('action');
// // } while (i > 0);

// // for (let i = 0; i < 10; i++) {
// //   console.log(i);
// // }

// // let str = 'Hello';
// // let res = '';

// // for (let i = 0; i < str.length; i++) {
// //   res = res+ str[i] + '*';
// // }

// // console.log(res);

// // let colors = ['black', 'yellow' , 'white', 'orange']

// // for(let i = 0; i < colors.length; i++) {
// //     console.log(colors[i])
// //     colors[i] = colors[i].toLocaleUpperCase()
// // }

// // console.log(colors)

// // for (let i = 0; i < 10; i++) {
// //   if (i === 5) {
// //     continue;
// //   }
// //   console.log(i);
// // }

// // for (let i = 0; i < 10; i++) {
// //   if (i === 5) {
// //     break;
// //   }
// //   console.log(i);
// // }

// // const users = [
// //   {
// //     name: 'Igor',
// //     age: 31,
// //   },
// //   {
// //     name: 'Denis',
// //     age: 35,
// //   },
// //   {
// //     name: 'Vlad',
// //     age: 25,
// //   },
// //   {
// //     name: 'Valera',
// //     age: 12,
// //   },
// // ];

// // const userObj = {};

// // for (let i = 0; i < users.length; i++) {
// //   // console.log(users[i].name)
// //   userObj[users[i].name] = users[i];
// // }

// // console.log(userObj.Denis);

// // const users = [
// //   {
// //     name: 'Igor',
// //     age: 31,
// //   },
// //   {
// //     name: 'Denis',
// //     age: 35,
// //   },
// // ];

// // // for(let dey in users) {
// // //   console.log(dey)
// // //   console.log(users[dey]);
// // // }

// // for (let value of users) {
// //   console.log(value);
// // }

// // let str = 'i am in the easycode';
// // let res = '';

// // for (let i = 0; i < str.length; i++) {
// //   if (i === 0 || str[i - 1] === ' ') {
// //     res = res + str[i].toUpperCase();
// //   } else {
// //     res = res + str[i];
// //   }
// // }

// // console.log(res);

// // let strBefore = 'tseb eht ma i';
// // let strAfter = '';

// // for (let i = strBefore.length; i--; ) {
// //   strAfter = strAfter + strBefore[i];
// // }

// // console.log(strAfter);

// // let result = 1;

// // for (let i = 1; i <= 10; i++) {
// //   result = result * i; // Умножаем результат на i на каждом шаге
// // }

// // console.log(result); //

// // let str = 'i am in the easycode';
// // let res = '';

// // for(let i = 0 ; i < str.length; i++ ) {
// //   if(i === 0 || str[i-1] === ' ') {
// //     res = res + str[i].toUpperCase()
// //   } else {
// //     res = res + str[i]
// //   }
// // }

// // console.log(res)

// let str = 'tseb eht ma i';
// let res = ''

// for(let i = str.length -1; i >= 0; i--) {
//   res = res + str[i]
// }

// console.log(res)

// let num = 1

// for(let i = 1; i <= 10; i++) {
//   num = num * i
// }

// console.log(num)

// let strBefore = 'JavaScript is a pretty good language';
// let strAfter = ''

// for(let i = 0; i < strBefore.length; i++) {
//   if (i === 0  || strBefore[i - 1] === ' ') {
//     strAfter = strAfter + strBefore[i];
//   } else if (strBefore[i] !== ' ') {
//     strAfter = strAfter + strBefore[i]
//   }
// }

// console.log(strAfter)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// // let newArray =[]

// // for (let i = 0; i < array.length; i++) {
// //   if (i % 2 === 0) {
// //     newArray.push(array[i]);
// //   }
// // }

// // console.log(newArray);

// for (let num of array) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }
// }

// let list = {
//   name: 'denis',
//   work: 'easycode',
//   age: 29,
// };

// for (let key in list) {
//   if (typeof list[key] === 'string') {
//     list[key] = list[key].toUpperCase();
//   }
// }

// console.log(list);

// //1. Сумма всех чисел в массиве

// // const numbers = [10, 20, 30, 40];
// // let sumNumbers = 0

// // for(let i of numbers) {
// //   sumNumbers = sumNumbers + i
// // }

// // console.log(sumNumbers)

// //2. Удвоить каждый элемент массива

// // Используй for...of

// const arr = [1, 2, 3, 4];
// let resArr = []

// for(let value of arr) {
//   resArr.push(value * 2)
// }

// console.log(resArr)

// //3. Вывести только гласные буквы из строки

// // Используй for...of
// const strJs = "JavaScript";
// let resStrJs = ''

// for (let value of strJs) {
//   if (value === 'a' ||value === 'i' ) {
//     resStrJs = resStrJs + value
//   }
// }

// console.log(resStrJs)

// //  Подсчитать количество чётных чисел в массиве
// const numbers = [1, 2, 3, 4, 5, 6];
// let numberCount = []

// for(let value of numbers) {
//   if(value%2 === 0) {
//     numberCount.push(value)
//   }
// }

// console.log(numberCount)

// // 5. Соединить все строки в одну

// // Используй for...of
// const words = ["Hello", " ", "world", "!"];
// let wordsRes = ''

// for(let value of words) {
//   wordsRes = wordsRes + value
// }

// console.log(wordsRes)

// //Вывести числа от 1 до 10

// for(let i =1; i <= 10; i++) {
//     console.log(i)
// }

// //2. Вывести только чётные числа от 1 до 20

// for(let i = 1; i <= 20; i++) {
//     if(i%2 === 0) {
//         console.log(i)
//     }
// }

// // 3. Найти сумму чисел от 1 до 100

// let sum = 0

// for(let i = 1; i <= 100; i++) {
//     sum = sum + i
// }

// console.log(sum)

// //Посчитать факториал числа 7

// let factorial

// for(let i = 1; i <= 7; i++) {
//     factorial = factorial * i
// }

// console.log(factorial)

// //5. Преобразовать строку: вставить * после каждой буквы

// let str = 'JavaScript';
// let res = ''

// for(let i = 0; i <= str.length - 1; i++) {
//     res = res + str[i] + '*'
// }

// console.log(res)

// //6. Посчитать, сколько раз символ a встречается в строке

// let text = 'banana apple avocado mango'
// let count = ''

// for(let i = 0; i <= text.length; i++) {
//     if(text[i] === 'a') {
//         count = count + text[i]
//     }
// }

// console.log(count.length)

// //7. Перевести первую букву каждого слова в строке в верхний регистр (без split)

// const sentence = "learn javascript fast";

// let result= ''

// for(let i = 0; i <= sentence.length -1; i++) {
//     if(i === 0 || sentence[i-1] === ' ') {
//         result = result + sentence[i].toUpperCase()
//     } else {
//         result = result + sentence[i]
//     }
// }

// console.log(result)

// //8. Пройти по массиву и найти сумму только положительных чисел

// const numbers = [10, -5, 0, 22, -1, 5];

// let summa = 0

// for(let i = 0; i < numbers.length; i++) {
//     if( numbers[i] > 0) {
//         summa = summa + numbers[i]
//     }
// }

// console.log(summa)

// // 9. Из массива строк создать одну строку через тире

// const words = ['JS', 'is', 'awesome']; // "JS-is-awesome"

// let wordsResult = ''

// for(let i = 0; i < words.length; i++){
//     wordsResult = wordsResult + words[i] + '-'
// }

// console.log(wordsResult)

// // 10. Пройти по массиву объектов и вывести всех, у кого возраст > 18

// const users = [
//   { name: 'Igor', age: 17 },
//   { name: 'Denis', age: 25 },
//   { name: 'Olga', age: 19 },
// ];

// let usersRerult = [];

// for (let i = 0; i < users.length; i++) {
//   if (users[i].age > 18) {
//     usersRerult.push(users[i]);
//   }
// }

// console.log(usersRerult);

// //  Сумма всех чисел в массиве

// // Используй for...of
// const numbersArr = [10, 20, 30, 40];

// let numbersArrRes = 0

// for(let value of numbersArr) {
//     numbersArrRes = numbersArrRes + value
// }

// console.log(numbersArrRes)

// // Удвоить каждый элемент массива

// // Используй for...of
// const arr = [1, 2, 3, 4];
// let arrRes = []

// for(let value of arr) {
//     arrRes.push(value*2)
// }

// console.log(arrRes)

// // Вывести только гласные буквы из строки

// // Используй for...of
// const strJS = "JavaScript";

// let strJSRes = ''

// for(let value of strJS) {
//     if(value === 'a' || value === 'i') {
//         strJSRes = strJSRes + value
//     }
// }

// console.log(strJSRes)

// // Посчтитать колличество четных чисел в масиве

// // Используй for...of
// const numberss = [1, 2, 3, 4, 5, 6];

// let numberssRes = []

// for(let value of numberss) {
//     if(value%2 === 0) {
//         numberssRes.push(value)
//     }
// }

// console.log(numberssRes.length)

// // Соеденить все строки в одну

// // Используй for...of
// const wordsStr = ["Hello", " ", "world", "!"];

// let wordsStrRes = ''

// for(let value of wordsStr) {
//     wordsStrRes = wordsStrRes  + value
// }

// console.log(wordsStrRes)

// // Вывести все кличи обьекта

// // Используй for...in
// const user = {
//   name: "Alice",
//   age: 25,
//   country: "Ukraine"
// };

// for(let key in user) {
//     console.log(key)
// }

// // Вывести все значения обьекта

// // Используй for...in
// const userObj = {
//   name: "Bob",
//   age: 30,
//   isAdmin: true
// };

// for(let key in userObj) {
//     console.log(userObj[key])
// }

// //8. Подсчитать количество свойств в объекте

// // Используй for...in
// const product = {
//   title: "Phone",
//   price: 1000,
//   currency: "USD"
// };

// let productCount = []

// for(let key in product) {
//     productCount.push(key)
// }

// console.log(productCount.length)

// // Проверить есть ли пустые строки

// // Используй for...in
// const formData = {
//   name: "Ivan",
//   email: "",
//   phone: ""
// };

// for (let key in formData) {
//   if (formData[key] === '') {
//     console.log(`${key} = пустая строка`);
//   }
// }

// // Создать массив из всех ключей и значений

// // Используй for...in
// const settings = {
//   theme: 'dark',
//   language: 'en',
//   fontSize: 'medium',
// };

// let settingsArr = [];

// for (let key in settings) {
//   settingsArr.push(key);
//   settingsArr.push(settings[key]);
// }

// console.log(settingsArr);

//Найти первый отрицательный элемент и вывести все положительные до него

const nums = [5, 10, 0, 8, -3, 7, 9];

for (let value of nums) {
  if (value > 0) {
    console.log(value);
  } else if (value === 0) {
    continue;
  } else if (value < 0) {
    break;
  }
}

// Найти первую строку с буквой "a" и пропускать пустые строки

const words = ['', 'cat', 'dog', 'bird', 'ant'];

for (let value of words) {
  if (value === '') {
    continue;
  } else if (value.includes('a')) {
    console.log(value);
    break;
  }
}

const number = 105826;


for (let value of number) {
  if (value === 0) {
    continue;
  } else if (value % 2 === 0) {
    console.log(`Первое чётное число это ${value}`);
    break;
  }
}

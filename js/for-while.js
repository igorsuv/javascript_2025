// // // let i = 0;

// // // while (i < 10) {
// // //   console.log(i);
// // //   i++;
// // // }

// // // while (i++ < 10) {
// // //   console.log(i);
// // // }

// // // do {
// // //   console.log('action');
// // // } while (i > 0);

// // // for (let i = 0; i < 10; i++) {
// // //   console.log(i);
// // // }

// // // let str = 'Hello';
// // // let res = '';

// // // for (let i = 0; i < str.length; i++) {
// // //   res = res+ str[i] + '*';
// // // }

// // // console.log(res);

// // // let colors = ['black', 'yellow' , 'white', 'orange']

// // // for(let i = 0; i < colors.length; i++) {
// // //     console.log(colors[i])
// // //     colors[i] = colors[i].toLocaleUpperCase()
// // // }

// // // console.log(colors)

// // // for (let i = 0; i < 10; i++) {
// // //   if (i === 5) {
// // //     continue;
// // //   }
// // //   console.log(i);
// // // }

// // // for (let i = 0; i < 10; i++) {
// // //   if (i === 5) {
// // //     break;
// // //   }
// // //   console.log(i);
// // // }

// // // const users = [
// // //   {
// // //     name: 'Igor',
// // //     age: 31,
// // //   },
// // //   {
// // //     name: 'Denis',
// // //     age: 35,
// // //   },
// // //   {
// // //     name: 'Vlad',
// // //     age: 25,
// // //   },
// // //   {
// // //     name: 'Valera',
// // //     age: 12,
// // //   },
// // // ];

// // // const userObj = {};

// // // for (let i = 0; i < users.length; i++) {
// // //   // console.log(users[i].name)
// // //   userObj[users[i].name] = users[i];
// // // }

// // // console.log(userObj.Denis);

// // // const users = [
// // //   {
// // //     name: 'Igor',
// // //     age: 31,
// // //   },
// // //   {
// // //     name: 'Denis',
// // //     age: 35,
// // //   },
// // // ];

// // // // for(let dey in users) {
// // // //   console.log(dey)
// // // //   console.log(users[dey]);
// // // // }

// // // for (let value of users) {
// // //   console.log(value);
// // // }

// // // let str = 'i am in the easycode';
// // // let res = '';

// // // for (let i = 0; i < str.length; i++) {
// // //   if (i === 0 || str[i - 1] === ' ') {
// // //     res = res + str[i].toUpperCase();
// // //   } else {
// // //     res = res + str[i];
// // //   }
// // // }

// // // console.log(res);

// // // let strBefore = 'tseb eht ma i';
// // // let strAfter = '';

// // // for (let i = strBefore.length; i--; ) {
// // //   strAfter = strAfter + strBefore[i];
// // // }

// // // console.log(strAfter);

// // // let result = 1;

// // // for (let i = 1; i <= 10; i++) {
// // //   result = result * i; // Умножаем результат на i на каждом шаге
// // // }

// // // console.log(result); //

// // // let str = 'i am in the easycode';
// // // let res = '';

// // // for(let i = 0 ; i < str.length; i++ ) {
// // //   if(i === 0 || str[i-1] === ' ') {
// // //     res = res + str[i].toUpperCase()
// // //   } else {
// // //     res = res + str[i]
// // //   }
// // // }

// // // console.log(res)

// // let str = 'tseb eht ma i';
// // let res = ''

// // for(let i = str.length -1; i >= 0; i--) {
// //   res = res + str[i]
// // }

// // console.log(res)

// // let num = 1

// // for(let i = 1; i <= 10; i++) {
// //   num = num * i
// // }

// // console.log(num)

// // let strBefore = 'JavaScript is a pretty good language';
// // let strAfter = ''

// // for(let i = 0; i < strBefore.length; i++) {
// //   if (i === 0  || strBefore[i - 1] === ' ') {
// //     strAfter = strAfter + strBefore[i];
// //   } else if (strBefore[i] !== ' ') {
// //     strAfter = strAfter + strBefore[i]
// //   }
// // }

// // console.log(strAfter)

// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// // // let newArray =[]

// // // for (let i = 0; i < array.length; i++) {
// // //   if (i % 2 === 0) {
// // //     newArray.push(array[i]);
// // //   }
// // // }

// // // console.log(newArray);

// // for (let num of array) {
// //   if (num % 2 !== 0) {
// //     console.log(num);
// //   }
// // }

// // let list = {
// //   name: 'denis',
// //   work: 'easycode',
// //   age: 29,
// // };

// // for (let key in list) {
// //   if (typeof list[key] === 'string') {
// //     list[key] = list[key].toUpperCase();
// //   }
// // }

// // console.log(list);

// // //1. Сумма всех чисел в массиве

// // // const numbers = [10, 20, 30, 40];
// // // let sumNumbers = 0

// // // for(let i of numbers) {
// // //   sumNumbers = sumNumbers + i
// // // }

// // // console.log(sumNumbers)

// // //2. Удвоить каждый элемент массива

// // // Используй for...of

// // const arr = [1, 2, 3, 4];
// // let resArr = []

// // for(let value of arr) {
// //   resArr.push(value * 2)
// // }

// // console.log(resArr)

// // //3. Вывести только гласные буквы из строки

// // // Используй for...of
// // const strJs = "JavaScript";
// // let resStrJs = ''

// // for (let value of strJs) {
// //   if (value === 'a' ||value === 'i' ) {
// //     resStrJs = resStrJs + value
// //   }
// // }

// // console.log(resStrJs)

// // //  Подсчитать количество чётных чисел в массиве
// // const numbers = [1, 2, 3, 4, 5, 6];
// // let numberCount = []

// // for(let value of numbers) {
// //   if(value%2 === 0) {
// //     numberCount.push(value)
// //   }
// // }

// // console.log(numberCount)

// // // 5. Соединить все строки в одну

// // // Используй for...of
// // const words = ["Hello", " ", "world", "!"];
// // let wordsRes = ''

// // for(let value of words) {
// //   wordsRes = wordsRes + value
// // }

// // console.log(wordsRes)

// // //Вывести числа от 1 до 10

// // for(let i =1; i <= 10; i++) {
// //     console.log(i)
// // }

// // //2. Вывести только чётные числа от 1 до 20

// // for(let i = 1; i <= 20; i++) {
// //     if(i%2 === 0) {
// //         console.log(i)
// //     }
// // }

// // // 3. Найти сумму чисел от 1 до 100

// // let sum = 0

// // for(let i = 1; i <= 100; i++) {
// //     sum = sum + i
// // }

// // console.log(sum)

// // //Посчитать факториал числа 7

// // let factorial

// // for(let i = 1; i <= 7; i++) {
// //     factorial = factorial * i
// // }

// // console.log(factorial)

// // //5. Преобразовать строку: вставить * после каждой буквы

// // let str = 'JavaScript';
// // let res = ''

// // for(let i = 0; i <= str.length - 1; i++) {
// //     res = res + str[i] + '*'
// // }

// // console.log(res)

// // //6. Посчитать, сколько раз символ a встречается в строке

// // let text = 'banana apple avocado mango'
// // let count = ''

// // for(let i = 0; i <= text.length; i++) {
// //     if(text[i] === 'a') {
// //         count = count + text[i]
// //     }
// // }

// // console.log(count.length)

// // //7. Перевести первую букву каждого слова в строке в верхний регистр (без split)

// // const sentence = "learn javascript fast";

// // let result= ''

// // for(let i = 0; i <= sentence.length -1; i++) {
// //     if(i === 0 || sentence[i-1] === ' ') {
// //         result = result + sentence[i].toUpperCase()
// //     } else {
// //         result = result + sentence[i]
// //     }
// // }

// // console.log(result)

// // //8. Пройти по массиву и найти сумму только положительных чисел

// // const numbers = [10, -5, 0, 22, -1, 5];

// // let summa = 0

// // for(let i = 0; i < numbers.length; i++) {
// //     if( numbers[i] > 0) {
// //         summa = summa + numbers[i]
// //     }
// // }

// // console.log(summa)

// // // 9. Из массива строк создать одну строку через тире

// // const words = ['JS', 'is', 'awesome']; // "JS-is-awesome"

// // let wordsResult = ''

// // for(let i = 0; i < words.length; i++){
// //     wordsResult = wordsResult + words[i] + '-'
// // }

// // console.log(wordsResult)

// // // 10. Пройти по массиву объектов и вывести всех, у кого возраст > 18

// // const users = [
// //   { name: 'Igor', age: 17 },
// //   { name: 'Denis', age: 25 },
// //   { name: 'Olga', age: 19 },
// // ];

// // let usersRerult = [];

// // for (let i = 0; i < users.length; i++) {
// //   if (users[i].age > 18) {
// //     usersRerult.push(users[i]);
// //   }
// // }

// // console.log(usersRerult);

// // //  Сумма всех чисел в массиве

// // // Используй for...of
// // const numbersArr = [10, 20, 30, 40];

// // let numbersArrRes = 0

// // for(let value of numbersArr) {
// //     numbersArrRes = numbersArrRes + value
// // }

// // console.log(numbersArrRes)

// // // Удвоить каждый элемент массива

// // // Используй for...of
// // const arr = [1, 2, 3, 4];
// // let arrRes = []

// // for(let value of arr) {
// //     arrRes.push(value*2)
// // }

// // console.log(arrRes)

// // // Вывести только гласные буквы из строки

// // // Используй for...of
// // const strJS = "JavaScript";

// // let strJSRes = ''

// // for(let value of strJS) {
// //     if(value === 'a' || value === 'i') {
// //         strJSRes = strJSRes + value
// //     }
// // }

// // console.log(strJSRes)

// // // Посчтитать колличество четных чисел в масиве

// // // Используй for...of
// // const numberss = [1, 2, 3, 4, 5, 6];

// // let numberssRes = []

// // for(let value of numberss) {
// //     if(value%2 === 0) {
// //         numberssRes.push(value)
// //     }
// // }

// // console.log(numberssRes.length)

// // // Соеденить все строки в одну

// // // Используй for...of
// // const wordsStr = ["Hello", " ", "world", "!"];

// // let wordsStrRes = ''

// // for(let value of wordsStr) {
// //     wordsStrRes = wordsStrRes  + value
// // }

// // console.log(wordsStrRes)

// // // Вывести все кличи обьекта

// // // Используй for...in
// // const user = {
// //   name: "Alice",
// //   age: 25,
// //   country: "Ukraine"
// // };

// // for(let key in user) {
// //     console.log(key)
// // }

// // // Вывести все значения обьекта

// // // Используй for...in
// // const userObj = {
// //   name: "Bob",
// //   age: 30,
// //   isAdmin: true
// // };

// // for(let key in userObj) {
// //     console.log(userObj[key])
// // }

// // //8. Подсчитать количество свойств в объекте

// // // Используй for...in
// // const product = {
// //   title: "Phone",
// //   price: 1000,
// //   currency: "USD"
// // };

// // let productCount = []

// // for(let key in product) {
// //     productCount.push(key)
// // }

// // console.log(productCount.length)

// // // Проверить есть ли пустые строки

// // // Используй for...in
// // const formData = {
// //   name: "Ivan",
// //   email: "",
// //   phone: ""
// // };

// // for (let key in formData) {
// //   if (formData[key] === '') {
// //     console.log(`${key} = пустая строка`);
// //   }
// // }

// // // Создать массив из всех ключей и значений

// // // Используй for...in
// // const settings = {
// //   theme: 'dark',
// //   language: 'en',
// //   fontSize: 'medium',
// // };

// // let settingsArr = [];

// // for (let key in settings) {
// //   settingsArr.push(key);
// //   settingsArr.push(settings[key]);
// // }

// // console.log(settingsArr);

// //Найти первый отрицательный элемент и вывести все положительные до него

// const nums = [5, 10, 0, 8, -3, 7, 9];

// for (let value of nums) {
//   if (value > 0) {
//     console.log(value);
//   } else if (value === 0) {
//     continue;
//   } else if (value < 0) {
//     break;
//   }
// }

// // Найти первую строку с буквой "a" и пропускать пустые строки

// const words = ['', 'cat', 'dog', 'bird', 'ant'];

// for (let value of words) {
//   if (value === '') {
//     continue;
//   } else if (value.includes('a')) {
//     console.log(value);
//     break;
//   }
// }

// const number = 105826;

// for (let value of number) {
//   if (value === 0) {
//     continue;
//   } else if (value % 2 === 0) {
//     console.log(`Первое чётное число это ${value}`);
//     break;
//   }
// }

// //  Сумма длины слов (for...of, .length)

// const words = ["QA", "automation", "JS", "tests"];
// // Посчитай суммарную длину всех слов.

// wordsRes = 0

// for(let value of words) {
//   wordsRes = wordsRes + value.length
// }

// console.log(wordsRes)

// Найти слово с буквой 'a' (for...of, .includes)

// const words = ["cat", "dog", "bird", "ant"];
// // Выведи первое слово, содержащее 'a', и останови цикл.

// for(let value of words) {
//   if(value.includes('a')) {
//     console.log(value)
//     break;
// //   }
// // }

// //3) Индекс первого вхождения 42 (for, .length)

// const arr = [10, 15, 42, 42, 7];
// // Найди индекс первого 42 с помощью for. Если нет — выведи -1.

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 42) {
//     console.log(i);
//     break;
//   } else if (i === arr.length - 1) {
//     console.log(-1);
//   }
// }

// // Собрать только числа (for...of, typeof, .push)

// const mixed = [1, '2', true, 3, 'hello', 4, null];
// const onlyNums = [];
// // Добавь в onlyNums только элементы типа number.

// for (let value of mixed) {
//   if (typeof value === 'number') {
//     onlyNums.push(value);
//   }
// }

// console.log(onlyNums);

// // Разбор чисел из строк (for...of, parseInt, Number('23'), .push)

// const raw = ['15px', '23', '007', 'abc', '42.9'];
// const parsed = [];
// // Для каждого элемента: попытайся получить целое через parseInt или Number, если это корректно, добавь в parsed.

// for (let value of raw) {
//   if (parseInt(value) || Number(value) === 'number') {
//     parsed.push(parseInt(value) || Number(value));
//   }
// }

// console.log(parsed);

// const nums = [];
// // Заполни массив 5 случайными целыми от 0 до 9.

// for (let i = 0; i < 5; i++) {
//   nums.push(Math.floor(Math.random() * 10));
// }

// console.log(nums);

// const prices = [10.126, 3.5, 7.999];
// const rounded = [];
// // Заполни rounded числами, округлёнными до 2 знаков (в число, не строку).

// for (let value of prices) {
//   rounded.push(Number(value.toFixed(2)));
// }

// console.log(rounded);

// // // **A. Простые**
// // 1. Преобразуй `"007"` в число и выведи результат.
// // 2. Достань целую часть из строки `"54.99"`.
// // 3. Преобразуй `"  -100kg"` в число.
// // 4. Что вернёт `parseInt("abc123")`? Проверь.
// // 5. Сравни `parseInt("10")` и `parseInt("10", 2)`.

// let num = '007';

// let resNum = parseInt(num);
// console.log(resNum);

// let value = parseInt('54.99');
// value = parseInt(' -100kg');
// value = parseInt('sas123');
// value = parseInt('10') === parseInt('10', 2);

// console.log(value);

// // **B. В массиве**
// 6. Дан `["10px","20px","30px"]` → получи `[10,20,30]` с помощью цикла `for` и `push`.

// 8. Дан `["08","09","10"]` → преобразуй в числа и выведи тип каждого элемента.

// let arr2 = ['10px', '20px', '30px'];
// let arrResult = [];

// for (let value of arr2) {
//   arrResult.push(parseInt(value));
// }

// console.log(arrResult);

// // 7. Дан `[" 5 "," -3 "," 12.7 "]` → сделай массив целых чисел.

// let arr3 = [' 5 ', ' -3 ', ' 12.7 '];
// let arr3Result = [];

// for (let value of arr3) {
//   arr3Result.push(parseInt(value));
// }

// console.log(arr3Result);

// // 8. Дан `["08","09","10"]` → преобразуй в числа и выведи тип каждого элемента.

// let arr4 = ['08', '09', '10'];
// let arr4Result = [];

// for (let value of arr4) {
//   arr4Result.push(typeof parseInt(value));
// }

// console.log(arr4Result);

// // . Дан `{a:"15px", b:" -4px", c:"0"}` → перезапиши значения как целые числа.

// let obj = {
//   a: '15px',
//   b: ' -4px',
//   c: '0',
// };

// let objRes = {};

// // Перезаписываем значения объекта obj как целые числа
// for (let key in obj) {
//   objRes[key] = parseInt(obj[key]);
// }

// console.log(objRes);

// //Дан `{left:"120", top:"35", right:"-10"}` → преврати все строки в числа и посчитай сумму.

// let obj2 = {
//   left: '120',
//   top: '35',
//   right: '-10',
// };

// let obj2Res = {};

// for(let key in obj2) {
//   obj2Res[key] = parseInt(obj2[key])
// }

// console.log(obj2Res);

// let res = 0

// for(let key in obj2Res) {
//   res = res + obj2Res[key]
// }

// console.log(res);

// //Дан `["12,34","56.78"]`: для каждого заменяй запятую на точку и парси `parseFloat`.

// let arr = ['12,34', '56.78'];
// let arrRes = [];

// for (let value of arr) {
//   arrRes.push(value.replace(',', '.'));
// }

// console.log(arrRes);

// //Дан `{rate:"12.5%", coef:"0.8", bonus:"  5.00 "}` → преврати в числа и посчитай `rate*coef + bonus`.

// let obj = {
//   rate: '12.5%',
//   coef: '0.8',
//   bonus: '  5.00 ',
// };

// for (let key in obj) {
//   obj[key] = parseFloat(obj[key]);
// }

// console.log(obj);

// let objRes = obj.rate * obj.coef + obj.bonus;
// console.log(objRes);

// //  Дан `{x:"-3.4px", y:"2.1px"}` → убери `"px"`, получи числа, посчитай длину от (0,0): `Math.sqrt(x*x+y*y)`.

// let obj2 = {
//   x: '-3.4px',
//   y: '2.1px',
// };

// for (let key in obj2) {
//   obj2[key] = parseFloat(obj2[key]);
// }

// console.log(obj2);

// let obj2Res = Math.sqrt(obj2.x * obj2.x + obj2.y * obj2.y);

// console.log(obj2Res);

// // **B. В массиве**
// // 6. Дан `["1.1","2.2","3.3"]` → получи числа и сумму.
// // 7. Дан `[" 0.5 "," -1.25 "," 10 "]` → получи массив чисел, выведи минимальное.
// // 8. Дан `["12,34","56.78"]`: для каждого заменяй запятую на точку и парси `parseFloat`.

// let arr3 = ['1.1', '2.2', '3.3'];
// let arr3Res = [];

// for (let value of arr3) {
//   arr3Res.push(parseFloat(value));
// }

// console.log(arr3Res);

// let arr3Sum = 0;
// for (let value of arr3Res) {
//   arr3Sum = arr3Sum + value;
// }

// console.log(arr3Sum);

// let arr4 = [' 0.5 ', ' -1.25 ', ' 10 '];

// let arr4Res = [];

// for (let value of arr4) {
//   arr4Res.push(parseFloat(value));
// }

// let arr4Min = Math.min(...arr4Res);

// console.log(arr4Min);

// **Задачи**
// **A. Простые**
// 1. Выведи тип для: `42`, `"42"`, `NaN`, `Infinity`.
// 2. Выведи тип для: `[]`, `{}`, `null`, `undefined`.
// 3. Проверь тип у `parseInt("10")` и у `"10"`.
// 4. Проверь тип `Number("  ")`.
// 5. Проверь тип у `value[2]`, если `value="Igor"`.

// let num1 = 42;
// num1 = '42';
// num1 = NaN;
// num1 = Infinity;
// num1 = [];
// num1 = {};
// num1 = null;
// num1 = undefined;
// num1 = parseInt('10');
// num1 = '10';
// num1 = Number(' ');
// value = 'Igor';

// console.log(typeof value[2]);

// let array1 = ['10', 10, true, null, {}];

// for (let value of array1) {
//   console.log(typeof value);
// }

// let array2 = `["1", "2", "3"]`;

// for (let value of array2) {
//   console.log(typeof Number(value));
// }

// let arr = [parseFloat('2.2'), '2.2', 'abc'];

// for (let value of arr) {
//   console.log(typeof value);
// }

// let obj = {
//   id: '5',
//   active: true,
//   meta: null,
// };

// obj.count = '10';

// for (let key in obj) {
//   if (key === 'count') {
//     obj[key] = Number(obj[key]);
//   }
//   console.log(typeof obj[key]);
// }

// let x = 'Igor';
// let y = 31;

// if (typeof x === 'string') {
//   console.log('STR');
// } else {
//   console.log('NOT STR');
// }

// if (typeof y === 'number' && !isNaN(y)) {
//   console.log('NUM');
// }

//Пройдись по `["7", 7, false, ""]` и посчитай, сколько строк и сколько чисел.

// let arrMixed = ['7', 7, false, ''];
// let arrStr = 0;
// let arrNum = 0;

// for (let i = 0; i < arrMixed.length; i++) {
//   if (typeof arrMixed[i] === 'string') {
//     arrStr++;
//   } else if (typeof arrMixed[i] === 'number') {
//     arrNum++;
//   }
// }

// console.log(arrStr);
// console.log(arrNum);

// let arr = [{ a: 1 }, {}, [], null];

// for (let i = 0; i < arr.length; i++) {
//   console.log(typeof arr[i]);
// }

//  **A. Простые**
// 1. Выведи `12.5` с двумя знаками.
// 2. Выведи `13` с тремя знаками.
// 3. Сравни тип `toFixed`-результата и числа.
// 4. Выведи `2.345` с двумя знаками, затем преобразуй обратно в число через `Number`.
// 5. Выведи `0.1 + 0.2` с двумя знаками.

let num = 0.1 + 0.2;


let numFix = num.toFixed(2);

console.log(num);
console.log(typeof num);
console.log(numFix);
console.log(typeof numFix); 

 

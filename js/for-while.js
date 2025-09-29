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
// // 4. Выведи `2.345` с двумя знаками, затем преобразуй обратно в число через `Number`.
// // 5. Выведи `0.1 + 0.2` с двумя знаками.

// let num = 0.1 + 0.2;

// let numFix = num.toFixed(2);

// console.log(num);
// console.log(typeof num);
// console.log(numFix);
// console.log(typeof numFix);

// //Дан `[1.234, 2.5, 3]` → выведи каждый с 2 знаками как строки.

// let arr = [1.234, 2.5, 3];

// for (let value of arr) {
//   console.log(value.toFixed(2));
// }

// let arr2 = [1.234, 2.5, 3];
// let sumarr2 = 0;

// for (let value of arr2) {
//   sumarr2 = sumarr2 + value;
// }

// console.log(sumarr2.toFixed(3));

// let arr3 = [-1.005, 1.005];

// for (let value of arr3) {
// }

// //  Дан `{price:12.5, tax:0.2}` → посчитай `price * (1+tax)` и выведи с 2 знаками.

// let obj = {
//   price: 12.5,
//   tax: 0.2,
// };

// let objRes = obj.price * (1 + obj.tax);

// console.log(objRes.toFixed(2));

// // Дан `{a:2.345, b:4}` → выведи `a` с 3 знаками, `b` с 1.

// let obj2 = {
//   a: 2.345,
//   b: 4,
// };

// let obj2Res1 = obj2.a.toFixed(3);
// let obj2Res2 = obj2.b.toFixed(3);

// console.log(obj2Res1);
// console.log(obj2Res2);

// // Число `x=1.499`: если `x.toFixed(0) === "1"` → `"LOW"`, иначе `"HIGH"`.

// let x = 1.499;

// if (x.toFixed(0) === '1') {
//   console.log('LOW');
// } else {
//   console.log('HIGH');
// }

// //если `Number(y.toFixed(2)) === 0`, выведи `"ZERO"`.

// let y = 0;

// if (Number(y.toFixed(2) === 0)) {
//   console.log('ZERO');
// } else {
//   console.log(typeof y);
// }

// for (i = 1; i <= 5; i++) {
//   let res = i / 3;
//   console.log(res.toFixed(2));
// }

// //Пройдись по `[1.234,2.345,3.456]`, выведи каждое с 1 знаком и одновременно суммируй исходные числа.

// let arr4 = [1.234, 2.345, 3.456];
// let arr4Res = 0

// for(let value of arr4){
//     console.log(value.toFixed(1))
//     arr4Res +=value
// }

// console.log(arr4Res)

// `Math.random`
// 1. Выведи случайное число 0..1 и его `toFixed(3)`.
// 2. Выведи случайное целое 1..10.
// 3. Выведи случайное целое 0..5.
// 4. Выведи случайное число 5..10 (с дробью).
// 5. Выведи случайное целое -3..3.

// let num = Math.random().toFixed(3);
// num = (Math.random() * 10).toFixed(0);
// num = ((Math.random() * 10) / 2).toFixed(0);
// num = Math.random() * 10;
// if (num < 5) {
//   num = num + 5;
// } else {
//   num = num;
// }

// num = Math.random();

// // if (num % 2 === 0) {
// //   num = (num * 3).toFixed(0);
// // } else {
// //   num = (num * -3).toFixed(0);
// // }

// console.log(num);

// `Math.round`

// **A. Простые**
// 1. Округли `2.49`, `2.5`, `2.51`.
// 2. Сравни `Math.round(2.5)` и `Math.round(-2.5)`.
// 3. Округли `0.499` и `0.5`.
// 4. Округли `99.9` и `100.1`.
// 5. Округли `-1.1`, `-1.5`, `-1.9`.

// let num = Math.round(2.49);

// num = Math.round(3.5);
// num = Math.round(2.51);

// let arr = [1.2, 1.5, 1.8];
// let arrRes = []

// for(let value of arr) {
//   arrRes.push(Math.round(value))
// }

// let arr = [-2.2,-2.5,-2.8];

// let arrRes = []

// for(let value of arr) {
//   arrRes.push(Math.round(value))
// }

// let arr = [0.4,0.5,0.6];
// let arrRes = []

// for(let value of arr) {
//   arrRes.push(Math.round(value))
// }

// console.log(`Масив до округления: ${arr}. Массив после округления ${arrRes} `);

// let obj = {
//   x: 2.49,
//   y: 2.5,
// };

// let objRes = {};

// for (let key in obj) {
//   objRes[key] = Math.round(obj[key])
// }

// console.log(objRes);

// if(obj.x === objRes.x && obj.y === objRes.y) {
//   console.log('Равны')
// }else{
//   console.log('Неравны')
// }

// 10. Дан `{p:10.49, q:-10.51}` → округли и выведи сумму.

// let obj = {
//   p:10.49,
//   q:-10.51
// }

// let objRes = 0

// for(let key in obj) {
//   objRes += Math.round(obj[key])
// }

// console.log(objRes)

// **D. if/else**
// 11. `v=1.49`: если `Math.round(v)===1` → `"ONE"` иначе `"NOT ONE"`.
// 12. `v=2.5`: если округление даёт чётное число — `"EVEN"`.

// let v = 1.49;

// if (Math.round(v) === 1) {
//   console.log('ONE');
// } else {
//   console.log('NOT ONE');
// }

// let v2 = 2.5;

// if (Math.round(v2) % 2 === 0) {
//   console.log('EVEN');
// }else{
//   console.log(Math.round(v2))
// }

// for(let i = 1; i <=5; i++) {
//   let num = i + 0.49
//   console.log(i, '-', num, '-', Math.round(num))
// }

// let arr = [1.1,1.9,2.1,2.9]

// let resArr = 0

// for(let i = 0; i < arr.length; i++) {
//   resArr += Math.round(arr[i])

// }
// console.log(resArr)

// **A. Простые**
// 1. Потолочное округление `2.01`, `2.99`.
// 2. Потолочное округление `-1.01`.
// 3. Потолочное округление `0.0001`.
// 4. Сравни `ceil` и `round` для `2.5`.
// 5. Сравни `ceil` для `-2.5` и `round` для `-2.5`.

// let num = Math.ceil(2.01)
// num = Math.ceil(-1.01)
// num = Math.ceil(0.0001)

// num = Math.ceil(-2.5)
// let num2 = Math.round(-2.5)

// console.log(`ceil 2.5 = ${num} , a round 2.5 = ${num2} `)

// let arr = [1.1, 1.01, 1.99];
// let arrRes = [];

// for (let value of arr) {
//   arrRes.push(Math.ceil(value));
// }

// console.log(arrRes);

// let arr2 = [-1.1, -1.01, -1.99];
// let arrRes2 = [];

// for (let value of arr2) {
//   arrRes2.push(Math.ceil(value));
// }

// console.log(arrRes2);

// let arr = [2.2, 2.5, 2.8];

// let arrRes = [];

// for (let value of arr) {
//   arrRes.push(Math.ceil(value));
// }

// console.log(arrRes);

// let obj = {
//   a:3.14,
//   b:-3.14
// };

// for(let key in obj) {
//   console.log(Math.ceil(obj[key]))
// }

// let obj = {
//   p:0.1,
//   q:0.9
// };

// let sum = 0

// for(let key in obj) {
//   console.log(Math.ceil(obj[key]))
//   sum += Math.ceil(obj[key])
// }

// console.log(sum)

// `v=1.001`: если `Math.ceil(v)===2` → `"UP"`.

// let v = 1.001

// if(Math.ceil(v) === 1) {
//   console.log('UP')
// }else{
//   console.log('Другое')
// }

// `v=-0.1`: если `ceil(v)===0` → `"ZERO"`, иначе `"NEG"`.

// let v2 = 0.1

// if(Math.ceil(v) === 0){
//   console.log('ZERO')
// }else{
//   console.log('NEG')
// }

// 13. От `i=1` до `5` выведи `Math.ceil(i-0.01)`.
// 14. Пройди по `[1.4,2.4,3.4]`, выведи сумму потолочных округлений.

// for (let i = 1; i <= 5; i++) {
//   let res = Math.ceil(i - 0.01);
//   console.log(res);
// }

// let arr = [1.4, 2.4, 3.4];
// let sum = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
//   sum += Math.ceil(arr[i]);
// }

// console.log(sum);

// **A. Простые**
// 1. Пол округление `2.99`, `2.01`.
// 2. Пол округление `-1.01`.
// 3. Пол округление `0.9999`.
// 4. Сравни `floor` и `round` для `2.5`.
// 5. Сравни `floor` для `-2.5` и `round` для `-2.5`.

// let num = Math.floor(2.99);
// num = Math.floor(2.01);
// num = Math.floor(-1.01);
// num = Math.floor(0.999);

// num = 2.5;
// console.log(
//   `Round для ${num} = ${Math.round(num)} . Floor для ${num} = ${Math.floor(
//     num
//   )}`
// );

// num = -2.5;
// console.log(
//   `Round для ${num} = ${Math.round(num)} . Floor для ${num} = ${Math.floor(
//     num
//   )}`
// );

// **B. В массиве**
// 6. Дан `[1.9,1.01,1.5]` → `floor` для каждого.
// 7. Дан `[-1.9,-1.01,-1.5]` → `floor` для каждого.
// 8. Дан `[2.2,2.5,2.8]` → выведи `floor`-массив.

// let arr = [1.9, 1.01, 1.5];

// for(let value of arr) {
//   console.log(Math.floor(value))
// }

// let arr = [-1.9, -1.01, -1.5];

// for(let value of arr) {
//   console.log(Math.floor(value))
// }

// let arr = [2.2, 2.5, 2.8];
// let arrRes = []

// for(let value of arr){
//   arrRes.push(Math.floor(value))
// }

// console.log(arrRes)

// **C. В объекте**
// 9. Дан `{a:3.14, b:-3.14}` → выведи `floor(a)` и `floor(b)`.
// 10. Дан `{p:0.1, q:0.9}` → выведи их полные округления и сумму.

// let obj = {
//   a: 3.14,
//   b: -3.14,
// };

// let objRes = {}

// for(let key in obj) {
//  objRes[key] = Math.floor(obj[key])
// }

//  console.log(objRes);

// let obj = {
//   p: 0.1,
//   q: 0.9,
// };

// let objRes = {};

// for (let key in obj) {
//   objRes[key] = Math.floor(obj[key]);
// }

// console.log(
//   `Округлене а = ${objRes.p} \nокругление b = ${objRes.q}\nCумма = ${
//     objRes.p + objRes.q
//   }`
// );

// let num = Math.min(5,3,8,1)

// let num1 = Math.min(0)
// num = Math.min()
// num = Math.min('1', 3)
// num = Math.min(NaN, 1);
// num1 = [-1, 0, 1];
// num = Math.min(num1)

// console.log(num)

// **B. В массиве**
// 6. Дан `[4,2,7,-1,0]` → найди минимум (через спред).
// 7. Дан `["10","-5","3"]` → сначала в числа, затем минимум.
// 8. Дан `["x","5","-2","y"]` → конвертируй в числа, игнорируй `NaN`, найди минимум.

// let arr = [4, 2, 7, -1, 0];

// let res = Math.min(...arr)

// console.log(res)

// let arr = ['10', '-5', '3'];

// let res = []

// for(let value of arr) {
//   res.push(parseInt(value))
// }

// res = Math.min(...res)

// console.log(res)

// console.log(`Минимум от (0) ${num1} и Минимум () ${num}`)

// let arr = ['x', '5', '-2', 'y'];

// let resArr = []

// for(let value of arr) {
//   if(!isNaN(value)) {
//     resArr.push(Number(value))
//   }
// }

// resArr = Math.min(...resArr)

// console.log(resArr)

// **C. В объекте**
// 9. Дан `{a:"3", b:"-7", c:" 2 "}` → в числа и минимум по полям.
// 10. Дан `{x:12,y:8,z:15}` → выведи минимум значений.

// let obj = {
//   a: '3',
//   b: '-7',
//   c: ' 2 ',
// };

// let objRes = [];

// for (let key in obj) {
//   objRes[key] = Number(obj[key]);
// }

// let minVal = Math.min(...Object.values(objRes));

// console.log(minVal);

// 11. Дано `m = Math.min(3,2,5)`: если `m<3` → `"OK"`, иначе `"NO"`.
// 12. Минимум среди `a,b`: если `a<b` выведи `"A"`, иначе `"B или ="`.

// let num = Math.min(3, 2, 5);

// if (num < 3) {
//   console.log('ОК');
// } else {
//   console.log('NO');
// }

// let a = 3;
// let b = 5;

// if (a < b) {
//   console.log('A');
// } else {
//   console.log('B');
// }

// let arr = ['10', 'abc', '-1', '0'];
// let res = [];

// for (let i = 0; i <= arr.length; i++) {
//   if (!isNaN(arr[i])) {
//     res.push(Number(arr[i]));
//   }
// }

// let min = Math.min(...res);

// console.log(min);

// **A. Простые**
// 1. Пусть `value="Igor"` — выведи второй символ (`"g"`).
// 2. Выведи последний символ строки `"QA"`.
// 3. Выведи длину строки `"automation"`.
// 4. Для `"hello"` выведи каждый символ с индексом 0..4 (по одному выражению на строку).
// 5. Для `"test"` выведи третий символ и сравни с `'s'`.

// let value = 'Igor'
// value = 'QA'
// value = 'automation'
// value = 'hello'

// for(let i = 0; i <=value.length-1 ; i++) {
//   console.log(value[i])
// }

// value = 'test'

// if(value[3] === 's' ){
//   console.log('True')
//   }else{
//     console.log('False');
//   }

// console.log(value)

// let arr = ['cat', 'dog', 'bird'];

// for (let value of arr) {
//   console.log(value[1]);
// }

// . Дан `["QA","JS","UI"]` → выведи последний символ каждой строки.

// let arr = ['QA', 'JS', 'UI'];

// for(let value of arr) {
//   console.log(value[value.length-1])
// }

// Дан `["hello","world","!"]` → собери массив первых символов.

// let arr = ['hello', 'world', '!'];

// let arrRes = [];

// for (let value of arr) {
//   arrRes.push(value[0]);
// }

// console.log(arrRes);

// let obj = {
//   first: 'Igor',
//   last: 'QA',
// };

// let arrObj = []

// for(let key in obj){
//  let value = obj[key]
//  arrObj.push(value[0])
//   arrObj.push(value[value.length - 1])

// }

// console.log(arrObj);

// let arrRes = {}

// for(let key in obj){
//    arrRes.firstLet = obj[key]
//    arrRes.la
// }

// console.log(arrRes);

// let obj = {
//   city: 'Dnipro',
//   country: 'Ukraine',
// };

// let objArr = [];

// for (let key in obj) {
//   let value = obj[key]
//   objArr.push(value[0]);
//   objArr.push(value[value.length - 1]);
// }

// console.log(objArr);

// let obj2 = {
//   lang: 'JavaScript',
//   type: 'Test'
//  };

// let obj2Arr = []

// for(let key in obj2){
//   let value = obj2[key]
//   obj2Arr.push(value[0])
//   obj2Arr.push(value[value.length-1])
// }
// console.log(obj2Arr);

// let obj = {
//   car: 'Tesla',
//   model: 'S',
// };

// let objRes = {};

// for (let key in obj) {
//   let value = obj[key];
//   objRes.first = [value[0]];
//  objRes[key] = [v
// alue[0], value[value.length - 1]];

// }

// console.log(objRes)

// {car:"Tesla", model:"S"} → преобразуй в объект.
// 👉 ожидаем {car:["T","a"], model:["S","S"]}

// {name:"Alex", job:"QA"} → аналогично.
// 👉 ожидаем {name:["A","x"], job:["Q","A"]}

// let obj = {
//   name: 'Alex',
//   job: 'QA'
// };

// let objRes = {}

// for(let key in obj){
//   let value = obj[key]
//   objRes[key] = [value[0], value[value.length -1]]
// }

// console.log(objRes)

// . Дан `{a:"one", b:"two", c:"three"}` → собери строку из вторых символов: `"n" + "w" + "h"`.

// let obj = {
//   a: 'one',
//   b: 'two',
//   c: 'three',
// };

// let objRes = ''

// for(let key in obj){
//   let value = obj[key]
//   objRes += value[1]
// }

// console.log(objRes)

// `s="automation"`: если первый символ `'a'`, выведи `"starts with a"`, иначе `"no"`.

// let s = 'automation'

// if(s[0] === 'a'){
//   console.log('starts with a')
// }else{
//   console.log('no')
// }

// `s="Js"`: если второй символ — `'s'` (с маленькой буквой), выведи `"ok"`, иначе `"bad"`.

// let s = 'Js'

// if(s[1] === 's'){
//   console.log('oк')
// }else{
//   console.log('bad')
// }

// Пройдись по `"Igor"` и выведи каждый символ в отдельной строке.

// let firstName = 'Igor';

// for (let i = 0; i <= firstName.length - 1; i++) {
//   console.log(firstName[i]);
// }

// . Дан массив `["apple","banana","kiwi"]`: в цикле выведи строку `"первый+последний"` для каждого (например, `"ae"`, `"ba"`, `"ki"`).

// let arr = ['apple', 'banana', 'kiwi'];
// let arrRes = []

// for(let i = 0; i <= arr.length-1; i++){
//   let word= arr[i]
//   let combo = word[0]+ word[word.length -1]
//   arrRes.push(combo)
// }

// console.log(arrRes)

// 1) Дан массив строк `["12.5px","-3.1px","0px","bad"]`.
// — Сначала замени `"px"` на `""`,
// — затем конвертируй в числа: где возможно `parseFloat`, иначе игнорируй,
// — выведи `min` и каждое число с `toFixed(2)`.

// let arr = ['12.5px', '-3.1px', '0px', 'bad'];
// let arrRes = []

// // let a = isNaN('12.5px');
// // console.log(a)

// for(let value of arr){
//   arrRes.push(value.replace('px' , ''))
// }
// let arrRes2 = []

// for(let value of arrRes) {
//   if(!isNaN(value)){
//     arrRes2.push(parseFloat(value));
//   }

// }

// console.log(arrRes2)

//  console.log(Math.min(...arrRes2))

// for(let value of arrRes2){
//   console.log(value.toFixed(2))
// }

// 2) Дан объект цен `{p1:" 10.00 ", p2:"8.5$", p3:"abc", p4:"15"}`.
// — Приведи к числам (`Number`/`parseFloat`),
// — отбрось `NaN`,
// — выведи сумму, среднее, минимум.

// let obj = {
//   p1: ' 10.00 ',
//   p2: '8.5$',
//   p3: 'abc',
//   p4: '15',
// };

// let objRes = {};

// for (let key in obj) {
//   let value = obj[key];
//   objRes[key] = parseFloat(value);
// }

// let obj2Res = {};

// for (let key in objRes) {
//   let value = objRes[key];
//   if (!isNaN(value)) {
//     obj2Res[key] = value;
//   }
// }

// //Выводим сумму

// let obj2ResSum = obj2Res.p1 + obj2Res.p2 + obj2Res.p4;

// // Выводим стреднее
// let obj2ResSr = obj2Res.p2; 

// // Выводим минимум 

// let obj2ResMin = Math.min(...Object.values(obj2Res)) 

// console.log(objRes);
// console.log(obj2Res);
// console.log(obj2ResSum);
// console.log(obj2ResSr);
// console.log(obj2ResMin);




// 3) Сгенерируй массив из 10 случайных чисел `0..1`.  
// — Выведи каждое с `toFixed(3)`,  
// — отдельно выведи `Math.min(...arr)`,  
// — посчитай сколько значений < 0.5 (через `for` и `if`).


// let arr = []

// for(let i = 0; i<= 9; i++){
//   arr.push(Math.random(i).toFixed(2))
// }

// let min = Math.min(...arr)

// let  count = 0


// for(let value of arr) {
//   if(value < 0.5) {
//     count++
//   }
// }

// console.log(arr)
// console.log(min);
// console.log(count);


// 4) Дан `value="  Igor  "`.  
// — Убери пробелы по краям (можно руками: пока первый символ — пробел, «срезай» через индексы; то же с хвоста),  
// — выведи первый, второй и последний символы,  
// — если длина ≥ 4, выведи четвёртый символ.

let value = '  Igor  ';

let valueRes = value.trim()

if(valueRes.length >= 4){
  console.log(valueRes[3])
}



console.log(valueRes[0])
console.log(valueRes[1]);
console.log(valueRes[valueRes.length -1])
console.log(valueRes.length);
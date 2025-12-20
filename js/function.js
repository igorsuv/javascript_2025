// //function declaration

// function seyHello(firstName, lastName) {
//   console.log('Hello');
//   console.log(firstName, lastName);
//   return `Hello ${firstName} ${lastName}`; // что вернет функция
// }

// let res = seyHello('Igor', 'Suvorov'); // вызов функции

// console.log();

// // function expression  - не можем её вызвать до фактического присвоения в переменную.
// const squere = function (x) {
//   return x * x;
// };

// Практика

// function multiply() {
//   if (arguments.length !== 0) {
//     let c = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//       c *= arguments[i];
//     }
//     return c;
//   } else {
//     return 0;
//   }
// }

// console.log(multiply(2, 4, 5, 7));

// function sumPositive() {
//   let c = 0;
//   if (arguments.length !== 0) {
//     for (let i = 0; i < arguments.length; i++) {
//       if (arguments[i] > 0) {
//         c = c + arguments[i];
//       }
//     }
//     return c;
//   } else {
//     return 0;
//   }
// }

// console.log(sumPositive(2, 3, 4, -5, -10));

// function reverseString(str) {
//   if (typeof str == 'string') {
//     let c = str.split('').reverse().join('');

//     return c;
//   } else {
//     let b = String(str).split('').reverse().join('');
//     return b;
//   }
// }

// console.log(reverseString(null));

function guessTheNumber(num) {
  if (num > 10 || num < 0) {
    return new Error('Please provide number in range 0-10');
  } else if (typeof num !== 'number') {
    return new Error('Please provide a valid number');
  } else {
    let c = Math.round(Math.random() * 10);
    if (c === num) {
      return 'You win';
    } else {
      return `Ты ввел число ${num} а рандомное число ${c}`;
    }
  }
}

console.log(guessTheNumber(5));

// Методы массивов

// const numArr = [1, 2, 3, 55, 645, 67545];

// let value;

// value = numArr.length;

// value = Array.isArray(numArr);
// value = numArr[2];
// numArr[2] = 12;

// value = numArr.indexOf(1);

// value = numArr.push(100);
// value = numArr.pop()
// value = numArr.unshift(111)
// value = numArr.shift()
// value = numArr.slice(0,2)
// value = numArr.splice(1,1)
// value = numArr.reverse()
// value = numArr.concat(1,2)
// value = numArr.join('')
// value = 'hello world'.split('')

// console.log(value, numArr);

// let numArr = [11, 12, 15, 123, 44];

// let valueNumArr;

// valueNumArr = numArr.indexOf(123); // 3
// valueNumArr = numArr.push(3); // добавляет значение в конец масива
// valueNumArr = numArr.pop(); // удаляет значение с конца масива
// valueNumArr = numArr.unshift(10); // добавляет значение в начало масива
// valueNumArr = numArr.slice(0, 2); // обрезает масив с 0 значения по 2 (не включительно)
// valueNumArr = numArr.splice(1, 1, 'newItems'); // удаляет 1 значение с масива и добавляет новое значение
// valueNumArr = numArr.reverse(); // переворачивает масив
// valueNumArr = numArr.concat(1111); // добавляет значение в конец масива
// valueNumArr = numArr.join(' '); // из масива в строку где ' ' указывается как разделитель между значениями масива

// let str = 'Hello Igor';
// let strRes = str.split(''); // преврощает из строки в масив
// console.log(strRes);

// console.log(numArr);
// console.log(valueNumArr);

// Задачи

// let arr = ['Dev', 'QA', 'PM', 'BA'];

// let arrRes;

// arrRes = arr.indexOf('QA');

// console.log(arrRes);
// 2️⃣ Добавь `100` в конец массива `[1, 2, 3]`,
// а потом удали последний элемент.

// let arr = [1, 2, 3];

// let arrRes;

// arrRes = arr.push(100);

// let arr = ['User']

// let arrRes

// arrRes = arr.unshift('Admin')

// let arr = [1, 2, 3, 4, 5];

// let arrRes

// arrRes = arr.slice(0,3)

// let arr = ["red", "green", "blue"];

// let arrRes = arr.splice(1,1,'black', 'white')

// let arr = [1, 2, 3, 4, 5];

// let arrRes = arr.reverse();

// let a = [10, 20];
// let b = [30, 40];

// let arrRes = a.concat(b, 50);

// let arr = ['QA', 'is', 'fun'];

// let arrRes = arr.join(' ')

// let arr = 'hello world';

// let arrRes = arr.split(' ')

// let arr = ['test', 'dev', 'qa'];

// let arrRes = arr.push('pm');
// arrRes = arr.shift();
// arrRes = arr.reverse();
// arrRes = arr.concat('Lead', 'CTO');
// let arrRes2 = arrRes.join(' | ');

// console.log(arrRes2);
// console.log(arr);

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function getMax(a, b) {
//   if (a > b) {
//     return a;
//   } else if (b > a) {
//     return b;
//   }
// }

// function getLength(str) {
//   if (str.length > 0) {
//     return str.length;
//   } else if (str.length == 0) {
//     return 'Пустая стока';
//   }
// }

// function toUpperFirst(str) {
//   let strRes = str.replace(str[0], str[0].toUpperCase());
//   return strRes;
// }

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.ceil(max);

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt(1, 50));

// function isValidEmail(email) {
//   if(email.includes('@') && email.includes('.')) {
//     return true
//   }else {
//     return false
//   }
// }

// console.log(isValidEmail('email@.'));

// function isValidPassword(password) {
//   let hasMinLength = password.length >= 8;
//   let hasNumber = /\d/.test(password);
//   let hasUppercase = /[A-Z]/.test(password);

//   if (hasMinLength && hasNumber && hasUppercase) {
//     return 'Ok';
//   } else {
//     return 'Invalid password';
//   }
// }

// console.log(isValidPassword('12334A234a'));

// function trimText(text) {
//   if (text.charAt(0) || text.charAt(text.length - 1) === ' ') {
//     return text.trim();
//   } else {
//     return 'Sorry';
//   }
// }

// console.log(trimText(' ewe '));

// function getApiUrl(env) {
//   if(env === 'stage'){
//     return 'https://stage.api.myapp.com';
//   } else if (env === 'prod'){
//     return 'https://api.myapp.com';
//   }else{
//     return 'Unknown environment';
//   }
// }

// console.log(getApiUrl('prod1'))

// let user1 = {
//   name: 'Igor',
//   age: 30,
// };

// let arrUsKey = []

// for(let key in user1){
//   let value = user1[key]
//   arrUsKey.push(value)
// }

// // console.log(arrUsKey)

// let obj1 = {
//   fullName: 'Igor',
//   age: '32',
//   company: 'Monto',
//   position: 'QA',
// };

// let obj2 = {
//   fullName: 'Igor',
//   age: '32',
//   company: 'Monto',
//   position: 'QA',
// };

// console.log(Object.values(obj1));
// console.log(Object.values(obj2));

// function compareObjects(obj1, obj2) {
//   let value1 = Object.values(obj1);
//   let value2 = Object.values(obj2);

//   if (value1.length !== value2.length) {
//     return false;
//   }

//   for (let i in value1) {
//     if (value1[i] !== value2[i]) return false;
//   }
//   return true;
// }

// console.log(compareObjects(obj1, obj2));

// function generateUser() {
//   const id = Math.round(Math.random() * 1000);
//   return {
//     id: id,
//     name: 'TestUser',
//     email: `user${id}@test.com`,
//   };
// }

// console.log(generateUser());

// let obj = {
//   status: 200,
//   body: {
//     success: true,
//   },
// };

// function validateResponce(obj) {
//   if (obj.status == 200) {
//     return 'ОК';
//   } else {
//     return 'FAIL';
//   }
// }

// console.log(validateResponce(obj));

// function isValidEmail(email) {
//   if (email.includes('@') && email.includes('.')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isValidEmail('test@gmail.com'));

// const required = ['name', 'email', 'age'];
// const actual = ['name', 'age'];
// //  for (let value of required) {
// //    console.log(value);
// //  }

// function getMissingFields(required, actual) {
//   let result = []

//   for(let value of required) {
//     if(actual.includes(value)) {
//       continue;
//     }else{
//       result.push(value)
//     }
//   }
//     return result
// }

// console.log(getMissingFields(required, actual));

// let expected = 200
// let actual = 400

// function assertEqual(expected, actual){
//    if(expected ===  actual) {
//     return 'Passed'
//    }else {
//     return `Filed: expected ${expected} but got ${actual} `
//    }
// }

// console.log(assertEqual(400, 200));

// let success = 'false'

// function mockApiResponce(success) {
//   let objSuccess = {
//     status : 200 ,
//     boby : {
//       success : true
//     }
//   }

//    let objFiled = {
//      status: 500,
//      boby: {
//        success: false,
//      },
//    };

//   if(success === true) {
//     return objSuccess
//   }else if (success === false){
//     return objFiled
//   }else {
//     return 'проверь код'
//   }
// }

// console.log(mockApiResponce(success));

// let n = 10

// function sumTo(n){
//   let result = 0
//   for(let i = 0; i <= n; i++ ){
//     result = result + i
//   }
//   return result
// }

// console.log(sumTo(n));

// function isEven(num) {
//   if(num%2===0) {
//     return true
//   }else{
//     return false
//   }
// }

// let text = 'hell'
// let n = 5

// function isLong(text, n) {
//   if(text.length>= 5 ){
//     return true
//   } else{
//     return false
//   }
// }

// console.log(text.length)

// console.log(isLong(text, n));

// let arr =  [1,2,3,5,10]
// function sumArray(arr) {
//   let arrRes = 0
//   for(let i = 0; i<arr.length; i++){
//     arrRes = arrRes + arr[i]
//   }
//   return arrRes
// }

// console.log(sumArray(arr));

// function foo() {
//   console.log(arguments);

//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// foo(1, 'test', true);

// function multiply() {
//   let res = 1
//   if (arguments.length > 0) {
//     for (let i = 0; i < arguments.length; i++) {
//        res = res* arguments[i]
//     }
//     return  res
//   }else{
//     return 'Ошибка'
//   }
// }

// console.log(multiply(1,2,3));

function reverseString(str) {
  if (typeof str == 'string') {
    let result = str.split('').reverse().join('');
    return result;
  } else {
    let result = String(str).split('').reverse().join('');
    return result;
  }
}

console.log(reverseString(true));

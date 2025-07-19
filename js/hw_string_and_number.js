// Получить число pi из Math и округлить его до 2-х знаков после точки

// let value;
// value = +Math.PI.toFixed(2)

// console.log(value)
// console.log(typeof value);

// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

// let value;
// value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
// value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

// console.log(value);
// console.log(typeof value);

// Работа с Math.random:

// a. Получить случайное число и округлить его до двух цифр после запятой

// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

let value;

value = Math.random().toFixed(2);
value = Math.floor(Math.random() * 100 + 1);

value = 0.6 + 0.7;
value = value.toFixed(1);
value = '100$';
value = parseInt(value);

//
value = '213px';
value = parseInt(value);

value = ' 2323vsd';
value = parseInt(value);

value = 1.3123123213;
// value = value.toFixed(2)
value = +value.toFixed(3);

value = Math.random() * 10 + 1;
value = Math.floor(value);

let arr = ['red', 'Black', 'Pink'];

let randomColor = Math.random();

value = Math.floor(randomColor * arr.length);

console.log(arr[value]);

console.log(value);
console.log(typeof value);

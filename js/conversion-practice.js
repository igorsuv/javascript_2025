// //1

// let num = 'number';
// let num_2 = 3;
// let num_3 = 3;

// console.log(num + num_2 + num_3); // тут відбулася конкатинація 1 строки та 2 цифр. (Вивід в консолі : number33 )

// //2

// let num_4 = null;
// let num_5 = 3;
// console.log(num_4 + num_5); // коли null використовуеться при додавані числ він перетворюється на 0.Тоді 0+3=3  (Вивід в консолі : 3 )

// //3

// let num_6 = 5;
// let num_7 = 'qwerty';
// let result = num_6 && num_7;
// console.log(result); // у цьому випадку num_6 буде true, та num_7 також буде true. (!!!Правило: False буде при :  null, undefined, 0, '' , 0x0 )
// // Оператор && (and) виконує обчислення до того часу поки не натрапить на false
// //Якщо ми дійшли до кінця обчислення тоді повертається останне обчисленне значення.
// // (Вивід в консолі : qwerty )

// //4

// let num_8 = '40';
// let num_9 = '2';
// let num_10 = 'hillel';
// let result_2 = +num_8 + +num_9 + num_10;
// console.log(result_2); // знак "+" перед строкою переводить тип string в number. Якщо у виразі э хоч 1 string то в такому випадку випадку відбуваеться,
// // конкатинація. Тобто '40'(стало number); '2'(стало number); 'hillel'(string)
// //  (Вивід в консолі : 42hillel ).

// //5

// let num_11 = '10';
// let num_12 = 5;
// let num_13 = 6;
// let result_3 = num_11 + num_12 === num_13;
// console.log(result_3); // 10 - це string , 5 - це number . Тут відбулася конкатинація = '105'
// // Знак "===" обозначае строге равенство не тільки по значенням а  і по типу.
// // Тоді рівняння получяеться таке '105'  === 6  - це false
// // (Вивід в консолі : false ).
// // 6

// let result_4 = true + false;
// console.log(result_4); // при додаванні true конвертується в 1, а false конвертується в 0. 0+1= 1
// //(Вивід в консолі : 1)

// //7

// let num_14 = '4px';
// let num_15 = 3;
// let result_5 = num_14 - num_15;
// console.log(result_5); // '4px' -це string ; 3 - це number.
// // (Вивід в консолі : NaN)

// // 8

// let num_16 = '4';
// let num_17 = 3;
// let result_6 = num_16 - num_17;
// console.log(result_6); // при відніманні js автоматично переводить string в number(якщо це можливо).
// // тут '4' (перевелось в number).
// // тоді вираз получається таким 4 - 3 = 1
// // (Вивід в консолі : 1)

// // 9

// let num_18 = '6';
// let num_19 = 3 ** 0; // будь-яке число в степені 0 = 1
// let result_7 = num_18 + num_19;
// console.log(result_7); // '6' - це strint. Тому тут відбулась конкатинація а не додавання.
// // (Вивід в консолі : 61)

// // 10

// let num_20 = 12;
// let num_21 = '6';
// let result_8 = num_20 / num_21;
// console.log(result_8); // при операції ділення js автоматично конвертує '6' в number
// // 12/6 = 2
// // (Вивід в консолі : 2)

// // 11

// let num_22 = '10';
// let num_23 = 5 === 6;
// //console.log(num_23)  // тут в консолі виведе false
// let result_9 = num_22 + num_23;
// console.log(result_9); // '10' -це string. Тому в цьому вирізі відбудеться конкатинація
// // Вивід в консолі : 10false

// // 12

// let num_24 = null;
// let num_25 = '';
// let result_10 = num_24 == num_25;
// console.log(result_10);
// //  Вивід в консолі : false
// //

// // 13

// let num_26 = 3 ** (9 / 3); // 3 в степени 3
// console.log(num_26); // Cначала проводим деление в степени, потом возводим в степень.
// // Вивід в консолі : 27

// //14

// let num_27 = 'true';
// // console.log(num_27)
// // console.log(typeof num_27)  // тут виведеться string
// //  console.log(!num_27) // Поскільки рядок не пустий то він є true, знак заперечення '!' перетворює його на false
// // console.log(typeof !num_27) // виведеться bool
// // console.log(!!num_27) // тут подвійне заперечення тобто з true спочатку зробився false а потім знову true

// let num_28 = 'false';
// // console.log(!num_28) // Поскільки рядок не пустий то він є true, знак заперечення '!' перетворює його на false
// // console.log(!!num_28) // тут подвійне заперечення тобто з true спочатку зробився false а потім знову true
// let result_11 = !!num_28 == !!num_27; // поскільки значення в змінній num_27 є true та в змінній num_28 також є true, тоді true == true
// console.log(result_11); // == це не строге порівняння. Оскільки true == true то в консолі виведеться true
// // Вивід в консолі : true
// console.log(typeof result_11); // bool

// // 15

// let num_29 = 0;
// let num_30 = '0';
// let num_31 = 1;
// let result_12 = num_29 || (num_30 && num_31); // первое по приоритету выполняется &&
// // console.log(num_30 && num_31)               // && выполняется до тех пор пока значение не вернет false либо выводит последнее значение. (!!!Правило: False буде при :  null, undefined, 0, '' , 0x0 , false )
// // тут  '0' - это true и 1 это true. Выводит последнее значение 1
// console.log(result_12); // || - повертає true, якщо хоча б один з операндів є true, інакше повертає false.
// // поскольку результат num_30 && num_31 = 1 ,
// // то выражение будет выглядеть так  0 || 1 , где 0 - false а 1 true
// // Вивід в консолі : true

// // 16

// let num_32 = null;
// let num_33 = false;
// let num_34 = 1;
// let result_13 = (+num_32 == false) < 1;
// // console.log(+num_32)  // переобразовалось в number 0
// // console.log(+num_32 == num_33) //  поскольку равенство не строгое "==", то 0 == 0  по значениям. Здесь вывод будет true
// console.log(result_13); // тут результат в скобках получился true либо 1
// // 1 < 1  это false
// // Вивід в консолі : false

// // 17

// let num_35 = false;
// let num_36 = true;
// let result_14 = num_35 && num_36; // по приоритету первая выполняется &&
// let result_15 = (num_35 && num_36) || num_36;

// // console.log(result_14)              // && выполняется до тех пор пока значение не вернет false либо выводит последнее значение. Тут вернет false
// console.log(result_15); //   || - повертає true, якщо хоча б один з операндів є true, інакше повертає false.
// //  false || true. Вернет true
// // Вивід в консолі : true

// // 18

// let num_37 = false;
// let num_38 = true;
// let result_16 = num_37 || num_38; // выполняется первим потому что выражение взято в скобки.
// let result_17 = num_37 && (num_37 || num_38);
// //console.log (result_16)         //  || - повертає true, якщо хоча б один з операндів є true. Тут Вернет true
// console.log(result_17); // && выполняется до тех пор пока значение не вернет false либо выводит последнее значение.
// // false && true. Вернет false
// // Вывод в консоли : false

// // 19   (+null == false) < 1 ** 5

// let num_39 = null;
// let num_40 = false;
// let num_41 = 1 ** 5; //  =1
// let result_18 = +num_39 == num_40;
// let result_19 = result_18 < num_41;

// console.log(result_18); // вернет true поскольку +null переобразовался в 0 , a false = 0
// console.log(result_19); //  0 < 1 это false
// //  Вывод в консоли : false

// // && — возвращает первое ложное, или если всё правда — последнее правдивое.

// // || — возвращает первое правдивое, или если всё ложное — последнее ложное.

// let a = 0;
// let b = 'Hello';
// console.log(a && b); // Вывод в консоли : 0 потому что 0 - это ложное значение, и оператор && вернет первое ложное значение.

// let c = 'JS';
// let d = '';
// console.log(c || d); // Вывод в консоли : JS потому что оператор || вернет первое правдивое значение, а пустая строка '' - это ложное значение.

// let e = '';
// let f = 45;
// console.log(e || (f && 'QA')); // Вывод в консоли : QA потому что оператор && вернет 'QA' (поскольку f - это 45, что является правдивым значением), а оператор || вернет первое правдивое значение, которое здесь 'QA'.
// let g = 'test';
// console.log(!g); // Вывод в консоли : false потому что оператор ! инвертирует значение 'test', которое является правдивым, в ложное значение false.
// console.log(!!g); // Вывод в консоли : true потому что двойное отрицание !! возвращает исходное значение, которое здесь является правдивым (true).

// let h = null;
// let i = 'world';
// let j = '';

// console.log(h || (i && !j)); // вывод в консоли : true потому что !j вернет true , а оператор && вернет true так как i - это 'world', что является правдивым значением. Оператор && вернет последнее правдивое значение,  которое здесь true. А оператор || вернет первое правдивое значение, которое здесь true.

// let ab = 'hello';
// let bb = 0;
// let cc = null;
// console.log((ab && bb) || cc); // Вывод в консоли : null потому что оператор && вернет b (0), так как это первое ложное значение, а оператор || вернет c (null), так как это последнее ложное значение.

// let ax = '';
// let bq = 'JavaScript';
// let cs = 'QA';
// console.log(ax || (bq && cs)); //Вывод в консоли : QA, т.к первое по приритету выполянется && который вернет QA потому что 2 значиния являются истиной и вернет последнее правдивое значение, а оператор || вернет первое правдивое значение, которое здесь является QA.

// let a1 = undefined;
// let b1 = false;
// let c1 = !!'text';
// console.log(a1 || b1 || (c1 && !0)); // Вывод в консоли : true, потому что оператор && вернет c (true), так как 'text' является правдивым значением, а оператор || вернет первое правдивое значение, которое здесь является true.

// let a2 = '0';
// let b2 = '';
// let c2 = false;
// console.log(!a2 || (b2 && c2)); // Вывод в консли : ''

// let a3 = 1;
// let b3 = null;
// let c3 = 'false';
// console.log((a3 && b3) || !!c3); // Вывод в консоли : true, потому что оператор && вернет b3 (null), так как это первое ложное значение, а оператор || вернет c3 (true), так как 'false' является правдивым значением.

// let value;

// //  Number to String

// value = 10;
// value = String(value);
// value = String(10 + 40);
// value = (40).toString();

// // Boolean to String

// value = String(true);
// value = String(false);

// // Array to String

// value = String([1, 2, 3]);

// // Object to String

// value = String({
//   name: 'Igor',
// });

// value = 30 + '' + 30;
// value = 30 + '';
// value = 30 - 'sadas';
// value = 30 - '10';
// value = true + 10;
// value = false + undefined;

// // String to Number

// value = Number('23');
// value = Number(true);
// value = Number(false);
// value = Number(null);
// value = Number('vsw');
// value = Number([1, 2, 3]);

// value = parseInt('200');
// value = parseInt('200dadas');
// value = parseInt('das200');

// value = parseFloat('200.20dsada');

// // Boolean
// value = Boolean('wew');
// value = Boolean('');
// value = Boolean(100);
// value = Boolean(0);
// value = Boolean(undefined);
// value = Boolean(null);
// value = Boolean({});
// value = Boolean([]);

console.log(value);
console.log(typeof value);

// // Number

// const num1 = 10;
// const num2 = 20;

// let value1;

// // +*/-

// value1 = num1 + num2;
// value1 = value + 100;
// value1 += 100;
// // value = 5 % 2;

// // value1 ++
// // ++value1
// value1--;
// --value1;

// value1 = 0.6 + 0.7;

// value1 = +value.toFixed(1); // округление до 1 знака после запятой и "+" конвертирует стороку в число

//Math

// value1 = Math.PI;
// value1 = Math.random();
// value1 =Math.round(2.4)  // округление
// value1 = Math.ceal(2.1)   // округляет всегда в большую сторону
// value1 = Math.floor(2.1)  // округляет всегда м меньшую сторону
// value1 = Math.min (1,5,10,15) // Вернет минимальное число из переданого списка

// value1 = Math.floor(Math.random() * 10 + 1);

// const arr = ['black', 'red', 'pink'];

// value1 = Math.floor(Math.random() * arr.length);

// value1 = parseInt('200xx');
// value1 = parseFloat('12.33rer');
// let num = 0.1 + 0.2;
// value1 = +num.toFixed(2);

// value1 = Math.random();
// value1 = Math.round(2.4);
// value1 = Math.floor(3.9);

// let prices = [100, 200, 300, 400];
// let minPrice = Math.min(...prices);

const temps = [12, 7, -5, 0, 4];
let minTemps = Math.min(...temps)

console.log(minTemps);
console.log(typeof minTemps);

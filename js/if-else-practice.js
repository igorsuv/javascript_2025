 let age = 5;

 if( age < 18 ) {
        console.log ('Доступ запрещён');
 } else if (age >= 18 && age < 60) {   
        console.log ('Добро пожаловать!');
 } else if (age >= 60) {
        console.log ('Вы в категории 60+');
 }


 let temp = 25;

if (temp < 0 ) {
    console.log('Очень холодно')
} else if (temp >=0 && temp < 20 ) {
    console.log('Прохладно')
} else if ( temp >=20 && temp <30) {
    console.log('Тепло')
} else {
    console.log('Очень жарко')
}


let login ; 
login = 'admin'

if (login === 'admin') {
    console.log('Привет,админ!')
} else if (login === 'qa') {
    console.log('Привет,тестеровщик')
} else {
    console.log ('Привет пользователь')
}


let username = 'igor' ;
let password = '12345' ;

if (username === 'igor') { 
    if (password === '12345') {
        console.log('Вход разрешён')
    } 
} else {
    console.log('Пользователь не найден')
}


let inStock = true;      // есть ли в наличии
let balance = 500;       // баланс на счету
let price = 300;         // цена товара


if (inStock === true && balance >= price) {
    console.log ('Покупка прошла успешно')
} else if (inStock === false) {
    console.log('Товара нет в наличии')
} else if (price > balance) { 
     console.log('Недостаточно средств')
}


let name = 'Игорь';
let email = '';
let age_1 = 22;


if ( name && email && age_1 ) {
    console.log('Форма отправлена')
} else {
    console.log('Заполни все поля')
}



let role = 'admin' 

switch(role) {
    case 'admin' :
        console.log('Привет, админ!'); 
        break;
    case 'qa' :
        console.log ('Привет, тестировщик!'); 
        break;
    case 'user' :
        console.log ('Привет, пользователь!'); 
        break;
    case 'guest' :
        console.log('Гость, пожалуйста, войдите');
        break ;
    default : 
        console.log('Нет доступа!')
}



let day = 1 


switch(day) {
    case 1 :
        console.log('Понедельник');
        break;
    case 2 :
        console.log('Вторник'); 
        break;
    case 3 :
        console.log('Cреда');
        break;
    case 4 :
        console.log('Четверг');
        break;
    case 5 :
        console.log('Пятница');
        break;
    case 6 :
        console.log('Суббота');
        break; 
    case 7 :
        console.log('Воскресенье');
        break;
    default :
        console.log ('Такого дня нет')
}




let a_1 = 10 ;
let b_1 = 5; 
let operation = '*'

switch(operation) {
    case '+' :
        console.log(a_1 + b_1);
        break;
    case '-' :
        console.log(a_1 - b_1);
        break;
    case '*' :
        console.log(a_1 * b_1);
        break;
    case '/' :
        console.log(a_1 / b_1);
        break;
    default:
    console.log('Неизвестная операция');
}



let num; 
num = -1

if (num > 0 ) {
    console.log('Положительное число')
} else if (num < 0) {
    console.log('Отрицательное число')
} else {
    console.log('Ноль')
}


let mark = 6 

switch(mark) {
    case 1 :
        console.log('Ужасно')
        break
    case 2 :
        console.log('Плохо')
        break
    case 3 :
        console.log('Удовлетворительно')
        break
    case 4 :
        console.log('Хорошо')
        break
    case 5 :
        console.log('Отлично')
        break
    default :
        console.log('Неизвестная оценка')

    
}


let login_1 = 'qa';
let password_1 = 'qwerty';  


if (login_1 === 'admin' && password_1 === '1234') {
        console.log('Привет, админ');
} else if (login_1 ==='qa' && password_1 === 'qwerty') {
    console.log('Привет, тестировщик')
} else {
    console.log('Ошибка авторизации')
}


number = 7 

if (number % 2 === 0) {
    console.log('Чётное')
} else {
    console.log('Нечётное')
}


let item = 'phone';

switch(item) {
    case 'phone' :
        console.log('Товар : Смартфон')
        break
    case 'laptop' :
        console.log('Товар : Ноутбук')
        break
    case 'monitor' :
        console.log('Товар : Монитор')
        break
    default : 
        console.log('Товар не найден')
}
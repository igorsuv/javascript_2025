let age = 5;

if (age < 18) {
  console.log('Доступ запрещён');
} else if (age >= 18 && age < 60) {
  console.log('Добро пожаловать!');
} else if (age >= 60) {
  console.log('Вы в категории 60+');
}

let temp = 25;

if (temp < 0) {
  console.log('Очень холодно');
} else if (temp >= 0 && temp < 20) {
  console.log('Прохладно');
} else if (temp >= 20 && temp < 30) {
  console.log('Тепло');
} else {
  console.log('Очень жарко');
}

let login;
login = 'admin';

if (login === 'admin') {
  console.log('Привет,админ!');
} else if (login === 'qa') {
  console.log('Привет,тестеровщик');
} else {
  console.log('Привет пользователь');
}

let username = 'igor';
let password = '12345';

if (username === 'igor') {
  if (password === '12345') {
    console.log('Вход разрешён');
  }
} else {
  console.log('Пользователь не найден');
}

let inStock = true; // есть ли в наличии
let balance = 500; // баланс на счету
let price = 300; // цена товара

if (inStock === true && balance >= price) {
  console.log('Покупка прошла успешно');
} else if (inStock === false) {
  console.log('Товара нет в наличии');
} else if (price > balance) {
  console.log('Недостаточно средств');
}

let name = 'Игорь';
let email = '';
let age_1 = 22;

if (name && email && age_1) {
  console.log('Форма отправлена');
} else {
  console.log('Заполни все поля');
}

let role = 'admin';

switch (role) {
  case 'admin':
    console.log('Привет, админ!');
    break;
  case 'qa':
    console.log('Привет, тестировщик!');
    break;
  case 'user':
    console.log('Привет, пользователь!');
    break;
  case 'guest':
    console.log('Гость, пожалуйста, войдите');
    break;
  default:
    console.log('Нет доступа!');
}

let day = 1;

switch (day) {
  case 1:
    console.log('Понедельник');
    break;
  case 2:
    console.log('Вторник');
    break;
  case 3:
    console.log('Cреда');
    break;
  case 4:
    console.log('Четверг');
    break;
  case 5:
    console.log('Пятница');
    break;
  case 6:
    console.log('Суббота');
    break;
  case 7:
    console.log('Воскресенье');
    break;
  default:
    console.log('Такого дня нет');
}

let a_1 = 10;
let b_1 = 5;
let operation = '*';

switch (operation) {
  case '+':
    console.log(a_1 + b_1);
    break;
  case '-':
    console.log(a_1 - b_1);
    break;
  case '*':
    console.log(a_1 * b_1);
    break;
  case '/':
    console.log(a_1 / b_1);
    break;
  default:
    console.log('Неизвестная операция');
}

let num;
num = -1;

if (num > 0) {
  console.log('Положительное число');
} else if (num < 0) {
  console.log('Отрицательное число');
} else {
  console.log('Ноль');
}

let mark = 6;

switch (mark) {
  case 1:
    console.log('Ужасно');
    break;
  case 2:
    console.log('Плохо');
    break;
  case 3:
    console.log('Удовлетворительно');
    break;
  case 4:
    console.log('Хорошо');
    break;
  case 5:
    console.log('Отлично');
    break;
  default:
    console.log('Неизвестная оценка');
}

let login_1 = 'qa';
let password_1 = 'qwerty';

if (login_1 === 'admin' && password_1 === '1234') {
  console.log('Привет, админ');
} else if (login_1 === 'qa' && password_1 === 'qwerty') {
  console.log('Привет, тестировщик');
} else {
  console.log('Ошибка авторизации');
}

number = 7;

if (number % 2 === 0) {
  console.log('Чётное');
} else {
  console.log('Нечётное');
}

let itemType = 'phone';

switch (itemType) {
  case 'phone':
    console.log('Товар : Смартфон');
    break;
  case 'laptop':
    console.log('Товар : Ноутбук');
    break;
  case 'monitor':
    console.log('Товар : Монитор');
    break;
  default:
    console.log('Товар не найден');
}

let value;

value = 0;

if (value === 10) {
  console.log('valuse 10');
} else {
  console.log('else');
}

if (value) {
  console.log('true');
} else {
  console.log('false');
}

if (!value) {
  console.log(value);
}

value = [1];
console.log(value.length);

if (value.length) {
  console.log(value);
} else {
  console.log('array is empty');
}

if (Array.isArray(value)) {
  console.log(value);
} else {
  console.log('array is empty');
}

let user = {
  name: 'Igor',
};

if (user.name) {
  console.log(user.name);
} else {
  console.log('user is empty');
}

if (user.hasOwnProperty) {
  console.log(user.name);
} else {
  console.log('user is empty');
}

value = 1 || 0;
console.log(value);

let age_2 = 10;

if (age_2 < 16 || age_2 > 65) {
  console.log(age_2);
} else {
  console.log('user is not acsses');
}

let serverNickName = 'Igor';
let nickName = serverNickName || 'defoult nickname';

console.log(nickName);

let produktPrice = 10;

if (produktPrice >= 5 && produktPrice <= 20) {
  console.log('беру');
} else {
  console.log(produktPrice);
}

let a = 0 || 'string';
a = 1 && 'string';
a = null || 25;
a = null && 25;
a = null || 0 || 35;
a = null && 0 && 35;

console.log(a);

let b = 12 + 14 + '12';
b = 3 + 2 - '1';
b = '3' + 2 - 1;
b = true + 2;
b = +'10' + 1;
b = undefined + 2;
b = null + 5;
b = true + undefined;

console.log(b);

let rozetka = 'comp';

// if (rozetka ==='comp') {
//     rozetka = 'visible';
// }else {
//     rozetka = 'hidden'
// }

console.log(rozetka);

let numb = 10;

if (numb === 0) {
  numb = 1;
} else if (numb < 0) {
  numb = ' less then zero';
} else {
  numb *= 10;
}

console.log(numb);

let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false,
};

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}

console.log(car);

let item = {
  name: 'Intel core i7',
  price: '200$',
  discount: '15%',
};

if (item.discount && item.price) {
  item.priceWithDiscount =
    parseInt(item.price) -
    (parseInt(item.price) * parseInt(item.discount)) / 100;
  console.log(item.priceWithDiscount);
} else if (!item.discount) {
  console.log(item.price);
}

console.log(item);

let product = {
  name: 'Яблоко',
  price: '10$',
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log('Товаров не найдено');
}

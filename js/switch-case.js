// let a = 1;
// let b = 0;

// if (a > 1) {
//   b = a;
// } else {
//   b += 1;
// }

// console.log(b);

// Тернарный оператор
// Выражение , ? если true : если false

// b = a > 0 ? a : b + 1

// console.log(b);

let a = 'block';

switch (a) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
}

let b = 'hidden';

b === 'hidden' ? (b = 'visible') : (b = 'hidden');

console.log(b);

const firstName = 'Igor';
const lastName = 'Suvorov';
const age = 30;

let value;

value =
  'Привет меня зовут ' + firstName + ' ' + lastName + ' и мне ' + age + ' лет';
value = `Привет меня зовут ${firstName} ${lastName} и мне ${age} лет`;

console.log(value);

const str = 'JavaScript is awesome!';

let valueString = str.length;

valueString = str[1];
valueString = str[str.length - 1];
valueString = str.toUpperCase();
valueString = str.includes('awesome');
valueString = str.replace('awesome', 'powerful');
valueString = str.slice(0, 10);
valueString = str.indexOf('!')

console.log(valueString);


const userName = '  iGoR  '

let valueUser = userName.trim(); 

valueUser = valueUser.toLowerCase()
let valueFirst = valueUser[0].toUpperCase()

let newUserName = `${valueFirst}${valueUser.slice(1,5)}`





console.log(newUserName);
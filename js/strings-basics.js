const firstName = 'Igor';
const lastName = 'Suvorov';
const age = 30;
const str = 'Hello my name is Denis';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value += ' I am' + age;

value = firstName.length;
value = firstName[2];
value = lastName[lastName.length - 1];
value = firstName[firstName.length - 1];

value = firstName.toUpperCase();
value = firstName.concat(' ', lastName);

value = firstName.indexOf('o');
value = str.indexOf('m');
value = str.includes('my');

value = str.slice(0, 5);
value = str.slice(5);

value = str.replace('Denis', 'Den');

console.log(value);

// Шаблонные строки

str = `
<ul>
    <li>First name : ${firstName} </li>
    <li>Last name : ${lastName} </li>
    <li>Age : ${age} </li>
</ul>
`;

document.body.innerHTML = str;

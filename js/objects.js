const user = {
  firstName: 'Igor',
  age: 30,
  isAdmin: true,
  email: 'test@test.com',
  'user-adress': {
    city: 'Dnipro',
  },
  skills: ['qa', 'JS', 'WireMock', 'Graylog'],
};

let value;
let prop = 'skills';

value = user.firstName;
value = user['user-adress'];
value = user['user-adress'].city;
value = user[prop][0];

user.firstName = 'Docent';
user.info = 'Some info';

user['user-adress'].city = 'Kiev';

user['user-adress'].country = 'Ukraine';
user.plan = {};
user.plan.basic = 'basic';

console.log(value);
console.log(user);

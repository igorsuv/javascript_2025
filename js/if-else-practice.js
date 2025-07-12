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
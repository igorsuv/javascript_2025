let first_name = "Igor";
let birth_year = 1993;
let isLearningJS = true;
let age = 2025 - birth_year;
let info = 'Привет, '+ first_name + '! Тебе ' + age + ' лет.'; 
let hobbies = ['QA', 'JS', 'Basketball'];
let person = {
    first_name: first_name,
    birth_year: birth_year,
    isLearningJS: isLearningJS,
    hobbies: hobbies
};  

console.log(first_name) // Output: Igor
console.log(birth_year) // Output: 1993
console.log(isLearningJS) // Output: true
console.log(typeof first_name) // Output: string
console.log(typeof birth_year) // Output: number
console.log(typeof isLearningJS) // Output: boolean
console.log(typeof age) // Output: number
console.log(hobbies[0], hobbies[2]) // Output: QA Basketball
console.log(person, person.hobbies[1])
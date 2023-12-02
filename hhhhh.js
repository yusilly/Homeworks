const Person = {
    name: 'WWW',
    age: 2000,
    hobbies: ['sing', 'dance', 'rap'],
    addres: {
        street: 'chongwenlu',
        city: 'ChongQing',
        school: 'CQUPT'
    },
}
const { name, age, addres: { street, city, school }, } = Person;
console.log(Person);
console.log(Person.name);
console.log(age);
console.log(street);
console.log(city);
console.log(school);
const { hobbies: [h1, h2, h3] } = Person;
console.log(h1);
console.log(h2);
console.log(h3);



const factorial1 = n => {
    let sum = 1;
    for (let i = n; i >= 1; i--) {
        sum = sum * i;
    }
}
const factorial12 = m => {
    if (m == 1) {
        return 1;
    }
    else if (m > 1) {
        return m * (factorial12(m - 1));
    }
}
console.log(factorial1(5));
console.log(factorial2(4));




var nameVar = 'Tyson';
var nameVar = 'Rosie';
console.log('nameVar', nameVar);

let nameLet = 'Jet';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Otis';
console.log('nameConst', nameConst);


// Block Scoping

const fullName = 'Tyson Hood';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
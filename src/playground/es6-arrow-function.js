// const square = function(x) {
//     return x*x;
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8))

const firstName = (fullName) => {
    return fullName.split(' ')[0]
}

console.log(firstName('Tyson Hood'));

const firstNameAgain = (fullName) => fullName.split(' ')[0];

console.log(firstNameAgain('Rosemary Whitson'));

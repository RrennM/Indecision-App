// arguments object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55,1, 1001));



// this keyword - no longer bound

const user = {
    name: 'Tyson',
    cities: [
        'Dallas',
        'Portland',
        'Gresham'
    ],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);

        // const that = this;

        // for(var i = 0; i < this.cities.length; i++) {
        //     console.log(this.name + ' has lived in ' + this.cities[i])
        // }

        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // })
    }
}

console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
    // numbers - array of numbers
    number: [1, 2, 3],
    // multiplyBy - single number
    multplyBy: 2,
    // multiply - method - creates a new array of product numbers * multiplyBy
    multiply() {
        return this.number.map((num) => num * this.multplyBy)
    }

}

console.log(multiplier.multiply());
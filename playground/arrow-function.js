var square = (x) => x*x;
console.log(square(9));

var user = {
    name: 'Máté',
    sayHi: () => {
        console.log(arguments); //global argumenteket irja ki
        console.log(`Hi. I'm ${this.name}`); // undefined lesz mert arrow function-be nincs this
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};
user.sayHiAlt(1, 2, 3);
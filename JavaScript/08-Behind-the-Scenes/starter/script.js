'use strict';


console.log(this);//point to window object

const calcAge = function(birthYear){
    console.log(2037-birthYear);
    console.log(this); // undefined
}

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);// point to window object, because arrow funciton doesn't have it own "this" object
}

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);// point to Jonas object
    },
};

jonas.calcAge();


console.log(me);// undefined
console.log(job);// Cannot access 'job' before initialization
console.log(year);// Cannot access 'job' before initialization


/* ======================================================== */

var firstName = 'Matilda';

const jonas_1 = {
    firstName: 'Jonas',
    year: 1991,
    // error example
    // calcAge: function(){
    //     console.log(this);
    //     console.log(2037 - this.year);

    //     const isMillenial = function(){
    //         console.log(this.year >= 1981 && this.year <= 1996);
    //     }
    //     isMillenial();
    // },

    // solution 1
    // calcAge: function(){
    //     console.log(this);
    //     console.log(2037 - this.year);
    //     const self = this;
    //     const isMillenial = function(){
    //         console.log(self.year >= 1981 && self.year <= 1996);
    //     }
    //     isMillenial();
    // },

    // solution 2
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
        // arrow function uses 'this' keyword from parent function
        const isMillenial = () => {
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};

jonas_1.greet(); // point to Window, print -> Hey Matilda
jonas_1.calcAge(); // error msg: Cannot read property 'year' of undefined >> function "this" keyword assign as 'undefined'

/* ======================================================== */

// arguments keyword
const addExpr_1 = function(a, b){
    console.log(arguments);
    return a + b;
};
addExpr(2, 5); 
addExpr(2, 5, 8 ,12); // extra arguments will print out

var addArrow_1 = (a, b) => {
    console.log(arguments);
    return a + b;
}
// arrow function doesn't have argument keword
addArrow_1(2, 5, 8); // error: arguments is not defind


/* ======================================================== */

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Function
console.log(addDecl(2,3)); // no error, able to call function before it delcared
console.log(addExpr(2, 3));//  Cannot access 'addExpr' before initialization
console.log(addArrow(2, 3));//  Cannot access 'addArrow' before initialization


function addDecl(a, b){
    return a+b;
}
const addExpr = function(a, b){
    return a+b;
}

const addArrow = (a, b) => a + b;




function calcAge(birthYear){
    const age = 2037 - birthYear;
    console.log(firstName);
    
    function printAge(){
        const output = `You are ${age}, born in ${birthYear}`;
        console.logt(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const str = `oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            }
        }
        // console.log(str); >> error
        
        // var declare ignore block scope
        console.log(millenial);
    }

    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);


/* ======================================================== */


const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    familiy: ['Alice', 'Bob'],
};

const jessicaPointer = jessica; // two variable with same reference which point to object

const jessicaCopy = {...jessica}; // shallow copy

jessicaCopy.lastName = 'Davis'; 

jessicaCopy.familiy.push('Mary'); // not deepy copy, since nest object sill shallow copy
jessicaCopy.familiy.push('John');

console.log('Before: ', jessica);
console.log('After: ', jessicaCopy);

// Deep Copy
const jessicaClone = structuredClone(jessica);
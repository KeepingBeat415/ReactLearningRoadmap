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
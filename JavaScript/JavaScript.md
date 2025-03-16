### Values and Variables

- store function in the Object

```javascript
const user = {
  name: 'Max',
  age: 34,
  greet() {
    console.log('Hello!');
    console.log(this.name); //access object property with this. keyword
  },
};
```

- class

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hi');
  }
}

const userOne = new User('Max', 43);
```

- Arrays

```javascript
const hobbies = ["Sports","Cooking","Reading"];
hobbies.push("Workig");

// findIndex method accepts function as parameter
const index = hobbies.findIndex((item) => {
    return item === 'Sports';
})

const index = hobbies.findIndex((item) item === 'Sports');

// map method returns new Array
const editedHobbies = hobbies.map((item) => item + "!");

// Destructuring >> it descturcts the right side of object, then assign to the left side
// same work as
// const userNameData = ["Max", "Schwarzmuller"];
// const firstName = userNameData[0];
const [firstName, lastName] = ["Max", "Schwarzmuller"];

const {name: userName, age} = {
    name: "Max",
    age: 34
};
console.log(userName); // Max
console.log(age); // 34

// destructed to "pull out" the object properties and make themm available as locally scoped variables
function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);

// The spread operator >> merge two Arrays into new Array
const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...newHobbies];

// merge into Object
const extendedUser = {
    isAdmin: true,
    ...user
};
```

- Using Functions as Values

```javascript
function greeter(greetFu) {
  greetFn(); // execute the passing function
}

greeter(() => console.log('hi'));
```

### The Switch Statement

```javascript
const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    break;
  case 'Tuesday':
    console.log('Have a fun');
    break;
  default:
    console.log('Not a valid day');
}
```

### The Ternary Operator

```JavaScript
const age = 23;

age > 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
```

### Destructuring Arrays

```JavaScript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // order: function (starterIndex, mainIndex){
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // ES6 enhanced object literals
    order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function(obj){
  //   console.log(obj);
  // }
  // with specify parameter name, and default value
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
  console.log(
    `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  );
},
 orderPasta: function(ing1, ing2, ing3){
  console.log(`Here is your declincious pasta with ${ing1}, ${ing2} and ${ing3}`);
 },
 orderPizza: function(mainIngredient, ...otherIngredients){
  console.log(mainIngredient);
  console.log(otherIngredients);
 }
};

const arr = [2, 3, 4];
const [x, y, z] = arr; // destructuring arrays

const [first, ,second] = restaurant.categories; // skip second item
let [second, first] = [first, second]; // swap item with destructuring arrays

restaurant.order(2, 0);

// Default values
const [p, q, r] = [8, 9];
console.log(r); // undefined

const [p=1, q=1, r=1] = [8, 9]; // assign to default value

// destructuring object
const {name, openingHours, categories} = restaurant;

// assign to with new variable name
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

// assing to default value
const { menu = [], starterMenu: starters = []} = restaurant;

// Mutating variables
let a = 111;
let b = 999;

const obj = {a: 23, b: 7, c:14};
({a, b} = obj);

// Nested objects with re-name
const { fri: {open: o, close: c},} = openingHours;

restaurant.orderDelivery({
  time: '20:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})
```

### Spread Operator (...)

```javascript
const arr = [7, 8 , 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ..arr];

console.log(...newArr);// print individual elements -> 1 2 7 8 9

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const [menu] = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']; // unpack string to char

const ingredients = ['a', 'b', 'c'];

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {...restaurant, founder: 'Guiseppe'};

```

### Rest Pattern and Parameters

```javascript
//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // => 1 2 [3, 4, 5]

// Functions with rest parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
```

### Short Circuiting (&& and ||)

```javascript
// use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas'); // -> 3 , if the first value is not "FALSE" value, it returns first value immediataly
console.log('' || 'Jonas'); // -> Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(7 && 'Jonas'); // if all element with trueth value, then it returns last element, also return first false value
```

### The Nullish Coalescing Operator

```javascript
let num;
// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = num ?? 10; // return 10
```

### Logical Assignment Operator

```javascript
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuests = rest1.numGuests || 10;
// same as below
rest1.numGuests ||= 10;
//The Nullish Coalescing Operator
rest1.numGuests ??= 10;

rest1.owner &&= '<ANONYMOUS>';
```

### Challenge

```javascript
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Create one player array for each team (variables 'players1' and 'players2')
const [player1, player2] = game.players;

//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = player1;

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
const [allPlayers] = [...player1, ...player2];

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const [playersFinal] = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;

//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoal = function (...players) {
  console.log(`${players.length} goals were scored`);

  for (let i = 0; i < player.length; i++) {
    console.log(player[i]);
  }
};

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 is more likely to win');

///////////////////////////////////////
// Coding Challenge #2

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (let i = 0; i < game.scored.lenght; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) sum += odd;
console.log(sum / odds.length);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
for (const [key, value] of Object.entries(game.odds)) {
  const str = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${str}: ${value}`);
  // switch(key){
  //   case 'team1':
  //     console.log(`Odd of victorey ${game.team1}: ${value}`);
  //     break;
  //   case 'x':
  //     console.log(`Odd of draw: ${value}`);
  //     break;
  //   case 'team2':
  //     console.log(`Odd of victorey ${game.team2}: ${value}`);
  //     break;
  // }
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
const scorers = {};
for (const score of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
```

### Looping Arrays: The for-of Loop

```javascript
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries(){
  console.log(item); // [0, 'Focaccia] with index
})
//destructuring
for (const [i, el] of menu.entries(){
  console.log(`${i} - ${el}`); // [0, 'Focaccia] with index
})

```

### Optional Chaining

```javascript
// if a certain property does not exist, then undefined is returned immediately
// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
```

### Looping Objects: Object Keys, Values, and Entries

```javascript
// WITH object keys
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
// WITH object values
const values = Object.values(openingHours);

// Entries = Key + Object
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}`);
}
```

### Sets

```javascript
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

ordersSet.size;
ordersSet.has('Pizza'); // return true and false
ordersSet.delete('Risotto');
ordersSet.clear();

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
const staffUnique = [...new Set(staff)];

const italianFoods = new Set(['pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil']);

const mexicanFoods = new Set(['tortillas', 'beans', 'rice', 'tomatoes', 'avocado', 'garlic']);

// intersection
const commonFoods = italianFoods.intersection(mexicanFoods);

// union
const italianMexicanFusion = italianFoods.union(mexicanFoods);
```

### Maps

```javascript
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy'); // can with different data type
console.log(rest.set(2, 'Lisbon, Portugl')); // return current set

// chain with set
rest.set('open', 11).set('close', 23);

console.log(rest.get('open')); // data type specific

rest.has('categories');
rest.delete(2);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// convert object as Map
const hoursMap = new Map(Object.entries(openingHours));

const time = [...gameEvents.keys()].pop();
```

### Strings

```javascript
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4, 7)); // Air
console.log(airline.slice(-2)); // negative start from end

airline.toLowerCase();
'joins'.toUpperCase();

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

// replacing
const priceGB = '288,98$';
const priceUS = priceGB.replace('$', '&');

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320'));

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const word of names) {
    n[0].toUpperCase() + n.slice(1).toLowerCase();
  }
  console.log(namesUpper.join(' '));
};

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+')); // +++++++Go to gate 23+++++

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// Repeat
const message2 = 'Bad weather... All Departure Delayed...';
console.log(message2.repeat(5));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (let i = 0; i < rows.length; i++) {
    let str = '';
    const words = rows[i].trim().split('_');
    for (let j = 0; j < words.length; j++) {
      if (j === 0) {
        str += words[j].toLowerCase();
      } else {
        str += words[j][0].toUpperCase() + words[j].slice(1).toLowerCase();
      }
      str.padEnd(20, ' ');
      str += '='.repeat(i);
    }
    console.log(str);
  }
});
```

### Functions

```javascript
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

// skip parameters
createBooking('LH123', undefined, 1000);

// Passing Arguments: value vs. reference
const fligth = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 12345,
};

const checkIn = function (flightNum, passenger) {
  fligthNum = 'LH999'; // try to modify passing value
  passenger.name = 'Mr.' + passenger.name;
};

checkIn(flight, jonas);
console.log(flight); // LH234
console.log(jonas); // Mr. Jonas Schmedtmann, as it only pass the referene for this object

/*
Funtions just another type of objects in JavaScript

First-Class Functions
- JavaScript treats functions as first-class citizens
- This means that functions are simply values
- Functions are just another "type" of object

Higher-Order Functions
- A function that receives another function as an argument, that returns a new functions, or both
- This is only possible because of first-class functions

1. Function that receives another function
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);

"addEventListener" >> Higher-order function
"greet" >> Callbackfunction, because it will be call late by higher-order functions

2. Function that returns new function
function count() {
  let counter = 0;
  return function(){
    counter++;
  };
}

"count()" >> Higher-order function
"function()" >> returned function

*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  return fn(str);
};

transformer('JavaScript is the best!', upperFirstWord);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greet_arrow = greeting => name => console.log(`${greeting}${name}`);

const greeterHey = greet('Hey');
// greeterHey assigned as function
greeterHey('Jonas'); // Hey Jonas
greet('Hello')('Jonas'); // Hello Jonas

const lufthansa = {
  airline: "Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name){
    console.log(`${name} booked a seat on ${this.airline} fight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  }
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa); // [{flight: 'LH239', name: 'Jonas Schmedtmann'}, {flight: 'LH635', name:'John Smith'}]

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  booking: []
};

const book = lufthansa.book; // copy of the object function, but can't copy with "this"
// call method, with object point
book.call(eurowings, 23, 'Sarah Williams');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
}

// apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, fightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method, it returns a new function where this keyword is bound
const bookEW = book.bind(eurowings); // bind book function to eurowings
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);// bind function with preset parameter;
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
  console.log(this);

  this.planes++;
  console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // "this" in the function "lufthansa" point to the button

// Partial application
const addTax = (rate, value) => value + value*rate;

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

const addTaxRate = function(rate){
  return function(value){
    return value + value*rate;
  }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));//123

//
const runOnce = function(){
  console.log('This will never run again');
}
runOnce();

// immediately invoked function expressions
(function(){
  console.log('This will never run again');
})();

// Closures
// A function has acess to the variable environment(VE) of the execution context in which it was created
// Closure: VE attached to the function, exactly as it was at the time and place the function was created
// A function does not lose connection to variables that existed at the function's birthplace
// A closure is the closed-over variable environment of the execution context in vhich a function was created, even after that exection context is gone.
// A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time
// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place
const secureBooking = function(){
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers

//
let f;

const g = function(){
  const a = 23;
  f = function(){
    console.log(a * 2);
  }
}

const h = function(){
  const b = 777;
  f = function(){
    console.log(b * 2);
  }
}

g();
f();

//re-assigning f function
h();
f();

//Example 2
const boardPassengers = function(n, wait){
  const perGroup = n / 3;

  setTimeout(() => {
     console.log(`We are now boarding all ${n} passengers`);
     console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait}`)
}

```

### Object-Oriented Programming

Object man contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block.

- 1. Abstraction: ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.

- 2. Encapsulation: keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API)

- 3. Inheritance: Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationship.

- 4. Polymorphism: a child class can overwrite a method it inherited from a parent class.

Prototype -> Object

- Objects are linked to a prototype object
- Prototypal inheritance: the prototype contains methods (behavior) that are accessible to all objects linked to that prototype
- Behavior is delegated to the linked prototype object

```JavaScript

// constructor
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // don't create method in the constructor, heavy performance
  // this.calcAge = function(){
  //   console.log(2037 0 this.birthYear);
  // }
}

// class static method
Person.hey = function(){
  console.log('Hey there');
}

const jonas = new Person('Jonas', 1991);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(jonas instanceof Person); // true

// Prototypes
// every object that's created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property

// create Method link to Person Object
Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
}

// create variable in the object prototype
Person.prototype.species = 'Homo Sapiens';
// all instance under Person Class will inheritance 'species'

const arr = [3, 6, 4];
console.log(arr.__proto__);

// add custom Array method into Array.prototype, which can be used by all Arrays
Array.prototype.unique = function(){
  return [...new Set(this)];
}

// Challenge 1
//1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
const Car = function(make, speed){
  this.make = make;
  this.speed = speed;
}

//2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

Car.prototype.accelerate = function(){
  this.speed += 10;
}

//3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`Current car speed is ${this.speed}`);
}

//4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

//DATA CAR 1: 'BMW' going at 120 km/h
//DATA CAR 2: 'Mercedes' going at 95 km/h

// ES6 Class

// class expression
// const PersonCl = class{

// }

// class declaration
class PersonCl{
  constructor(firstName, birthYear){
    // convention with underscore
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge(){
    console.log(2037 - this.birthYear);
  }

  get age(){
    return 2037 - this.birthYear;
  }

  set firstName(firstName){
    this._firstName = firstName;
  }

  get firstName(){
    return this._firstName;
  }

  // static method
  static hey(){
    console.log('Hey there');
  }
}

// Setters and Getters

// with Object
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(mov){
    this.movements.push(mov);
  }
}

console.log(account.latest);

account.latest = 50;


```

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
const add = function(...numbers){
  let sum = 0;
  for(let i=0; i<numbers.length; i++) sum += numbers[i];
  return sum;
}

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
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

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
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
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
const {odds:{team1, x: draw, team2}} = game;

//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoal = function(...players){
  console.log(`${players.length} goals were scored`);

  for(let i=0; i<player.length; i++){
    console.log(player[i]);
  }
}

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 is more likely to win');

///////////////////////////////////////
// Coding Challenge #2

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for(let i=0; i<game.scored.lenght; i++){
  console.log(`Goal ${i+1}: ${game.scored[i]}`);
}
for(const [i, player] of game.scored.entries()){
  console.log(`Goal ${i+1}: ${player}`);
}

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let sum = 0;
for(const odd of odds) sum += odd;
console.log(sum/odds.length)

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
for(const [key, value] of Object.entries(game.odds)){
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
for (const score of game.scored){
  scorers[player] ? scorers[player] ++ : (scorers[player] = 1);
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
for (const day of Object.keys(openingHours)){
  console.log(day);
}
// WITH object values
const values = Object.values(openingHours);

// Entries = Key + Object
const entries = Object.entries(openingHours);

for (const [key, {open, close}] of entries){
  console.log(`On ${key}`);
}

```

### Sets
```javascript
const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza']);

ordersSet.size;
ordersSet.has('Pizza'); // return true and false
ordersSet.delete('Risotto');
ordersSet.clear();

```

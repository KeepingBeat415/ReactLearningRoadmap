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
  order: function (starterIndex, mainIndex){
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

```
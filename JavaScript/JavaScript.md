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

```javascript
const age = 23;

age > 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
```

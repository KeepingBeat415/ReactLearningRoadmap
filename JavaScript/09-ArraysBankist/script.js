'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${move}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter((mov) => mov > 0).reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}$`;

  const out = acc.movements.filter((mov) => mov < 0).reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}$`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposits) => (deposits * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}$`;
};

// calcDisplaySummary(account1.movements);

// create new variable with username
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map((ele) => ele.at(0))
      .join('');
  });
};

createUsernames(accounts); // stw

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  accounts.find((acc) => acc.username === inputCloseUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputCloseUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

const updateUI = function (acc) {
  // Display movements, balance, summary
  displayMovements(currentAccount.movements);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find((acc) => acc.username === inputTransferTo.value);
  //console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance > amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';

});

btnLoan.addEventListener('click', function(){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // Add movement
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }

});
let sorted =false;
btnSort.addEventListener('click', function(){
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;

})



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method
arr.slice(2); //  ['c', 'd', 'e']
arr.slice(-1); // ['d', 'e']

// splice method
arr.splice(2); // ['c', 'd', 'e'], delete ele and return
arr.splice(-1);

// reverse
const arr2 = ['j', 'i', 'h'];
arr2.reverse(); // mutate original arr ['h', 'i', 'j']

// concat
const letters = arr.concat(arr2); // doesn't mutate original method
[...arr, ...arr2];

// join
letters.join('-'); // a - b - c - d - e

/* ========================= */
const arr3 = [23, 11, 64];
arr3.at(0);
arr3.at(-1);

'jonas'.at(0);

// ================================== //
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
// as the forEach method calls this callback function in each iteration, it will pass in the current element
movements2.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
//(return element, index, the entry array)
movements2.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// forEach for Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});

// forEach for Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
currenciesUnique.forEach((value, key, set) => {
  console.log(`${key} : ${value}`);
});

// map method return new array
const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements3.map(function (mov) {
  return mov * eurToUsd;
});

const movementsDescriptions = movements3.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

const deposits = movements3.filter((mov) => mov > 0);

const withdrawals = movements3.filter((mov) => mov < 0);

const balance = movements3.reduce(function (sum, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

// Maximum value
const maxValue = movements3.reduce((acc, curr) => (acc = curr > acc ? curr : acc), movements3[0]);

// Challenge
const data_1 = [5, 2, 4, 1, 15, 8, 3];

const result_1 = data_1.map((ele) => (ele <= 2 ? 2 * ele : 16 + ele * 4));
const result_2 = result_1.filter((ele) => ele >= 18);
const result_3 = result_2.reduce((acc, cur, i, arr) => {
  return acc + cur / arr.length;
}, 0);

const totalDepositsUSD = movements3
  .filter((mov) => mov > 0)
  /*.map((mov, i, arr) => {
      console.log(arr);
      return mov * eurToUsd;  
  })
  */
  .map((mov) => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur);

// Find Method
movements3.find((mov) => mov < 0); // return first found item

// Some Method, if contains any value fit call back function
const anyDeposits = movements3.some(mov => mov > 1500); 

// Every Method, if every element meet the condition
movements3.every(mov => mov >0);

// Separate Callback
const deposit = mov => mov > 0;
movements3.some(deposit);
movements3.every(deposit);

// Flat Method
const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
arr1.flat(); // [1, 2, 3, 4, 5, 6, 7, 8]

// go to 2 level deep
const arr_2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
arr1.flat(2); // [1, 2, 3, 4, 5, 6, 7, 8]

const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);

// flatMap >> only 1 level deep
const overallBalance2 = accounts.flatmap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);

// Challenge 4

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// >> 1. Store the the average weight of a "Husky" in a variable "huskyWeight"

const huskyWeight = breeds.find(ele => ele.breed === 'Husky').averageWeight;
// >> 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
const dogBothActivities_1 = breeds.map(ele => {
  ele.activities.some(activity => activity === 'running' || activity === 'fetch')
});
const dogBothActivities_2 = breeds.find( breed => breed.activities.includes('fetch') && breed.activities.includes('running'));
// >> 3. Create an array "allActivities" of all the activities of all the dog breeds
const allActivities = breeds.flatMap(breed => breed.activities);
// >> 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
const uniqueActivities = [...new Set(breeds.flatMap(breed => breed.activities))];
//5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
const swimmingAdjacent = [...new Set(breeds.filter(breed => breed.activities.includes('swimming')).flatMap(breed => breed.activities))];
//6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
breeds.every(ele => ele.averageWeight > 10);
//7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
breeds.some(breed => breed.activities.length >= 3);
//BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.
Math.max(breeds.filter(breed => breed.activities.includes('fetch')).map( breed => breed.averageWeight));

// Sorting Arrays
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
owners.sort(); // mutate original array

// return < 0, then A, B (keep order)
// return > 0, then B, A (switch order)
movements3.sort((a, b) => {
  if(a > b) {
    return 1;
  }
  if(b > a){
    return -1;
  }
});

// Array Grouping
const groupedMovements = Object.groupBy(movements3, movement => movement > 0 ? 'deposits' : 'withdrawals');

// Creating and Filling Arrays
const x = new Array(7);
// fill( filled_num, start_idx, end_idx)
x.fill(1);// [1, 1, 1, 1, 1, 1, 1,]

// Array.from
const z = Array.from({length: 7}, (cur, i) => i + 1); // [1, 2, ,3, 4, 5, 6, 7]

// 
movements3[1] = 2000;
const newMovements3 = movements3.with(1, 2000); // create new array with modify value

// Array Methods Practice
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum+cur, 0);

//
const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 1000).length;

const numDeposits1000_2 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 1000).reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); 

//
const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
  // cur > 0 ? sums.deposit += cur : sums.withdrawals += cur;
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
  return sums;
}, {deposits: 0, withdrawals:0});

// Challenge 5

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).

dogs.forEach(dog => dog.recFood = dog.weight ** 0.75 * 28);

//2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const dogSarah = dogs.filter(dog => dog.owners.includes('Sarah'));

//3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).

const ownersTooMuch = [];
const ownersTooLittle = [];

dogs.forEach(dog => dog.recFood > dog.curFood ? ownersTooMuch.push(dogs.owners) : ownersTooLittle.push(dogs.owners));

ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);

//4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

//5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)

dogs.some(dog => dog.curFood === dog.recFood);

//6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)

dogs.every(dog => dog.curFood > dog.recFood*0.9 && dog.curFood < dog.recFood*1.1);

//7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

//8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.

const dogsGroupedByPortion = Object.groupBy(dog, dog => {
  if(dog.curFood > dog.recFood){
    return 'too-much';
  }else if(dog.curFood < dog.recFood){
    return 'too-little';
  }else{
    return 'exact';
  }
})

//9. Group the dogs by the number of owners they have
const dogsGroupedByOwner = Object.groupBy(dog, dog => {
  return dog.owners.length;
})

//10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

const dogsSorted = dogs.toSorted((a, b) => a.recFood - b.recFood);
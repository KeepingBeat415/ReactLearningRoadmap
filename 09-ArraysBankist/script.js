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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
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

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements.filter((mov) => mov > 0).reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}$`;

  const out = movements.filter((mov) => mov < 0).reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${out}$`;
};

calcDisplaySummary(account1.movements);

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

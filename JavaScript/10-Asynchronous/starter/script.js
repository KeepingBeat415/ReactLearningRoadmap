'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://countries-api-836d.onrender.com/countries/

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// old school way
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/${country}`
  );
  request.send();

  request.addEventListener('load', function () {
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);

    const html = `
            <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>${(
                  +data.population / 1000000
                ).toFixed(1)}</span>POP people</p>
                <p class="country__row"><span>🗣️</span>LANG</p>
                <p class="country__row"><span>💰</span>CUR</p>
            </div>
            </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.computedStyleMap.opacity = 1;
  });
};

getCountryData('germany');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>${(+data.population / 1000000).toFixed(
          1
        )}</span>POP people</p>
        <p class="country__row"><span>🗣️</span>LANG</p>
        <p class="country__row"><span>💰</span>CUR</p>
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.computedStyleMap.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/${country}`
  );
  request.send();

  request.addEventListener('load', function () {
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);

    // Get neighbour country
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://countries-api-836d.onrender.com/alpha/${neighbour}`
    );
    request.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');

/*
Promise: An object that is used as a placeholder for the future result of an asynchronous operation.

>> less formal
Promise: a container for a future value.

*/

const renderError = function (msg) {
  countriesContainer.insertAdjacentElement('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// promise
const request = fetch(
  'https://countries-api-836d.onrender.com/countries/portugal'
);

const getCountryDataPro = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/${country}`)
    .then(
      response => {
        if (!response.ok) {
          throw new Error(`Country not found ${response.status}`);
        }
        return response.json();
      } //parse response to JSON format
    )
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0]?.borders[0];

      if (!neighbour) return;

      // country 2
      return fetch(
        `https://countries-api-836d.onrender.com/alpha/${neighbour}`
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      alert(err);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {});
};

btn.addEventListener('click', function () {
  getCountryDataPro('portugal');
});

const getJSON = function (url, errorMsg = 'Something went wrong') {
  fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryDataFun = function (country) {
  getJSON(
    `https://countries-api-836d.onrender.com/countries/${country}`,
    'Country not found'
  )
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0]?.borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // country 2
      return getJSON(
        `https://countries-api-836d.onrender.com/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      alert(err);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {});
};

// url https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => {
      console.error(`${err.message}`);
    });
};


// Example Promise flow
console.log('Test Start'); // 1
setTimeout(() => console.log('0 sec timer'), 0); // 5 --> call back
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3 --> mirco task
Promise.resolve('Resolved promise 1').then(res => {
    for (let i=0; i < 10000000; i++){}
    console.log(res);
}); // 4 --> mirco task
console.log('Test End'); // 2 

// Building a Simple Promise
const lotteryPromise = new Promise(function(resolve, reject){
    if(Math.random() >= 0.5){
        resolve('You WIN');
    }else{
        reject(new Error('You LOST'));
    }
});

lotteryPromise.then(res => console.log((res))).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000);
    })
};

wait(2).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(() => console.log('I waited for 1 second'));

Promise.resolve('ab').then(x => console.log(x));// resolve immediately

// convert call back base API to promise API
navigator.geolocation.getCurrentPosition(
    position => console.log(position), 
    err => console.error(err)
);

const getPosition = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(
            position => resolve(position), 
            err => reject(err)
        )
    })
}

getPosition().then(pos => console.log(pos));

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
    return new Promise(function(reslove, reject){
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function(){
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function(){
            reject(new Error('image not found'));
        })
    })
};

let curentImg;

createImage('img/img-1.jpg').then(img => {
    console.log('Image 1 loaded');
    return wait(2);
}).then(() => {
    curentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
}).then(img => {
    console.log('Image 2 loaded');
    return wait(2);
}).then(() => {
    curentImg.style.display = 'none';

})
.catch(err => console.error(err));
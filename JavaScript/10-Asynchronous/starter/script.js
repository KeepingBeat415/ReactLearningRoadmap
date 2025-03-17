'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://countries-api-836d.onrender.com/countries/

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// old school way
const getCountryData = function(country){
    const request = new XMLHttpRequest();
    request.open('GET',`https://countries-api-836d.onrender.com/countries/${country}`);
    request.send();

    request.addEventListener('load', function(){
        console.log(this.responseText);
        const data = JSON.parse(this.responseText);
        console.log(data);

        const html = `
            <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>${(+data.population/1000000).toFixed(1)}</span>POP people</p>
                <p class="country__row"><span>🗣️</span>LANG</p>
                <p class="country__row"><span>💰</span>CUR</p>
            </div>
            </article>`;
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.computedStyleMap.opacity = 1;    
    });
};

getCountryData('germany');

const renderCountry = function(data, className = ''){
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>${(+data.population/1000000).toFixed(1)}</span>POP people</p>
        <p class="country__row"><span>🗣️</span>LANG</p>
        <p class="country__row"><span>💰</span>CUR</p>
    </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.computedStyleMap.opacity = 1;   
}

const getCountryAndNeighbour = function(country){
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET',`https://countries-api-836d.onrender.com/countries/${country}`);
    request.send();

    request.addEventListener('load', function(){
        console.log(this.responseText);
        const data = JSON.parse(this.responseText);
        console.log(data);

        renderCountry(data);

        // Get neighbour country
        const neighbour = data.borders?.[0];

        if(!neighbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET',`https://countries-api-836d.onrender.com/alpha/${neighbour}`);
        request.send();

        request2.addEventListener('load', function(){
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        })

    });
};

getCountryAndNeighbour('usa');

/*
Promise: An object that is used as a placeholder for the future result of an asynchronous operation.

>> less formal
Promise: a container for a future value.

*/

// promise
const request = fetch('https://countries-api-836d.onrender.com/countries/portugal');

const getCountryDataPro = function (country){
    fetch(`https://countries-api-836d.onrender.com/countries/${country}`).then(function(response){
        console.log(response);
    })
}
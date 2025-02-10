'use strict';

// console.log(document.querySelector('.message').textContent);

// // Dom manipulation
// // document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
});


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    //document.querySelector('.message').textContent = '';

    if(!guess){
        //document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');
    }else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        //document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }else{
            if(score > 1 ){
                // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
                displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                displayMessage('You lost the game!');
                // document.querySelector('.message').textContent = 'You lost the game!';
            }

    }
    

})
import catOrDog from './cat-or-dog.js';

const flipForm = document.getElementById('flip-form');
const image = document.getElementById('animal-image');
const status = document.getElementById('status');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
let wins = 0;
let lose = 0;


flipForm.addEventListener('submit', function(event){
    event.preventDefault();

    
    const randomNumber = Math.random();
    let animal = catOrDog(randomNumber);
    
    let imageSource = '';
    
    if(animal === 'cat') {
        imageSource = '../assets/heydaddy.jpg';
    } else {
        imageSource = '../assets/nicdog.jpg';
    }
    
    image.src = imageSource;
    image.classList.remove('hidden');
    
    const userChoice = flipForm.elements.animal.value;
    if(userChoice === animal) {
        status.textContent = 'Winner Chicken Dinner';
        wins++;
        winCount.textContent = wins;
    } else {
        status.textContent = 'Loser Loser Loser Loser';
        lose++;
        lossCount.textContent = lose;
    }


});

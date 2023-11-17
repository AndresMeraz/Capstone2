"use strict";

// make a function using the Math.randomize method to choose a number between 0-47
// have a function go through a window onload which will have a loop go through the mountain array and go through each image. then have another loop go through numbers 1- mountainArray images length.

function randomParkIndexMaker() {
  return Math.floor(Math.random() * nationalParksArray.length);
}

function randomMountainIndexMaker() {
    return Math.floor(Math.random() * mountainsArray.length);
}

function mountainCard(name, desc) {
return `<div class="card" >
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${desc}.</p>
    </div>
    </div>`;
}

function parkCard(name, address) {
    return `<div class="card">
    <div class="card-body">
              <h5 class="card-title">${name}</h5><br>
              <p class="card-text">Address: ${address}.</p>              
          </div>
        </div>`;
}
    
    let getRandomData = () => {
        let cards = '';
        for (let i = 0; i < 6; i++) {
            let randomNumber = Math.random();
            if(randomNumber < 0.5){
                let randomMountainIndex = randomMountainIndexMaker();
                cards += mountainCard(mountainsArray[randomMountainIndex].name,mountainsArray[randomMountainIndex].desc);

            }else{
            let randomParkIndex = randomParkIndexMaker();
            cards += parkCard(nationalParksArray[randomParkIndex].LocationName, nationalParksArray[randomParkIndex].Address)
            }
        }
        console.log(cards);
  document.getElementById('randomcard').innerHTML = cards;
};

window.onload = getRandomData;
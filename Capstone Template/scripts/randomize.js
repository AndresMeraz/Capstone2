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
    // <img class="mountain-photo" src="images/${img}">
    
    let getRandomData = () => {
        let cards = '';
        for (let i = 0; i < 6; i++) {
            let randomMountainIndex = randomMountainIndexMaker();
            cards+= mountainCard(mountainsArray[randomMountainIndex].name,mountainsArray[randomMountainIndex].desc);
        }
        console.log(cards);
  document.getElementById('randomcard').innerHTML = cards;
};

window.onload = getRandomData;

// window.addEventListener("load", getRandomUserData);
// getUserBtn.addEventListener("click", getRandomUserData);

//   imgContainer.innerHTML = `<img src=${mtnData.img}>`;
//   details.innerHTML = `
//       <h2>${parkData.LocationName}</h2>
//       <h3>${mtnData.name}</h3>`;
//   let randomColor =
//     "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
//   document.documentElement.style.setProperty("--theme-color", randomColor);
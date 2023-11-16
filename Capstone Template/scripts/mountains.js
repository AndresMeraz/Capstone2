"use strict"
loadData();
const submitButton = document.getElementById("mtnBtn"); // connects the button with the mtnBtn ID to a variable that does not change

submitButton.addEventListener('click' , mountainTemplate) // "listens" for a click from the submit button variable and runs mountainTemplate after it hears the click

function mountainTemplate() {
  let mtnValue = document.getElementById('mountain').value; // grabs the value from the dropdown and puts it into mtnValue
  let matchingInfo = mountainsArray.find(mountainName => mountainName.name == mtnValue) // searches the mountain array for the name that is equal to the value selected by the dropdown
  // let mySunrise = getSunsetForMountain(`${mountainsArray.coords.lat},${mountainsArray.coords.lng}`);

    //Mountain info displayed in a message value
  let message =`<div class="card width:18rem" >
      <div class="card-body">
            <img class="mountain-photo" src="images/${matchingInfo.img}">
            <h5 class="card-title">${matchingInfo.name}</h5>
            <p class="card-text"><strong>Elevation:</strong>${matchingInfo.elevation}   <strong>Effort:</strong>${matchingInfo.effort}.</p>
            <p class="card-text">${matchingInfo.desc}.</p>
        </div>
      </div>`;
    
    document.getElementById("mountains").innerHTML = message //displays message value in "mountains" div
  }
  // <strong>Coordinates:</strong> lat: ${matchingInfo.coords.lat} lng: ${matchingInfo.coords.lng}
  //  <strong>Sunrise:</strong> ${mySunrise}

// `<h1 class="app-title"> ${mountainsArray.length} Mountains to climb</h1>
//   ${mountainsArray.map(mountainTemplate).join("")}
//   <p class="footer">These ${
//     mountainsArray.length
//   } mountants were added recently. Check back soon for updates.</p>
// `;

// async function getSunsetForMountain(lat, lng) {
//   let response = await fetch(
//     `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
//   );
//   let data = await response.json();
//   return data;
// }

// function loadData() loads all the mountain data from the array into the dropdown menu (running loadData() at the top of the page so it loads first)
function loadData() {
  var down = document.getElementById("mountain");
  for (let i = 0; i < mountainsArray.length; i++) {
    var optn = mountainsArray[i];
    var el = document.createElement("option");
    el.textContent = optn.name;
    el.value = optn.name;
    down.appendChild(el);
  }
}

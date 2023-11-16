"use strict";

window.onload = () => {
  //
  const states = document.getElementById("states");
  const parktype = document.getElementById("parktype");
  addLocationsToDropdown();
  addParkTypeToDropdown();
};

function addLocationsToDropdown() {
  // Get the dropdown element by its ID

  // Use forEach to iterate over the array
  locationsArray.forEach(function (location) {
    // Create a new option element
    let option = document.createElement("option");

    // Set the value and text content for the new option
    option.value = location;
    option.textContent = location;

    // Add the new option to the dropdown
    states.appendChild(option);
  });
}

function addParkTypeToDropdown() {
  // Get the dropdown element by its ID
const parkType = document.getElementById("parktype");  //grabs value from ID
for (let i = 0; i < parkTypesArray.length; i++) {   //for loop cycles through the array
  const parkTypeOptions = new Option (parkTypesArray[i], parkTypesArray[i]);   // creates a new option in the dropdown for each array property
  parkType.appendChild(parkTypeOptions); //adding each option to the dropdown
}
}
// Declaring variables



//grab the value from the state dropdown and match it with the value from the array

function grabStateFromArray() {
  let stateName = document.getElementById("states").value; 
  let stateInfo = nationalParksArray.filter(state => state.State == stateName)
  let message = ""
  for (let i = 0; i < stateInfo.length; i++) {
    message += 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
              <h5 class="card-title">${stateInfo[i].LocationName}</h5>
              <p class="card-text">${stateInfo[i].City}, ${stateInfo[i].State}.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
  }
  //displays the cards
  document.getElementById("myParks").innerHTML = message
}

function grabTypeFromArray() {
  let parkType = document.getElementById("parktype").value;
  let typeInfo = nationalParksArray.filter(type => type.LocationName.includes(parkType))
  let message = ""
  for (let i = 0; i < typeInfo.length; i++) {
    message += 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
              <h5 class="card-title">${typeInfo[i].LocationName}</h5>
              <p class="card-text">${typeInfo[i].City}, ${typeInfo[i].State}.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
}
document.getElementById("myParks").innerHTML = message
}


function grabBothFromArray() {
  let stateName = document.getElementById("states").value;
  let parkType = document.getElementById("parktype").value;
  let bothInfo = nationalParksArray.filter(both => both.LocationName.includes(parkType) && both.State == stateName);
  let message = ""
  for (let i = 0; i < bothInfo.length; i++) {
    message += 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
              <h5 class="card-title">${bothInfo[i].LocationName}</h5>
              <p class="card-text">${bothInfo[i].City}, ${bothInfo[i].State}.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
}
document.getElementById("myParks").innerHTML = message
}


function chooseStateOrType() {
  let stateName = document.getElementById("states").value;
  let parkType = document.getElementById("parktype").value;
  console.log(typeof parkType); // used typeof to find out if stateName and parkType Variables were strings or not
   if (stateName && parkType == "null") {
    grabStateFromArray()
  }
  else if (parkType && stateName == "null") {
    grabTypeFromArray()
  }
  else if (stateName && parkType) {
    grabBothFromArray()
  }
  else {
    alert("please choose")
  }
}
"use strict";

window.onload = () => {
  //
  const states = document.getElementById("states");
  const parktype = document.getElementById("parktype");
  addLocationsToDropdown();
  addNationalParksToDropdown();
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

function addNationalParksToDropdown() {
  // Get the dropdown element by its ID

  // Use forEach to iterate over the array
  nationalParksArray.forEach(function (park) {
    // Create a new option element
    let option = document.createElement("option");

    // Set the value and text content for the new option
    option.value = park.LocationName;
    option.textContent = park.LocationName;

    // Add the new option to the dropdown
    parktype.appendChild(option);
  });
}
// grab the value of a selected item from the dropdown.
function searchLocation() {
  const selectedValue = states.value;
  alert(selectedValue);
}

// Declaring variables


//displaying the cards 
function parkTemplate(park) {
  return `
        <div class="card" style="width: 18rem;">
        <img src="${park.Image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${park.LocationName}</h5>
            <p class="card-text">${park.State}.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`;
}

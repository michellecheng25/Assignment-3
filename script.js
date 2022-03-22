// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {}

// Add a column
function addC() {
  numCols++;
  var table = document.getElementById("grid");

  //create the first row if there are no rows
  if (numRows === 0) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    numRows++;
  }

  //append columns to all tr elements
  var rows = document.querySelectorAll("tr");
  for (let i = 0; i < numRows; i++) {
    var td = document.createElement("td");
    rows[i].appendChild(td);
  }
}

// Remove a row
function removeR() {}

// Remove a column
function removeC() {}

// Set global variable for selected color
function selectColor() {}

// Fill all uncolored cells
function fillU() {}

// Fill all cells
function fillAll() {}

// Clear all cells
function clearAll() {}

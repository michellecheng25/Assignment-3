// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
  //create a tr element
  numRows++;
  var table = document.getElementById("grid");
  if (numCols === 0) {
    numCols++;
  }
  var tr = document.createElement("tr");
  table.appendChild(tr);

  //append td to last tr element
  const lastRow = table.lastChild;
  for (let i = 0; i < numCols; i++) {
    var td = document.createElement("td");
    lastRow.appendChild(td);
  }
}

// Add a column
function addC() {}

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

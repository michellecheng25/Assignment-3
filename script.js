// Declare global variables
let numRows = 0;
let numCols = 0; //cols per row
let colorSelected = document.getElementById("selectedColorId").value;

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
    //call fillU on click
    td.addEventListener(
      "click",
      function () {
        var target = event.target;
        changeColor(target);
      },
      false
    );
    lastRow.appendChild(td);
  }
}

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
    //call fillU on click
    td.addEventListener(
      "click",
      function () {
        var target = event.target;
        changeColor(target);
      },
      false
    );
    rows[i].appendChild(td);
  }
}

//change color function
function changeColor(target) {
  if (colorSelected === "Red") target.style.backgroundColor = "red";
  if (colorSelected === "Blue") target.style.backgroundColor = "blue";
  if (colorSelected === "Green") target.style.backgroundColor = "green";
  if (colorSelected === "Yellow") target.style.backgroundColor = "yellow";
}

// Remove a row
function removeR() {
  if (numRows > 0) {
    numRows--;
    var table = document.getElementById("grid");
    var rows = document.querySelectorAll("tr");
    //remove last row
    table.removeChild(rows[numRows]);
  }
}

// Remove a column
function removeC() {
  if (numCols > 0) {
    numCols--;
    var table = document.getElementById("grid");
    var rows = document.querySelectorAll("tr");

    //delete the last cell from each row
    for (let i = 0; i < numRows; i++) {
      rows[i].deleteCell(numCols);
    }
  }
}

// Set global variable for selected color
function selectColor() {
  colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU() {
  var td = document.querySelectorAll("td");

  for (let i = 0; i < numCols * numRows; i++) {
    if (!td[i].style.backgroundColor) changeColor(td[i]);
  }
}

// Fill all cells
function fillAll() {
  var td = document.querySelectorAll("td");

  for (let i = 0; i < numCols * numRows; i++) {
    changeColor(td[i]);
  }
}

// Clear all cells
function clearAll() {
  numRows = 0;
  numCols = 0;
  var table = document.getElementById("grid");
  table.innerHTML = "";
}

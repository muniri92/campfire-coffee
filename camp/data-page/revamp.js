
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var places = [];
// Object Constructor
function Camp(kiosk, minCust, maxCust, avgCupPerCust, avgLbsPerCust) {
  this.kiosk = kiosk;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCupPerCust = avgCupPerCust;
  this.avgLbsPerCust = avgLbsPerCust;
  this.randomCust = [];
  this.cupsHourly = [];
  this.cupsToPounds = [];
  this.lbsHourly = [];
  this.custDaily = 0;
  this.cupsDaily = 0;
  this.lbsDaily = 0;
  places.push(this);

}

Camp.prototype.generateNumbers = function() {
  for (var j = 0; j < hours.length; j++) {
    this.randomCust[j] = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    parseInt(this.randomCust[j]);
    this.cupsHourly[j] = +(this.randomCust[j] * this.avgCupPerCust).toPrecision(3);
    //parseFloat(this.totalCupsHr[j]);
    this.cupsToPounds[j] = +(this.cupsHourly[j] / 20).toFixed(2);
    this.lbsHourly[j] = +(this.randomCust[j] * this.avgLbsPerCust).toFixed(2);
    //parseFloat(this.totalCoffee[j]);
  }
}

// Generate All Daily Totals
Camp.prototype.generateDaily = function () {
  for (var m = 0; m < hours.length; m++) {
    this.custDaily += this.randomCust[m];
    this.cupsDaily += this.cupsHourly[m];
    this.lbsDaily += (this.lbsHourly[m] + this.cupsToPounds[m]);
  }
};

// Table to Print Data Information
var section = document.getElementById('table1');
var table = document.createElement('table')
table.className = 'tab1';
function table1()  {
  var topRow = document.createElement('tr');
  topRow.className = 'th1';
  var locations = document.createElement('th');
  locations.textContent = 'Locations';
  topRow.appendChild(locations);
  for (var i = 0; i < hours.length; i++) {
    var tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableHeader.className = 'th1';
    topRow.appendChild(tableHeader);
  }
  var headerTotal = document.createElement('th');
  headerTotal.textContent = 'Daily Lbs Sold';
  headerTotal.className = 'th1';
  topRow.appendChild(headerTotal);
  table.appendChild(topRow);

  for (var j = 0; j < places.length; j++) {
    var row = document.createElement('tr');
    var kioskNames = document.createElement('th');
    kioskNames.textContent = places[j].kiosk;
    kioskNames.className = 'th1';
    row.appendChild(kioskNames);
    // fix
    for (var k = 0; k < hours.length; k++) {
      var dataRow = document.createElement('td');
      dataRow.textContent = places[j].lbsHourly[k];
      row.appendChild(dataRow);
    }
    var rowTotal = document.createElement('th');
    rowTotal.textContent = places[j].lbsDaily.toFixed(2);
    rowTotal.className = 'total';

    row.appendChild(rowTotal);
    table.appendChild(row);
  }
  section.appendChild(table);
}

// FORM

var inputData = document.getElementById('inputData');
var clearTable = document.getElementById('clear-table');
var newRow = document.getElementById('newRow')

function handleForm(event) {
  event.preventDefault();

  if ( !event.target.loc.value || !event.target.min.value || !event.target.max.value || !event.target.cup.value || !event.target.lbs.value ) {
    return alert('Fields cannot be empty!');
  }

  var newLoc = event.target.loc.value;
  var newMin = event.target.min.value;
  var newMax = event.target.max.value;
  var newCup = event.target.cup.value;
  var newLbs = event.target.lbs.value;

  var newForm = new Camp(newLoc, newMin, newMax, newCup, newLbs);
  newForm.generateNumbers();
  newForm.generateDaily();

  console.log('New data was present with location name: ' + event.target.loc.value + ', minimum customers: ' + event.target.min.value + ', maximum customers: ' + event.target.max.value + ', average cups (per hr): ' + event.target.cup.value + ', and average lbs (per hr): ' + event.target.lbs.value + ' at ' + Date());

  //places.push.(newForm);
  function renderNewLine() {
      // Creates the Location Names
      var row = document.createElement('tr');
      var headPlace = document.createElement('th');
      headPlace.textContent = newLoc;
      headPlace.className = 'th1';
      row.appendChild(headPlace);
      // Fills in the cell of each time
      for (var j = 0; j < hours.length; j++) {
        var cell = document.createElement('td');
        cell.textContent = places[places.length-1].lbsHourly[j];
        row.appendChild(cell);
      }
      // Creates the Total
      var lastTotal = document.createElement('td');
      lastTotal.textContent = +places[places.length-1].lbsDaily.toFixed(2);
      lastTotal.className = 'total';
      row.appendChild(lastTotal);
      table.appendChild(row);
    };
    renderNewLine();
    event.target.loc.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.cup.value = null;
    event.target.lbs.value = null;
}

newRow.addEventListener('submit', handleForm);
// clearTable.addEventListener('click', function() {
//   console.log('You just cleared all the newlt generated tables');
//   // inputData.innerHTML = '';
//   document.getElementById("myTable").deleteRow(0)
//
//
//   // newTableData = [];
// });

// Call
var pike = new Camp('Pike Place Market', 14, 55, 1.2, 3.7);
pike.generateNumbers();
pike.generateDaily();
var cap = new Camp('Capital Hill', 32, 48, 3.2, 0.4);
cap.generateNumbers();
cap.generateDaily();
var sea = new Camp('Seattle Public Library', 49, 75, 2.6, 0.2);
sea.generateNumbers();
sea.generateDaily();
var slu = new Camp('South Lake Union', 35, 88, 1.3, 3.7);
slu.generateNumbers();
slu.generateDaily();
var seatac = new Camp('Sea-Tac Airport', 68, 124, 1.1, 2.7);
seatac.generateNumbers();
seatac.generateDaily();
var web = new Camp('Website Sales', 3, 6, 0, 6.7);
web.generateNumbers();
web.generateDaily();

// Table
table1();

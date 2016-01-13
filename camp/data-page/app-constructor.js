
//var kiosk = ['kioskNames', 'minHr', 'maxHr', 'cupsCust', 'lbsCust'];
var timeHr = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

// CONSTRUCTOR FUNCTIONS
function Camp(kioskNames, minHr, maxHr, cupsCust, lbsCust){
  this.title = kioskNames;
  this.minHr = minHr;
  this.maxHr = maxHr;
  this.cups = cupsCust;
  this.pounds = lbsCust;
  this.randomNumb = [];
  this.totalCupsHr = [];
  this.poundToCups = [];
  this.totalPoundsHr = [];
  this.totalCoffee = []
  this.totalCupsDaily = 0;
  this.totalCustDaily = 0;
  this.totaLbsDaily = 0;
}

// Generate Data Prototype
Camp.prototype.generateNumbers = function() {
  for (var j = 0; j < timeHr.length; j++) {
    this.randomNumb[j] = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
    parseInt(this.randomNumb[j]);
    this.totalCupsHr[j] = +(this.randomNumb[j] * this.cups).toPrecision(3);
    //parseFloat(this.totalCupsHr[j]);
    this.poundToCups[j] = +(this.totalCupsHr[j] / 20).toFixed(2);
    this.totalPoundsHr[j] = +(this.randomNumb[j] * this.pounds).toFixed(2);
    this.totalCoffee[j] = +(this.poundToCups[j] + this.totalPoundsHr[j]).toFixed(2);
    //parseFloat(this.totalCoffee[j]);
  }
}

// Daily Total Prototype
Camp.prototype.daily = function() {
  for (var z = 0; z < timeHr.length; z++) {
    this.totalCupsDaily += this.totalCupsHr[z];
    this.totalCustDaily += this.randomNumb[z];
    this.totaLbsDaily += this.totalCoffee[z];
  }
}

// Table 1 Function
function table1() {
  var sectionEl = document.getElementById('table');
  var tableEl = document.createElement('table');
  var row1 = document.createElement('tr');
  // Creates Time
  var timeHr1 = ['Location', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Total'];
  for (var i = 0; i < timeHr1.length; i++) {
    var headTime = document.createElement('th');
    headTime.textContent = timeHr1[i];
    row1.appendChild(headTime);
  }
  tableEl.appendChild(row1);
  // Creates the Rows
  var places = [pike, cap, sea, slu, seatac];
  for(var p = 0; p < (places.length); p++) {
    // Creates the Location Names
    var row = document.createElement('tr');
    var headPlace = document.createElement('th');
    headPlace.textContent = places[p].title;
    row.appendChild(headPlace);
    // Fills in the cell of each time
    for (var j = 0; j < places[p].totalCupsHr.length; j++) {
      var cell = document.createElement('td');
      cell.textContent = places[p].totalCupsHr[j];
      row.appendChild(cell);
    }
    // Creates the Total
    var lastTotal = document.createElement('td');
    lastTotal.textContent = +places[p].totalCupsDaily.toFixed(2);
    row.appendChild(lastTotal);
    tableEl.appendChild(row);
  }
  sectionEl.appendChild(tableEl);
}

//Render Prototype
Camp.prototype.renderData = function() {
  var kioskEl = document.createElement('h2');
  kioskEl.textContent = this.title;
  document.body.appendChild(kioskEl);
  var ulEl = document.createElement('ul');
  document.body.appendChild(ulEl);
  var sectionEl = document.getElementById(ulEl)
  for (p = 0; p < timeHr.length; p++) {
    var dotEl = document.createElement('li');
    dotEl.textContent = timeHr[p] + ': ' + this.totalCoffee[p] + ' lbs [' + this.randomNumb[p] + ' customers, ' + this.totalCupsHr[p] + ' cups (' + this.poundToCups[p] + ' lbs), ' + this.totalPoundsHr[p] + ' lbs-to-go]';
    ulEl.appendChild(dotEl);
  }
}

// Call Camp Function
var pike = new Camp('Pike Place Market', 14, 55, 1.2, 3.7);
pike.generateNumbers();
// pike.renderData();
pike.daily();
var cap = new Camp('Capital Hill', 32, 48, 3.2, 0.4);
cap.generateNumbers();
// cap.renderData();
cap.daily();
var sea = new Camp('Seattle Public Library', 49, 75, 2.6, 0.2);
sea.generateNumbers();
// sea.renderData();
sea.daily();
var slu = new Camp('South Lake Union', 35, 88, 1.3, 3.7);
slu.generateNumbers();
// slu.renderData();
slu.daily();
var seatac = new Camp('Sea-Tac Airport', 68, 124, 1.1, 2.7);
seatac.generateNumbers();
// seatac.renderData();
seatac.daily();
var web = new Camp('Website Sales', 3, 6, 0, 6.7);
web.generateNumbers();
// web.renderData();
web.daily();

// Call Table Functions
table1();

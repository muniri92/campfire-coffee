
//var kiosk = ['kioskNames', 'minHr', 'maxHr', 'cupsCust', 'lbsCust'];
var timeHr = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

// CONSTRUCTOR FUNCTIONS
function Camp(kioskNames, kiosk, minHr, maxHr, cupsCust, lbsCust){
  this.title = kioskNames;
  this.name = kiosk;
  this.minHr = minHr;
  this.maxHr = maxHr;
  this.cups = cupsCust;
  this.pounds = lbsCust;
  this.randomNumb = [];
  this.totalCupsHr = [];
  this.poundToCups = [];
  this.totalPoundsHr = [];
  this.totalCoffee = []
  this.totalDaily = [];
}

// Generate Data Prototype
Camp.prototype.generateNumbers = function() {
  for (var j = 0; j < timeHr.length; j++) {
    this.randomNumb[j] = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
    parseInt(this.randomNumb[j]);
    this.totalCupsHr[j] = (this.randomNumb[j] * this.cups).toPrecision(3);
    parseFloat(this.totalCupsHr[j]);
    this.poundToCups[j] = (this.totalCupsHr[j] / 20).toFixed(2);
    this.totalPoundsHr[j] = (this.randomNumb[j] * this.pounds).toFixed(2);
    this.totalCoffee[j] = (this.poundToCups[j] + this.totalPoundsHr[j]);
    parseFloat(this.totalCoffee[j]);
    this.totalDaily[j] = (this.totalCupsHr[j] * (timeHr.length));
  }
  return this.totalCoffee;
  return this.totalDaily;
  return this.totalCupsHr;
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
    dotEl.textContent = timeHr[p] + ': ' + this.totalCoffee[p] + ' lbs [' + this.randomNumb[p] + ' customers, ' + this.totalCupsHr[p] + ' cups (' + parseFloat(this.poundToCups[p]) + ' lbs), ' + parseFloat(this.totalPoundsHr[p]) + ' lbs-to-go]';
    ulEl.appendChild(dotEl);
  }
}

// Call Camp Function
var pike = new Camp('Pike Place Market', 'pikePlace', 14, 55, 1.2, 3.7);
pike.generateNumbers();
pike.renderData();
var cap = new Camp('Capital Hill', 'capHill', 32, 48, 3.2, 0.4);
cap.generateNumbers();
cap.renderData();
var sea = new Camp('Seattle Public Library', 'seaPublic', 49, 75, 2.6, 0.2);
sea.generateNumbers();
sea.renderData();
var slu = new Camp('South Lake Union', 'SLU', 35, 88, 1.3, 3.7);
slu.generateNumbers();
slu.renderData();
var seatac = new Camp('Sea-Tac Airport', 'seaTac', 68, 124, 1.1, 2.7);
seatac.generateNumbers();
seatac.renderData();
var web = new Camp('Website Sales', 'webSales', 3, 6, 0, 6.7);
web.generateNumbers();
web.renderData();


// Table  
var timeHr1 = ['Location', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var sectionEl = document.getElementById('table');
var tableEl = document.createElement('table');
tableEl.className = 'table';
var trEl = document.createElement('tr');
for (var i = 0; i < timeHr1.length; i++) {
  var thEl = document.createElement('th');
  thEl.textContent = timeHr1[i];
  trEl.appendChild(thEl);
}
tableEl.appendChild(trEl);
sectionEl.appendChild(tableEl);
for(p = 0; p < (timeHr1.length); p++) {
  var places = ['pike', 'cap', 'sea', 'slu', 'seatac', 'web'];
  var trEl2 = document.createElement('tr');
  trEl2.textContent = (places[p]).titles;
  trEl.appendChild(trEl2);
  for (var j = 0; j < timeHr1.length; j++) {
    var trEl4 = document.createElement('tr');
    trEl4.textContent = places[p].totalCupsHr;
    trEl.appendChild(trEl4);
  }
  var trEl3 = document.createElement('tr');
  trEl3.textContent = places[p].totalDaily;
  trEl.appendChild(trEl3);
}
tableEl.appendChild(trEl);
sectionEl.appendChild(tableEl);
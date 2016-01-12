// DATA PAGE (Use strict)
'use strict';
// Array of Time
var timeHr = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var pikeEl = document.createElement('h2');
pikeEl.textContent = 'Pike Place';
document.body.appendChild(pikeEl);
// Pike Place
var randomNumb;
var totalCupsHr;
var poundToCups;
var totalPoundsHr;
var totalCoffee;
for (var j = 0; j < timeHr.length; j++) {
  var pikePlace = {
    minHr: 14,
    maxHr: 55,
    cups: 1.2,
    pounds: 3.7,
    getNumb: function() {
      randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
      console.log(randomNumb + ' customers this hour.');
      totalCupsHr = Math.floor(randomNumb * this.cups);
      console.log(totalCupsHr + ' cups sold this hour.');
      poundToCups = totalCupsHr / 20;
      console.log(poundToCups + ' cups sold this hour (in pounds).');
      totalPoundsHr = Math.floor(randomNumb * this.pounds);
      console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
      totalCoffee = Math.floor(poundToCups + totalPoundsHr);
      console.log(totalCoffee + ' total pounds of coffee sold this hour');
    }
  }
  pikePlace.getNumb();
  var dotEl = document.createElement('li');
  dotEl.textContent = timeHr[j] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
  document.body.appendChild(dotEl);
}


var capEl = document.createElement('h2');
capEl.textContent = 'Capital Hill';
document.body.appendChild(capEl);
// Capital Hill
for(var i = 0; i < timeHr.length; i++) {
  var capHill = {
    minHr: 32,
    maxHr: 48,
    cups: 3.2,
    pounds: 0.4,
    getNumb: function() {
      randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
      console.log(randomNumb + ' customers this hour.');
      totalCupsHr = Math.floor(randomNumb * this.cups);
      console.log(totalCupsHr + ' cups sold this hour.');
      poundToCups = totalCupsHr / 20;
      console.log(poundToCups + ' cups sold this hour (in pounds).');
      totalPoundsHr = Math.floor(randomNumb * this.pounds);
      console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
      totalCoffee = Math.floor(poundToCups + totalPoundsHr);
      console.log(totalCoffee + ' total pounds of coffee sold this hour');
    }
  }
  capHill.getNumb();
  var dotEl = document.createElement('li');
  dotEl.textContent = timeHr[i] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
  document.body.appendChild(dotEl);
}

var seaPublicEl = document.createElement('h2');
seaPublicEl.textContent = 'Seattle Public Library';
document.body.appendChild(seaPublicEl);
// Seattle Public Library
for(var m = 0; m < timeHr.length; m++) {
  var seaPublic = {
    minHr: 49,
    maxHr: 75,
    cups: 2.6,
    pounds: 0.2,
    getNumb: function() {
      randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
      console.log(randomNumb + ' customers this hour.');
      totalCupsHr = Math.floor(randomNumb * this.cups);
      console.log(totalCupsHr + ' cups sold this hour.');
      poundToCups = totalCupsHr / 20;
      console.log(poundToCups + ' cups sold this hour (in pounds).');
      totalPoundsHr = Math.floor(randomNumb * this.pounds);
      console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
      totalCoffee = Math.floor(poundToCups + totalPoundsHr);
      console.log(totalCoffee + ' total pounds of coffee sold this hour');
    }
  }
  seaPublic.getNumb();
  var dotEl = document.createElement('li');
  dotEl.textContent = timeHr[m] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
  document.body.appendChild(dotEl);
}

var sLUEl = document.createElement('h2');
sLUEl.textContent = 'South Lake Union';
document.body.appendChild(sLUEl);
// South Lake Union
for(var q = 0; q < timeHr.length; q++) {
  var sLU = {
    minHr: 35,
    maxHr: 88,
    cups: 1.3,
    pounds: 3.7,
    getNumb: function() {
      randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
      console.log(randomNumb + ' customers this hour.');
      totalCupsHr = Math.floor(randomNumb * this.cups);
      console.log(totalCupsHr + ' cups sold this hour.');
      poundToCups = totalCupsHr / 20;
      console.log(poundToCups + ' cups sold this hour (in pounds).');
      totalPoundsHr = Math.floor(randomNumb * this.pounds);
      console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
      totalCoffee = Math.floor(poundToCups + totalPoundsHr);
      console.log(totalCoffee + ' total pounds of coffee sold this hour');
    }
  }
  sLU.getNumb();
  var dotEl = document.createElement('li');
  dotEl.textContent = timeHr[q] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
  document.body.appendChild(dotEl);
}

var seaTacEl = document.createElement('h2');
seaTacEl.textContent = 'Sea-Tac Airport';
document.body.appendChild(seaTacEl);
// Sea-Tac Airport
for(var z = 0; z < timeHr.length; z++) {
  var seaTac = {
    minHr: 68,
    maxHr: 124,
    cups: 1.1,
    pounds: 2.7,
    getNumb: function() {
      randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
      console.log(randomNumb + ' customers this hour.');
      totalCupsHr = Math.floor(randomNumb * this.cups);
      console.log(totalCupsHr + ' cups sold this hour.');
      poundToCups = totalCupsHr / 20;
      console.log(poundToCups + ' cups sold this hour (in pounds).');
      totalPoundsHr = Math.floor(randomNumb * this.pounds);
      console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
      totalCoffee = Math.floor(poundToCups + totalPoundsHr);
      console.log(totalCoffee + ' total pounds of coffee sold this hour');
    }
  }
  seaTac.getNumb();
  var dotEl = document.createElement('li');
  dotEl.textContent = timeHr[z] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
  document.body.appendChild(dotEl);
}

var webSalesEl = document.createElement('h2');
webSalesEl.textContent = 'Website Sales';
document.body.appendChild(webSalesEl);
// Website Sales
for(var n = 0; n < timeHr.length; n++) {
  var webSales = {
    minHr: 3,
    maxHr: 6,
    cups: 0,
    pounds: 6.7,
    getNumb: function() {
      randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
      console.log(randomNumb + ' customers this hour.');
      totalCupsHr = Math.floor(randomNumb * this.cups);
      console.log(totalCupsHr + ' cups sold this hour.');
      poundToCups = totalCupsHr / 20;
      console.log(poundToCups + ' cups sold this hour (in pounds).');
      totalPoundsHr = Math.floor(randomNumb * this.pounds);
      console.log(totalPoundsHr + ' pounds of coffee sold this hour.');
      totalCoffee = Math.floor(poundToCups + totalPoundsHr);
      console.log(totalCoffee + ' total pounds of coffee sold this hour');
    }
  }
  webSales.getNumb();
  var dotEl = document.createElement('li');
  dotEl.textContent = timeHr[n] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + poundToCups + ' lbs), ' + totalPoundsHr + ' lbs-to-go]';
  document.body.appendChild(dotEl);
}

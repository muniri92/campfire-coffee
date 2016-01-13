
// Loop for the Kiosks
function campCoffee() {
  var kiosk = [['Pike Place Market', 'Capital Hill', 'Seattle Public Library', 'South Lake Union', 'Sea-Tac Airport', 'Website Sales'], [14, 32, 49, 35, 68, 3], [55, 48, 75, 88, 124, 6], [1.2, 3.2, 2.6, 1.3, 1.1, 0], [3.7, 0.4, 0.2, 3.7, 2.7, 6.7]];
  for (var i = 0; i < kiosk[0][i].length; i++) {
    var h2El = document.createElement('h2');
    h2El.textContent = kiosk[0][i];
    document.body.appendChild(h2El);
    // Declare Variables
    var randomNumb;
    var totalCupsHr;
    var poundToCups;
    var totalPoundsHr;
    var totalCoffee;
    // Loop for the Hourly Results
    for (var j = 0; j < timeHr.length; j++) {
      kiosk[0][i] = {
        name: kiosk[0][i],
        minHr: kiosk[1][i],
        maxHr: kiosk[2][i],
        cups: kiosk[3][i],
        pounds: kiosk[4][i],
        getNumb: function() {
          randomNumb = Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr);
          parseInt(randomNumb);
          totalCupsHr = (randomNumb * this.cups).toPrecision(3);
          parseFloat(totalCupsHr);
          poundToCups = (totalCupsHr / 20).toFixed(2);
          totalPoundsHr = (randomNumb * this.pounds).toFixed(2);
          totalCoffee = (poundToCups + totalPoundsHr);
          parseFloat(totalCoffee);
        }
      }
      // Call the getNumb() function
      kiosk[0][i].getNumb();
      //
      var ulEl = document.createElement('ul');
      document.body.appendChild(ulEl);
      var sectionEl = document.getElementById(ulEl)
      for (p = 0; p < timeHr.length; p++) {
        var dotEl = document.createElement('li');
        dotEl.textContent = timeHr[p] + ': ' + totalCoffee + ' lbs [' + randomNumb + ' customers, ' + totalCupsHr + ' cups (' + parseFloat(poundToCups) + ' lbs), ' + parseFloat(totalPoundsHr) + ' lbs-to-go]';
        ulEl.appendChild(dotEl);
        break;
      }
    }
  }
}
campCoffee();

// Campfire Coffee

// Array of Data

// [name, min customer per Hr, max customer per Hr, cups per customer, pounds per customer]

var dataOrigin = [
              ['pikePlace',
              14,
              55,
              1.2,
              3.7],
              ['capHill',
              32,
              48,
              3.2,
              0.4],
              ['seaPublic',
              49,
              75,
              2.6,
              0.2],
              ['SLU',
              35,
              88,
              1.3,
              3.7] ,
              ['seaTac' ,
              68,
              124,
              1.1,
              2.7],
              ['webSales',
              3,
              6,
              0,
              6.7]
              ];

// Data in objects
for (i = 0; i < dataOrigin.length; i++) {
  var objectData = {
    // Array inputs
    name: dataOrigin[i][0],
    minHr: dataOrigin[i][1],
    maxHr: dataOrigin[i][2],
    cupsCust: dataOrigin[i][3],
    // Now the unit of pounds = unit of cups
    poundsCust: dataOrigin[i][4] * 20,
    // Math.floor(Math.random() * (max - min + 1) + min);
    randomNum: function() {
      return Math.floor(Math.random() * (this.maxHr - this.minHr + 1) + this.minHr);
      console.log(objectData.randomNum);
    }
  }
};
objectData;

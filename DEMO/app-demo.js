// 1st Demo for Jan 12 (CONSTRUCTOR FUNCTIONS)
function Student(firstName, lastInitial, hairStyle) {
  this.course = '201d5';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.hairStyle = hairStyle;
  this.intro = function() {
    console.log('My name is ' + this.firstName + ' and my last initial is ' + this.lastInitial);
  }
}

var munir = new Student('munir', 'i', 'aight');
var sam = new Student('sam', 'k', 'aight');

munir.noteQuality = 'Awesome';


Student.prototype.hungerRatting = 10;

Student.prototype.warCry = function() {
  console.log('woooooo')
}

// 2nd Demo for Jan 12 (TABLES)

function renderMonths() {
  var months = ['jan', 'feb'];
  for (var i = 0; i < months.length; i++) {

  }
}

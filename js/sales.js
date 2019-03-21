var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var table = document.createElement('table');
var trHeader = document.createElement('tr');
var totalHeader = document.createElement('th');
totalHeader.textContent = 'Totals';
var loc ='location';
var min = 0;
var max = 0; 
var avg = 0;
var colSum = 0;
var NewLocation;
var storeList = [];

// trHeader is a row
// Left Corner table cell needs to be blank
var blank = document.createElement('th');
trHeader.appendChild(blank);
//notice we append a table header to a table header

for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('th');
  listItem.textContent = hours[i];
  trHeader.appendChild(listItem);
  trHeader.appendChild(totalHeader);
}

table.appendChild(trHeader);
document.body.appendChild(table);
// constructor works
function CookieStore(loc, min, max, avg) {
    this.locationName = loc;
    this.minCustomersPerHour = min;
    this.maxCustomersPerHour = max;
    this.avgCookiesPerSale = avg;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalDailyCookies = 0;
}


CookieStore.prototype.calcCustomersEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
  }
}

CookieStore.prototype.calcCookiesEachHour = function () {
  for (var i = 0; i < this.customersEachHour.length; i++) {
    this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
  }
}

CookieStore.prototype.calcTotalCookies = function () {
  for (var i = 0; i < this.cookiesEachHour.length; i++) {
    this.totalDailyCookies += this.cookiesEachHour[i];
  }
  this.cookiesEachHour.push(this.totalDailyCookies)
}

CookieStore.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();
  this.calcTotalCookies();

  //this will add the second row which starts with a header
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = this.locationName;
  tr.appendChild(th);

  
  //we already have a row with one header so attach TD to row
  for (var i = 0; i < this.cookiesEachHour.length; i++) {
    var td = document.createElement('td');
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }


// add what we just created to table
  table.appendChild(tr);
  ////add totals of columns
}
///total if added here goes tot top

//  NewLocation = new CookieStore(loc, +min, +max, +avg);
// var PikePlace = new CookieStore('Pike Place Market', 23, 65, 6.3);
// var SeaTacInternationalAiport = new CookieStore('SeaTac International Aiport', 23, 65, 6.3);
// var SeattleCenter = new CookieStore('Seattle Center', 23, 65, 6.3);
// var FloydsCookieStand = new CookieStore('Floyds Cookie Stand', 23, 65, 6.3);
// var storeList = [PikePlace, SeaTacInternationalAiport, SeattleCenter, FloydsCookieStand];

var total ='blank';
NewLocation.render();
// PikePlace.render();
// SeaTacInternationalAiport.render();
// SeattleCenter.render();
// FloydsCookieStand.render();
// floyd.render();
///add column totals
//NewLocation.render();
var tablerow = document.createElement('tr');
var tableHeader = document.createElement('th');
var tablerowtwo = document.createElement('tr');


tableHeader.textContent = 'total';
//Pikeplace

tablerow.appendChild(tableHeader);
for(var j = 0; j < hours.length; j++) {
  colSum = 0;

  for(var i = 0; i < storeList.length; i++ ) {
    //console.log(storeList[i].cookiesEachHour[j], 'line 103' );
    colSum += storeList[i].cookiesEachHour[j];
  }
  var tableDef = document.createElement('th');
  tableDef.textContent = colSum;
  tablerow.appendChild(tableDef);
  table.appendChild(tablerow);
  
}

var addNewLocation = document.getElementById('add-new-location')
//works
function handleForm(e) {
  
  e.preventDefault();

  loc = e.target.loc.value;
  min = e.target.min.value;
  max = e.target.max.value; 
  avg = e.target.avg.value;
  loc;
  ++min;
  ++max;
  ++avg
  storeList.push(loc);
  NewLocation = new CookieStore(loc, min, max, avg);


}

addNewLocation.addEventListener('submit', handleForm);
NewLocation.calcCustomersEachHour()

console.log(storeList)




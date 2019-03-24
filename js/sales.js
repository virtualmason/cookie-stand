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
function CookieStore(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
    this.locationName = locationName;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
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


var total ='blank';

function handleForm(e) {
  
  e.preventDefault();

  loc = e.target.loc.value;
  min = e.target.min.value;
  max = e.target.max.value; 
  avg = e.target.avg.value;
  ++min;
  ++max;
  ++avg
  NewLocation = new CookieStore(loc, min, max, avg);
  storeList.push(NewLocation);

var tablerow = document.createElement('tr');
var tableHeader = document.createElement('th');

var list = document.getElementsByTagName("table")[0];
console.log(list ,'list')
console.log(list.childNodes, 'childNodes')
if(list.childNodes.length > 1) {
  list.removeChild(list.childNodes[list.childNodes.length -1]);
}
NewLocation.render();

tableHeader.textContent = 'total';
tablerow.appendChild(tableHeader);
tablerow.appendChild(tableHeader);

for(var j = 0; j < hours.length; j++) {
  colSum = 0;
  
  for(var i = 0; i < storeList.length; i++ ) {
    colSum += storeList[i].cookiesEachHour[j];

  }
  var tableDef = document.createElement('th');
  tableDef.textContent = colSum;
  tablerow.appendChild(tableDef);
  
  
  table.appendChild(tablerow);
}

}

var addNewLocation = document.getElementById('add-new-location')
addNewLocation.addEventListener('submit', handleForm);
console.log(NewLocation, 'NewLocation')




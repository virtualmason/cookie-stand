var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var table = document.createElement('table');
var trHeader = document.createElement('tr');

// Left Corner table cell needs to be blank
var blank = document.createElement('th');
trHeader.appendChild(blank);

for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('th');
  listItem.textContent = hours[i];
  trHeader.appendChild(listItem);
}

table.appendChild(trHeader);
document.body.appendChild(table);

function CookieStore(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
    this.locationName = locationName;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiesPerSale = avgCookiesPerSale;
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
}

CookieStore.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();
  this.calcTotalCookies();

  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = this.locationName;
  tr.appendChild(th);

  for (var i = 0; i < this.cookiesEachHour.length; i++) {
    var td = document.createElement('td');
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }

  table.appendChild(tr);
}


var PikePlace = new CookieStore('Pike Place Market', 23, 65, 6.3);
var SeaTacInternationalAiport = new CookieStore('SeaTac International Aiport', 23, 65, 6.3);
var SeattleCenter = new CookieStore('Seattle Center', 23, 65, 6.3);
var FloydsCookieStand = new CookieStore('Floyds Cookie Stand', 23, 65, 6.3);

PikePlace.render();
SeaTacInternationalAiport.render();
SeattleCenter.render();
FloydsCookieStand.render();
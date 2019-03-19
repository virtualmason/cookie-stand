var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var pikePlace = {
  locationName: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
   for(var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
   }
  },
                                   
  
  calcCookiesEachHour: function() 
  {
    for(var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
    }
  },
  calcTotalCookies: function() {
    for(var i = 0; i < this.cookiesEachHour.length; i++){
      this.totalDailyCookies += this.cookiesEachHour[i];
             }
  },
  render: function() { 
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    this.calcTotalCookies();

    var header = document.createElement('h2')
    header.textContent = this.locationName;
    document.body.appendChild(header);
    var unorderedList = document.createElement('ul')
    for(var i = 0; i < hours.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies;
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
}

pikePlace.render();









var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function pikePlace (locationName, minCustomersPerHour,maxCustomersPerHour,avgCookiesPerSale) {
  this.locationName = locationName,
  this.minCustomersPerHour = minCustomersPerHour,
  this.maxCustomersPerHour = maxCustomersPerHour,
  this.avgCookiesPerSale = avgCookiesPerSale,
  this.customersEachHour = [],
  this.cookiesEachHour = [],
  this.totalDailyCookies = 0
}

pikePlace.prototype.calcCustomersEachHour = function() {
  // console.log(hours, "hours global variable1 ")
  // console.log(this.time[0], "time object ")


     for(var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
     }
    }

pikePlace.prototype.calcCookiesEachHour = function() {
    for(var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
    }
  }

pikePlace.prototype.calcTotalCookies = function() {
      for(var i = 0; i < this.cookiesEachHour.length; i++){
        this.totalDailyCookies += this.cookiesEachHour[i];
      }
      
    }

 pikePlace.prototype.render = function() { 
      this.calcCustomersEachHour();
      this.calcCookiesEachHour();
      this.calcTotalCookies();
       
      var table = document.createElement('table');
      var tr = document.createElement('tr');
      var th = document.createElement('th')
      ////////////
   var table = document.createElement("table");
  table.setAttribute("id", "myTable");
  document.body.appendChild(table);

  var tr = document.createElement("tr");
  tr.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(tr);

  var td = document.createElement("td");
  var cel = document.createTextNode("cell");
  td.appendChild(cel);
  document.getElementById("myTr").appendChild(td);
}
  
      // var header = document.createElement('h2')
      // header.textContent = this.locationName;
      // document.body.appendChild(header);
      // var unorderedList = document.createElement('ul')
      // for(var i = 0; i < hours.length; i++){
      //   var listItem = document.createElement('li');
      //   listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
      //   unorderedList.appendChild(listItem);
      // }
      // var total = document.createElement('li');
      // total.textContent = 'Total: ' + this.totalDailyCookies;
      // unorderedList.appendChild(total);
      // document.body.appendChild(unorderedList);
    

    var PikePlaceMarket = new pikePlace('Pike Place Market', 23, 65, 6.3)
    PikePlaceMarket.render();

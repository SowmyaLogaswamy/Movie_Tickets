// Business Logic Area
// var age range for price  number of people (10.00)
//  children * .70 = 7.00 // adult = 1  // senior * .70

// var ticket price
// function Ticket(Name, *Age, Movie, Date, Time, adult, child, senior)
// this.Name = Name

//if age <= 10 or if age >=55 then ticketCost * .7

//((base price * 3) + ((base price * .7) * 3) * .9)
//         adults |     C/S disc   |     #C/S | matinee
function Customer(name, movie, date, time, adult, child, senior) {
  this.customerName = name;
  this.movie = movie;
  this.date = date;
  this.time = time //morning matinee evening;
  this.adult = adultqty;
  this.child = childqty;
  this.senior = seniorqty;
}
//function Movie(adultprice, childprice, seniorprice)



//User Logic
$(document).ready(function() {
  $("form#movie-form").submit(function(event) {
    event.preventDefault();
    var name = $("input#new-name").val();
    var movie = $("#movieSelect").val();
    var date = $("#showDate").val();
    var showtiming = $("input:radio[name=showTiming]:checked").val();
    var adultqty = parseInt($("input#new-adult-ticket").val());
    var childqty = parseInt($("input#new-child-ticket").val());
    var seniorqty = parseInt($("input#new-senior-ticket").val());
    var ticketCost;
//    $("#confirmpage").show();
//    $("confirmpage").text()


//    var ticketTotal = (adultqty * moviePrice) + (childqty * moviePrice * .7) + (seniorqty * .7)
  debugger;
    if(movie === "1") {
      ticketCost=10;
    }else if(movie === "2") {
      ticketCost=16;
    }else if(movie === "3") {
      ticketCost=16;
    }

    var ticketTotal = (adultqty * ticketCost) + (childqty * ticketCost * 0.8) + (seniorqty * ticketCost*0.5);

    $("#results").append("Customer's Name: " + name +"<br>");
    $("#results").append("Movie Name: " + movie +"<br>");
    $("#results").append("Show Date: " + date +"<br>");
    $("#results").append("Show Time: " + showtiming +"<br>");
    $("#results").append("Number of Adults: " + adultqty +"<br>");
    $("#results").append("Number of Children: " + childqty +"<br>");
    $("#results").append("Number of Seniors: " + seniorqty +"<br>");
    $("#results").append("Total Cost: " + "$" + ticketTotal +"<br>");
  });
});

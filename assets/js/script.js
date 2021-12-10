let openinghourp = document.getElementById('openinghour');
var openmon = "12pm -> 9pm";
var opentue = "12pm -> 9pm";
var openwed = "1pm -> 10pm";
var openthu = "1pm -> 11pm";
var openfri = "10am -> 1am";
var opensat = "11am -> 12am";
var opensun = "2pm -> 7:30pm";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

alert(today.getDay());
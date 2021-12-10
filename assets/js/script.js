let openinghourp = document.getElementById('openinghour');
var openmon = "12pm -> 9pm";
var opentue = "12pm -> 9pm";
var openwed = "1pm -> 10pm";
var openthu = "1pm -> 11pm";
var openfri = "10am -> 1am";
var opensat = "11am -> 12am";
var opensun = "2pm -> 7:30pm";

const d = new Date();
let day = d.getDay();

if (day == 0){
    openinghourp.innerHTML = opensun;
}
if (day == 1){
    openinghourp.innerHTML = openmon;
}
if (day == 2){
    openinghourp.innerHTML = opentue;
}
if (day == 3){
    openinghourp.innerHTML = openwed;
}
if (day == 4){
    openinghourp.innerHTML = openthu;
}
if (day == 5){
    openinghourp.innerHTML = openfri;
}
if (day == 6){
    openinghourp.innerHTML = opensat;
}
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
    openinghourp.HTML = opensun;
}
if (day == 1){
    openinghourp.HTML = openmon;
}
if (day == 2){
    openinghourp.HTML = opentue;
}
if (day == 3){
    openinghourp.HTML = openwed;
}
if (day == 4){
    openinghourp.HTML = openthu;
}
if (day == 5){
    openinghourp.HTML = openfri;
}
if (day == 6){
    openinghourp.HTML = opensat;
}
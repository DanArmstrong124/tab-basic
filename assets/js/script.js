let openinghourstartp = document.getElementById('openinghourstart');
let openinghourclosep = document.getElementById('openinghourclose');
var openmons = "12pm";
var opentues = "12pm";
var openweds = "1pm";
var openthus = "1pm";
var openfris = "10am";
var opensats = "11am";
var opensuns = "2pm";
var openmonc = "9pm";
var opentuec = "9pm";
var openwedc = "10pm";
var openthuc = "11pm";
var openfric = "1am";
var opensatc = "12am";
var opensunc = "7:30pm";

const d = new Date();
let day = d.getDay();

if (day == 0){
    openinghourstartp.innerText = opensuns;
    openinghourclosep.innerText = opensunc;
}
if (day == 1){
    openinghourstartp.innerText = openmons;
    openinghourclosep.innerText = openmonc;
}
if (day == 2){
    openinghourstartp.innerText = opentues;
    openinghourclosep.innerText = opentuec;
}
if (day == 3){
    openinghourstartp.innerText = openweds;
    openinghourclosep.innerText = openwedc;
}
if (day == 4){
    openinghourstartp.innerText = openthus;
    openinghourclosep.innerText = openthuc;
}
if (day == 5){
    openinghourstartp.innerText = openfris;
    openinghourclosep.innerText = openfric;
}
if (day == 6){
    openinghourstartp.innerText = opensats;
    openinghourclosep.innerText = opensatc;
}
var temperature = document.querySelector("#hot0");
var el = document.querySelector("#cookieAlert");

function hide() {
    el.remove();
}

function toFarenheit() {
    var dummy = 0;
    dummy = temperature.innerText*(9/5) + 32;
    console.log(dummy);
    temperature.innerText = dummy;
}
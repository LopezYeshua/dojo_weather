var temperature = document.querySelector("#hot0");
var el = document.querySelector("#cookieAlert");

function hide() {
    el.remove();
}

function toFarenheit() {
    temperature = temperature.innerText*(9/5) + 32;
    return temperature;
}
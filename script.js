var temperature = document.querySelector("#hot0");
var el = document.querySelector("#cookieAlert");

function hide() {
    el.remove();
}

function changeTemp(element) {
    if (element.value == "f") {
        console.log(element.value);
        var temp = 0;
        temp = temperature.innerText*(9/5) + 32;
        temperature.innerText = temp;
    }
    else if (element.value == "c") {
        console.log(element.value);
        var temp = 0;
        temp = temperature.innerText*5/9;
        temperature.innerText = temp;
    }
}
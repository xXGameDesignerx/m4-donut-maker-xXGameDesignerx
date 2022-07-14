
let bake = 0;
let multiply = 0;
let autoclick = 0;
let Mcost = 45;
let Acost = 20;
let timer = undefined;

let BakeDonuts = document.getElementById("bakeButton");
BakeDonuts.addEventListener("click", Bake);
let MultiplyDonuts = document.getElementById("multiplyButton");
MultiplyDonuts.addEventListener("click", MultiplyButton);
let AutoClicker = document.getElementById("autoclickButton");
AutoClicker.addEventListener("click", AutoButton);
let ResetGame = document.getElementById("Reset");
ResetGame.addEventListener("click", Reset);
let Menu = document.getElementById("Dropdown");
Menu.addEventListener("click", Dropdown);

let BakeDonutsText = document.getElementById("Bake");
let MultiplyDonutsText = document.getElementById("Multiply");
let AutoClickerText = document.getElementById("AutoClick");

window.onload = startup();
function startup(){
    disableButton();
}

//make donuts
function Bake() {
    if (bake <= 0) {
        bake = 0;
    }
    if (bake > 40) {
        BakeDonutsText.innerText = "Donut Count: " + bake++;
        AutoClickerText.innerText = "Auto Clicker Owned: " + autoclick + 1;
    } else if (bake > 85) {
        BakeDonutsText.innerText = "Donut Count: " + bake++;
        MultiplyDonutsText.innerText = "Donut Multiplyer Owned: " + multiply + 1;
    }
    else {
        console.log("Bake count: " + bake);
        BakeDonutsText.innerText = "Donut Count: " + bake++;
    }

}
//multiply functions
function MultiplyButton() {
    let multiplyPurchase = 1;
    mulTotal = multiply - multiplyPurchase;
    BakeDonutsText.innerText = Math.pow(1.1, bake.toFixed(0));
    console.log("Purchased Multiplyer.");
}
function enableMultiplyButton() {
    if (mulTotal >= 1) {
        MultiplyDonuts = document.getElementById("multiplyButton").disable = false;
        BakeDonutsText.innerText = "Donut Count: " + (Mcost - bake);
        if (bake <= 0) {
            bake = 0;
        }
    } else {
        disableButton();
    }
}
//auto clicker functions
function AutoButton() {
    let autoPurchase = 1;
    autoTotal = autoclick - autoPurchase;
    console.log("Purchased Autoclicker.");
    enableAutoButton();
}
function enableAutoButton() {
        AutoClicker = document.getElementById("autoclickButton").disable = false;
        BakeDonutsText.innerText = "Donut Count: " + (Acost - bake);
        if (bake <= 0) {
            bake = 0;
        }
        console.log("Activated AutoClicker")
        if (timer == undefined) {
            timer = setInterval(Activate, 1000);
        }
}
function Activate() {
    BakeDonutsText.innerText = "Donut Count: " + bake++;
}
//reseting the game
function Reset() {
    let resetBake = bake * 0;
    let resetMultiply = multiply * 0;
    let resetAutoclick = autoclick * 0;
    BakeDonutsText.innerText = "Donut Count: " + resetBake;
    MultiplyDonutsText.innerText = "Donut Multiplyer Owned: " + resetMultiply;
    AutoClickerText.innerText = "Auto Clicker Owned: " + resetAutoclick;
    console.log("bake: " + resetBake + "\nmultiply: " + resetMultiply + "\nautoclick: " + resetAutoclick);
    disableButton();
}
function disableButton() {
        timer != undefined;
        MultiplyDonuts = document.getElementById("multiplyButton").disable = true;
        AutoClicker = document.getElementById("autoclickButton").disable = true;
}
//dropdown functions
function Dropdown() {
    console.log(Dropdown);
    let navBarText = document.getElementById("Dropdown").style.marginTop = "0px";
}

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
disableButton();

//make donuts
function Bake() {
    if (bake < 0) {
        bake = 0;
    }
    else {
        bake++;
        BakeDonutsText.innerText = "Donut Count: " + bake;
        UpdateText();
    }
}
function UpdateText(){
    if (bake == 40) {
        AutoButton();
    }
    if (bake == 85){
        MultiplyButton();
    }
    else{
        disableButton();
    }
}
//multiply functions
function MultiplyButton() {
        MultiplyDonutsText.innerText = "Donut Multiplyer Owned: " + multiply + 1;
        let multiplyPurchase = 1;
        mulTotal = multiplyPurchase -= multiply;
        BakeDonutsText.innerText = Math.pow(1.1, bake.toFixed(0));
        console.log("Purchased Multiplyer.");
        enableMultiplyButton();
}
function enableMultiplyButton() {
    console.log("Activated Multiply")
    MultiplyDonuts = document.getElementById("multiplyButton").disable = false;
    BakeDonutsText.innerText = "Donut Count: " + (Mcost -= bake);
    MultiplyDonutsText.innerText = "Donut Multiplyer Owned: " + mulTotal;
}
//auto clicker functions
function AutoButton() {
        AutoClickerText.innerText = "Auto Clicker Owned: " + autoclick + 1;
        let autoPurchase = 1;
        autoTotal = autoPurchase -= autoclick;
        console.log("Purchased Autoclicker.");
        enableAutoButton();
}
function enableAutoButton() {
    AutoClicker = document.getElementById("autoclickButton").disable = false;
    BakeDonutsText.innerText = "Donut Count: " + (Acost -= bake);
    AutoClickerText.innerText = "Auto Clicker Owned: " + autoTotal;
    console.log("Activated AutoClicker")
    if (timer == undefined) {
        timer = setInterval(Bake, 1000);
    }
}
//reseting the game
function Reset() {
    bake = 0;
    multiply = 0;
    autoclick = 0;
    timer = undefined;
    BakeDonutsText.innerText = "Donut Count: " + bake;
    MultiplyDonutsText.innerText = "Donut Multiplyer Owned: " + multiply;
    AutoClickerText.innerText = "Auto Clicker Owned: " + autoclick;
    console.log("bake: " + bake + "\nmultiply: " + multiply + "\nautoclick: " + autoclick);
    disableButton();
}
function disableButton() {
    MultiplyDonuts = document.getElementById("multiplyButton").disable = true;
    MultiplyDonuts.disabled = true;
    AutoClicker = document.getElementById("autoclickButton").disable = true;
    AutoClicker.disabled = true;
}
//dropdown functions
function Dropdown() {
    console.log(Dropdown);
    let x = document.getElementById("dropdown-content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let bake = 0;
let multiply = 1;
let autoclick = 1;
let Mcost = 45;
let Acost = 20;
let timer = undefined;
let multiplier = 1;
let enabled = false;

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
let MultiplyScoreText = document.getElementById("MulScore");
let AutoClickerText = document.getElementById("AutoClick");
let AutoCostText = document.getElementById("ACost");
let MultiplierCostText = document.getElementById("MCost");
UpdateText();

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
function UpdateText() {
    if (bake >= Acost) {
        AutoClickerText.innerText = "Auto Clicker Owned: " + autoclick;
        AutoClicker = document.querySelector(".Abutton").disabled = false;
    }
    else {
        // call the buttons with the "ID" and not the "class" of that html document
        AutoClicker = document.querySelector(".Abutton").disabled = true;
    }
    if (bake >= Mcost) {
        MultiplyDonutsText.innerText = "Donut Multiplyer Owned: " + multiply;
        MultiplyDonuts = document.querySelector(".Mbutton").disabled = false;
    } else {
        MultiplyDonuts = document.querySelector(".Mbutton").disabled = true;
    }
    AutoCostText.innerText = "Donut AutoClicker Cost: " + Acost;
    MultiplierCostText.innerText = "Donut Multiplyer Cost: " + Mcost;
}
//multiply functions
function MultiplyButton() {
    // check when we subtract the cost if we do subtract the donuts
    if (bake >= Mcost) {
        //Take away from the bake value
        bake -= Mcost;
        // Everytime we call the function we want to add 0.1 to every click
        multiplier += .1;
        //multiplying bake with the multiplier
        bake * (multiplier += 1.2);
        mulTotal = 1 - multiply;
        console.log("Purchased Multiplyer.");
        Mcost *= 1.1;
        UpdateText();
        if (!enabled) {
            enableMultiplyButton();
        }
    } else {
        UpdateText();
    }
}
function enableMultiplyButton() {
    console.log("Activated Multiply")
    // print out the new bake 
    BakeDonutsText.innerText = "Donut Count: " + bake;
    // print out the multiplier Owned
    MultiplyDonutsText.innerText = "Donut Multiplyer Owned: " + mulTotal;
    // print out the new multipier 
    MultiplyScoreText.innerText = "Donut Multipler: " + multiplier.toFixed(1);
    UpdateText();
    if (mulTotal == 0) {
        UpdateText();
    }
}
//auto clicker functions
function AutoButton() {
    if (bake >= Acost) {
        bake -= Acost;
        let autoPurchase = 1;
        autoTotal = autoPurchase -= autoclick;
        console.log("Purchased Autoclicker.");
        Acost += 10;
        UpdateText();
        enableAutoButton();
    } else {
        UpdateText();
    }
}
function enableAutoButton() {
    BakeDonutsText.innerText = "Donut Count: " + bake;
    AutoClickerText.innerText = "Auto Clicker Owned: " + autoTotal;
    UpdateText();
    console.log("Activated AutoClicker")
    if (timer == undefined) {
        timer = setInterval(Bake, 1000);
    }
    if (autoTotal == 0) {
        UpdateText();
    }
}
//reseting the game
function Reset() {
    bake = 0;
    multiply = 0;
    autoclick = 0;
    Mcost = 45;
    Acost = 20;
    timer = undefined;
    multiplier = 0;
    enabled = true;
    BakeDonutsText.innerText = "Donut Count: " + bake;
    MultiplyDonutsText.innerText = "Donut Multiplyer Owned: " + multiply;
    AutoClickerText.innerText = "Auto Clicker Owned: " + autoclick;
    MultiplyScoreText.innerText = "Donut Multipler: " + multiplier;
    console.log("bake: " + bake + "\nmultiply: " + multiply + "\nautoclick: " + autoclick);
    AutoCostText.innerText = "Donut AutoClicker Cost: " + Acost;
    MultiplierCostText.innerText = "Donut Multiplyer Cost: " + Mcost;
    UpdateText();
}
//dropdown functions
function Dropdown() {
    console.log("Dropdown");
    let x = document.getElementById("dropdown-content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
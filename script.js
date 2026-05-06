const data = {
flour:120,
sugar:200,
rice:180,
milk:240,
oil:220
};

function convert(){

let ingredient = document.getElementById("ingredient").value;
let amount = document.getElementById("amount").value;
let unit = document.getElementById("unit").value;

if(amount === ""){
alert("ادخل الكمية");
return;
}

amount = Number(amount);

// kg → g
if(unit === "kg"){
amount *= 1000;
}

// L → ml
if(unit === "l"){
amount *= 1000;
unit = "ml";
}

// ml → cups (للأشياء السائلة)
if(unit === "ml"){
let cups = amount / 240;
document.getElementById("result").innerText =
cups.toFixed(2) + " كوب";
return;
}

// cup → g
if(unit === "cup"){
let grams = amount * data[ingredient];
document.getElementById("result").innerText =
grams.toFixed(2) + " غرام";
return;
}

// g → cups
let cups = amount / data[ingredient];
document.getElementById("result").innerText =
cups.toFixed(2) + " كوب";
}

const data = {
flour:120,
sugar:200,
rice:180,
milk:240,
oil:220
};

let history = JSON.parse(localStorage.getItem("history")) || [];

function convert(){

let ingredient = document.getElementById("ingredient").value;
let amount = document.getElementById("amount").value;
let unit = document.getElementById("unit").value;

if(amount === ""){
alert("ادخل الكمية");
return;
}

amount = Number(amount);

let resultText = "";

if(unit === "kg"){
amount *= 1000;
}

if(unit === "ml"){
let cups = amount / 240;
resultText = cups.toFixed(2) + " كوب";
}

else if(unit === "cup"){
let grams = amount * data[ingredient];
resultText = grams.toFixed(2) + " غرام";
}

else{
let cups = amount / data[ingredient];
resultText = cups.toFixed(2) + " كوب";
}

document.getElementById("result").innerText = resultText;

window.lastResult = resultText;
}

function saveResult(){

if(!window.lastResult) return;

history.push(window.lastResult);

localStorage.setItem("history", JSON.stringify(history));

showHistory();
}

function showHistory(){

let list = document.getElementById("history");
list.innerHTML = "";

history.forEach(item=>{
let li = document.createElement("li");
li.innerText = item;
list.appendChild(li);
});
}

document.getElementById("themeBtn").addEventListener("click",()=>{
document.body.classList.toggle("dark");
});

showHistory();

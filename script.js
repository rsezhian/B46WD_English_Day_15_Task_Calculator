/*
window.addEventListener("keydown", (event) => {
  const input = String.fromCharCode(event.keyCode);
  if (/[a-zA-Z0-9-_ ]/.test(input)) {
    alert("Only numbers are allowed to press !!!!");
  }
});
//   if (event.keyCode >= 65 && event.keyCode <= 90) {
//     alert("input was a-z");
//   }
*/

var myNavBar = document.createElement("nav");
myNavBar.classList.add("navbar");
myNavBar.classList.add("navbar-dark");
myNavBar.classList.add("bg-dark");

var myNavTitle = document.createElement("span");
myNavTitle.classList.add("navbar-brand");
myNavTitle.classList.add("mb-1");
myNavTitle.classList.add("h1");
myNavTitle.classList.add("offset-5");
myNavTitle.classList.add("text-center");
myNavTitle.innerHTML = "Calculator -- Project";
myNavBar.appendChild(myNavTitle);

let myMainContainer = document.createElement("div");
myMainContainer.classList.add("container-flex");
myMainContainer.classList.add("mt-5");

let myRow1 = document.createElement("div");
myRow1.classList.add("row");
let myCol1 = document.createElement("div");
myCol1.classList.add("col-lg-6");
myCol1.classList.add("offset-3");
myRow1.appendChild(myCol1);
myMainContainer.appendChild(myRow1);

let myRow2 = document.createElement("div");
myRow2.classList.add("row");
let myCol2 = document.createElement("div");
myCol2.classList.add("col-12");

let myInputField = document.createElement("input");
myInputField.setAttribute("type", "text");
myInputField.setAttribute("id", "type-area");
myInputField.setAttribute("readonly", "true");
myInputField.setAttribute("placeholder", "0");
myInputField.classList.add("form-control");
myInputField.classList.add("text-right");
myInputField.classList.add("mb-4");
myInputField.style.fontSize = "24px";
myInputField.style.borderRadius = "15px";
myInputField.style.padding = "15px 15px";
myInputField.style.border = "2px solid lightblue";
myCol2.append(myInputField);

let myCol2a = document.createElement("div");
myCol2a.classList.add("col-12", "mb-4");
let myKeyNumClear = myCalKeysCreate("C", "btn-outline-danger", "clear");
let myKeyNumBack = myCalKeysCreate("\u232b", "btn-outline-info", "back");
let myKeyNumMod = myCalKeysCreate("%", "btn-outline-success", "modulus");
let myKeyNumDiv = myCalKeysCreate("/", "btn-outline-success", "division");
myCol2a.append(myKeyNumClear, myKeyNumBack, myKeyNumMod, myKeyNumDiv);

//
// functions myAddText -- input field
function myAddText(event) {
  var myKeyTarget = event.target || event.srcElement;
  document.getElementById("type-area").value +=
    myKeyTarget.textContent || myKeyTarget.innerText;
}

// functions insertNumberButton
function myCalKeysCreate(keyvalue, btnprop, idkeys) {
  var myKeyNumCon = document.createElement("div");
  if (keyvalue == "=") {
    myKeyNumCon.classList.add("col-6");
  } else {
    myKeyNumCon.classList.add("col-3");
  }
  myKeyNumCon.style.display = "inline-block";

  var myKeyNumber = document.createElement("input");
  myKeyNumber.setAttribute("type", "button");
  myKeyNumber.setAttribute("value", keyvalue);
  console.log(keyvalue);
  myKeyNumber.setAttribute("id", idkeys);
  myKeyNumber.innerHTML = keyvalue;
  myKeyNumber.onclick = function () {
    myAddText(event);
  };
  if (keyvalue === "++") {
    myKeyNumber.style.padding = "50px 5px 50px 5px";
  }
  myKeyNumber.classList.add("btn", btnprop);
  myKeyNumber.style.fontSize = "1.5rem";
  myKeyNumber.style.height = "100%";
  myKeyNumber.style.width = "100%";
  myKeyNumber.style.borderRadius = "10px";
  myKeyNumCon.appendChild(myKeyNumber);
  return myKeyNumCon;
}

//

let myCol3 = document.createElement("div");
myCol3.classList.add("col-12", "mb-4");
let myKeyNum7 = myCalKeysCreate("7", "btn-outline-secondary", "seven");
let myKeyNum8 = myCalKeysCreate("8", "btn-outline-secondary", "eight");
let myKeyNum9 = myCalKeysCreate("9", "btn-outline-secondary", "nine");
let myKeyNumMul = myCalKeysCreate("*", "btn-outline-success", "multiplication");
myCol3.append(myKeyNum7, myKeyNum8, myKeyNum9, myKeyNumMul);

let myCol4 = document.createElement("div");
myCol4.classList.add("col-12", "mb-4");
let myKeyNum4 = myCalKeysCreate("4", "btn-outline-secondary", "four");
let myKeyNum5 = myCalKeysCreate("5", "btn-outline-secondary", "five");
let myKeyNum6 = myCalKeysCreate("6", "btn-outline-secondary", "six");
let myKeyNumMin = myCalKeysCreate("-", "btn-outline-success", "minius");
myCol4.append(myKeyNum4, myKeyNum5, myKeyNum6, myKeyNumMin);

let myCol5 = document.createElement("div");
myCol5.classList.add("col-12", "mb-4");
let myKeyNum1 = myCalKeysCreate("1", "btn-outline-secondary", "one");
let myKeyNum2 = myCalKeysCreate("2", "btn-outline-secondary", "two");
let myKeyNum3 = myCalKeysCreate("3", "btn-outline-secondary", "three");
let myKeyNumPlus = myCalKeysCreate("+", "btn-outline-success", "plus");
myCol5.append(myKeyNum1, myKeyNum2, myKeyNum3, myKeyNumPlus);

let myCol6 = document.createElement("div");
myCol6.classList.add("col-12", "mb-4");
let myKeyNum0 = myCalKeysCreate("0", "btn-outline-secondary", "zero");
let myKeyNumDot = myCalKeysCreate(".", "btn-outline-secondary", "dot");
let myKeyNumEval = myCalKeysCreate("=", "btn-outline-primary", "evalution");
myCol6.append(myKeyNum0, myKeyNumDot, myKeyNumEval);
//
//
//
window.onload = function () {
  let myBackSpace = document.getElementById("back");
  let myKeyClear = document.getElementById("clear");
  let myKeyEvaln = document.getElementById("evalution");
  let myInputDisplay = document.getElementById("type-area");

  myBackSpace.onclick = function () {
    myInputDisplay.value = myInputDisplay.value.slice(0, -1);
  };
  myKeyEvaln.onclick = function () {
    if (myInputDisplay.value) {
      myInputDisplay.value = myInputDisplay.value.substring(
        myInputDisplay.value.lastIndexOf("=") + 1
      );
      myInputDisplay.value = eval(myInputDisplay.value);
    }
  };
  myKeyClear.onclick = function () {
    myInputDisplay.value = "";
  };
};
//
//
//
myCol1.append(myRow2);
myRow2.append(myCol2, myCol2a, myCol3, myCol4, myCol5, myCol6);
document.body.append(myNavBar, myMainContainer);

// ---------------------------------------------------------------------------
// if (myInputDisplay.value[myInputDisplay.value.length - 1] != " ") {
//   myInputDisplay.value = myInputDisplay.value.substring(
//     0,
//     myInputDisplay.value.length - 1
//   );
// } else {
//   myInputDisplay.value = myInputDisplay.value.substring(
//     0,
//     myInputDisplay.value.length - 2
//   );
// }

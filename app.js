
let value1E1 = document.getElementById ("firstValue"); 
let unit1El = document.getElementById("firstUnit");
let value2El = document.getElementById("secondValue");
let unit2El = document.getElementById("secondUnit");
let btnEl = document.getElementById("convert-btn");

const convertValue = () => {
  let value1 = value1E1.value;
  let unit1 = unit1El.value;
  let unit2 = unit2El.value;
  let value1InLegalUnit;
  let convertedValue;

  switch (unit1) {
    case "km":
      value1InLegalUnit = value1 * 1000;
      break;
    case "cm":
      value1InLegalUnit = value1 / 100;
      break;
    case "mm":
      value1InLegalUnit = value1 / 1000;
      break;
    default:
      value1InLegalUnit = value1;
  }

  switch (unit2) {
    case "km":
      convertedValue = value1InLegalUnit / 1000;
      break;
    case "cm":
      convertedValue = value1InLegalUnit * 100;
      break;
    case "mm":
      convertedValue = value1InLegalUnit * 1000;
      break;
    default:
      convertedValue = value1InLegalUnit;
  }

 
  value2El.value = convertedValue;
};

btnEl.addEventListener("click", convertValue);
unit2El.addEventListener("change", () => {
  value2El.value = "";
});
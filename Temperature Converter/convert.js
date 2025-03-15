const input = document.getElementById("input_area");
const celsius_to_fahrenheit = document.getElementById("celsius_to_fahrenheit");
const celsius_to_kelvin = document.getElementById("celsius_to_kelvin");
const fahrenheit_to_celsius = document.getElementById("fahrenheit_to_celsius");
const fahrenheit_to_kelvin = document.getElementById("fahrenheit_to_kelvin");
const kelvin_to_celsius = document.getElementById("kelvin_to_celsius");
const kelvin_to_fahrenheit = document.getElementById("kelvin_to_fahrenheit");
const result = document.getElementById("result");
const button = document.getElementById("btn");
let temp;

convert = () => {
  if (celsius_to_fahrenheit.checked) {
    temp = (Number(input.value) * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (celsius_to_kelvin.checked) {
    temp = Number(input.value) + 273.15;
    result.textContent = temp.toFixed(1) + "°K";
  } else if (fahrenheit_to_celsius.checked) {
    temp = ((Number(input.value) - 32) * 5) / 9;
    result.textContent = temp.toFixed(1) + "°C";
  } else if (fahrenheit_to_kelvin.checked) {
    temp = ((Number(input.value) - 32) * 5) / 9 + 273.15;
    result.textContent = temp.toFixed(1) + "°K";
  } else if (kelvin_to_celsius.checked) {
    temp = Number(input.value) - 273.15;
    result.textContent = temp.toFixed(1) + "°C";
  } else if (kelvin_to_fahrenheit.checked) {
    temp = ((Number(input.value) - 273.15) * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else {
    result.textContent = "Select a conversion";
  }
};

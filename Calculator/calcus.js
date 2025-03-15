const display = document.getElementById("display");

const append = (value) => {
  display.value += value;
};

const appendOpenParenthesis = () => {
  display.value += "(";
};
const appendCloseParenthesis = () => {
  display.value += ")";
};

const clearDisplay = () => {
  display.value = "";
};

const deleteDisplay = () => {
  display.value = display.value.slice(0, -1);
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
};

let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
  expression += value;
  display.innerText = expression;
}

function clearDisplay() {
  expression = '';
  display.innerText = '0';
}

function calculate() {
  try {
    let result = eval(expression);
    display.innerText = result;
    expression = result.toString();
  } catch (error) {
    display.innerText = 'Error';
    expression = '';
  }
}

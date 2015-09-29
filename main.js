// grab my elements
var x = document.querySelector('#num_one');
var y = document.querySelector('#num_two');
var a = document.querySelector('#answer');
var calc = document.querySelector('#calculateBtn');

// variable declarations
var val;

// addition function
function sum(){
  val = Number(x.value) + Number(y.value);
  a.textContent = val;
};

// Button click
calc.addEventListener("click", sum);

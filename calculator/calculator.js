// This is a calculator. user will be prompted to type 2  numbers and the program will perform arithmetic operations with the 2 numbers typed//

// ORDER - comments come first explaining what comes below //

// 2 variables created. num1 = x, num2 = y.  The prompt will ask the user to type 2 numbers in order to calculate //

var num1 = x = parseInt(prompt("This is a calculator. You need to type 2 numbers in order to do the Math. Enter the first number:"));
var num2 = y = parseInt(prompt("Enter the second number:"));

// functions (x and y as arguments ) to define each forumla listed below and get the correspondent operations as returns //

//Math.pow() method was used to the square,cube and fourth powers. only x is used since it will calculate just 1 variable to the power. I haven't tried to do both variables x and y to the power. //

// for sin,cos and tan there is only x as argument because the function needs only the radian value from the circle property. Based on the radian(x) the function gets it's angle, so it just needs x to calculate sin,cos,tan. y isn't used here //

function addFormula(x,y) {
  return x + y;
}
function subtractFormula(x,y) {
  return x - y;
}
function multiplyFormula(x,y) {
  return x * y;
}
function divideFormula(x,y) {
  return x / y;
}
function squaredFormula(x) {
  return Math.pow(x,2);
}
function cubeFormula(x) {
  return Math.pow(x,3);
}
function fourthFormula(x) {
  return Math.pow(x,4);
}
function sinxFormula(x) {
  return Math.sin(x);
}
function cosxFormula(x) {
  return Math.cos(x);
}
function tanxFormula(x) {
  return Math.tan(x);
}

// variables for each operation are equal to their functions. X and Y are the arguments to be typed by the user.//

var sum = addFormula(x,y);
var sub = subtractFormula(x,y);
var mul = multiplyFormula(x,y);
var div = divideFormula(x,y);
var squared = squaredFormula(x); 
var cube = cubeFormula(x); 
var fourth = fourthFormula(x); 
var sinx = sinxFormula(x); 
var cosx = cosxFormula(x);
var tanx = tanxFormula(x); 

// array operation = variables representing each operation on the calculator // 

var operation = [sum, sub, mul, div, squared, cube, fourth, sinx, cosx, tanx];

// for loop will iterate through operation array with the variable "i". variable "i" starts with the index equal to  0  which is the variabvle sum. Then, the loop will go i++ through the array operation lenght ad test all variables. //

// default = "Invalid operation." . The message will show up on the console in case any operation tested by the switch case isn't correct // 
for (var i = 0; i < operation.length; i++) {
  switch (operation[i]) {
    case sum:
      console.log("The sum of " + x + " and " + y + " is " + sum);
      break;
    case sub:
      console.log("The subtraction of " + y + " from " + x + " is " + sub);
      break;
    case mul:
      console.log("The multiplication of " + x + " and " + y + " is " + mul);
      break;
    case div:
      console.log("The division of " + x + " by " + y + " is " + div);
      break;
    case squared:
      console.log(x + ' to the square is equal to ' + squared);
      break;
    case cube:
      console.log(x + ' to the cube is equal to ' + cube);
      break;
    case fourth:
      console.log(x + ' to the fourth is equal to ' + fourth);
      break;
    case sinx:
      console.log('sin of x is equal to ' + sinx);
      break;
    case cosx:
      console.log('cos of x is equal to ' + cosx);
      break;
    case tanx:
      console.log('tan of x is equal to ' + tanx);
      break;
    default:
      console.log("Invalid operation.");
  }
}

// Prompt the user to perform the calculation again. // 
var anothershot = prompt("Do you want to keep playing ? say no to check results.");

// If the user wants to perform the calculation again, reload the page. // 
if (anothershot.toLowerCase() === "yes") {
  location.reload();
}

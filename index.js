console.log("Hello World");
// This is a comment

/* This is a 
multi-line comment */
/* Data Types:
    undefined, null, boolean, string, symbol, number, and object
*/

var MyName = "Ekjot"; // variable can be used everywhere

MyName = 8;

let OurName = "We all"; // let will only be used where it is declared

const pi = 3.14; // variable that can never be changed

var a;
var b = 10;

console.log(a);
console.log(b);

a = 15;

console.log(a);

b = a;

console.log(a);
console.log(b);

//Unintialized Variables
var a = 5;
var b = 10;
var c = "I'm a ";

a = a + 1;
b = b + 5;
c = c + "string";
console.log(a);
console.log(b);
console.log(c);

// Case sensitivity in JS

// Declarations
var StUdLycapVaR;
var PRoperCamelCase;
var TitleCaseOver;

// Assignments
StUdLycapVaR = 10;
PRoperCamelCase = "A String";
TitleCaseOver = 9000;

// Adding Numbers
var sum = 10 + 10;
console.log(sum);

// Subtracting Numbers
var subtract = 40 - 17;
console.log(subtract);

// Multiplying Numbers
var product = 10 * 19;
console.log(product);

// Dividing Numbers
var product = 66 / 33;
console.log(product);

// Incrementing a Number
var MyVar = 87;

// long method
MyVar = MyVar + 1;

// short method
MyVar++;

// Decrementing a Number
var myVar = 11;

// long method
myVar = myVar - 1;

// short method
myVar--;

//Decimals
var ourDecimal = 5.7;

var ourDecimal = 0.009;

// Multiplying Decimals
var Decimalproduct = 2.0 * 2.5;
console.log(Decimalproduct);

// Dividing Decimals
var Decimaldivision = 4.4 / 2.0;
console.log(Decimaldivision);

// Finding Remainder
var Remainder;
Remainder = 11 % 3;

var x = 7;
var y = 9;
var z = 11;

// Compound assignment with Augmented Addition
x += 3;
y += 4;
z += 5;

// Compound assignment with Augmented Subtraction
x -= 3;
y -= 4;
z -= 5;

// Compound assignment with Augmented Multipilcation
x *= 3;
y *= 4;
z *= 5;

var x = 12;
var y = 24;
var z = 105;
// Compound assignment with Augmented Division
x /= 3;
y /= 4;
z /= 5;


// Strings
var firstName = "Diljit";
var lasttName = "Dosanjh";

var MyfirstName = "Ekjot";
var MylastName = "Singh";

// Use Backslash(\) to Escape Literal quotes
var myStr = 'I am a "double quoted" string inside "double quotes';

// Use Single-quotes('') to Escape Literal quotes without need of Backslash(\) and can also use them
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Use Backticks(`) to Escape Literal quotes without need of Backslash(\) and Single-quotes('') and can also use them
var myStr = `'<a href="http://www.example.com" target="_blank">Link</a>'`;

/*
Escape Sequences

CODE OUTPUT
\'   single quote
\"   double quote
\\   backslash
\n   newline
\r   carriage return
\t   tab
\b   backspace
\f   form feed
*/

var mymultiStr = "FirstLine\n\t\\SecondLine\nThirdLine";

var ourStr = "I come first, " + "I come second."

// Plus exquals operator
var ourStr = "I come first, ";
ourStr += "I come second.";
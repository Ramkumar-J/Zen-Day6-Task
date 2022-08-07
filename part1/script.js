// Part 1: Find the culprits and nail them — debugging javascript

// Find the culprit
// alert("I’m JavaScript!');
// The cuprit is ' string datas are inside '' or ""
alert("I'm JavaScript!");

// Find the culprit and invoke the alert
// Correct the JS fie name to script.js

// Explain the below how it works
alert("I'm JavaScript!");
alert("Hello");
alert(`Wor
 ld`);
alert(3 + 1 + 2);
// It shows alert one by one synchronously , 1. I'm JavaScript, 2. Hello, 3. World, 4. 6

// Fix the below to alert Guvi geek
let admin = 9,
  fname = 10.5;
fname = "Guvi";
lname = "geek";
admin = fname + " " + lname;
console.log(admin);
alert(admin);

// Fix the below to alert hello Guvi geek
let finame = 10.5;
fname = "Guvi";
lname = "geek";
let name = fname + " " + lname;
alert("hello" + " " + name);

// Fix the below to alert sum of two numbers
let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b);

//* If you run the below scritpt you will get “Code is Blasted”.Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var c = "2" < "12"; //Don't touch below this
if (c) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}

// How to get the success in console
let d = prompt("Enter a number?");
if (d) {
  console.log("OMG it works for any number inc 0");
} else {
  console.log("Success");
}
// if not give any input value it execute success.

// How to get the correct score in console
let value = prompt("How many runs you scored in this ball");
if (value === 4) {
  console.log("You hit a Four");
} else if (value === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}
console.log(value);

// Fix the code to welcome the Employee
let login = "Employee";
let message = login == "Employee" ? "Welcome" : "";
login == "Director" ? "Greetings" : login == "" ? "No login" : "";
console.log(message);

// Fix the code to welcome the boss
// You cant change the value of the msg
let messages;
if (null || 2 || undefined) {
  messages = "welcome boss";
} else {
  messages = "Go away";
}
console.log(messages);

// Fix the code to welcome the boss
let message1;
let lock = 0;
//Dont change any code below this
if (null || lock || undefined) {
  message1 = "Go away";
} else {
  message1 = "welcome";
}
console.log(message1);

// Fix the code to welcome the boss
let message2;
let lock2 = 0;
//Dont change any code below this
if ((lock2 && " ") || undefined) {
  message2 = "Go away";
} else {
  message2 = "welcome";
}
console.log(message2);

// Change the code to print
// 3
// 2
// 1
//You can change only 2 characterslet
i = 3;
while (i) {
  console.log(i--);
}

//* Change the code to print 1 to 10 in 4 lines
let num = 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);

// Change the code to print even numbers
//You are allowed to modify only one character
for (let num = 2; num <= 20; num += 1) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

// Fix the code to disarm the bomb.
let countdown = 100;
while (countdown < 0) {
  countdown--;
  if (countdown == 0) {
    console.log("bomb triggered");
  }
}

// Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg);
// Output is hi - because it accept the string only it not acccept boolean value

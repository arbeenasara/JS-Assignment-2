document.getElementById("demo").innerHTML = "<h1>Chapter 21-25</h1>";

document.getElementById("q1").innerHTML = "<h3>Question # 1</h3> Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.";
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello! " + fullName + " How are you?");

document.getElementById("q2").innerHTML = "<h3>Question # 2</h3> Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser";
// var mob = prompt("Enter your favourite Mobile Phone Model");
// document.write("My favourite phone is: " + mob + "<br>" + "Length of String: " + mob.length);

document.getElementById("q3").innerHTML = "<h3>Question # 3</h3> Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.";
// var str = "Pakistani";
// var ind = str.indexOf("n");
// document.write("String: " + str + "<br>" + "Index of 'n': " + ind);

document.getElementById("q4").innerHTML = "<h3>Question # 4</h3> Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.";
// var str = "Hello World";
// var ind = str.lastIndexOf("l");
// document.write("String: " + str + "<br>" + "Last Index of 'l': " + ind);

document.getElementById("q5").innerHTML = "<h3>Question # 5</h3> Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.";
// var str = "Pakistani";
// var ind = str.slice(3,4);
// document.write("String: " + str + "<br>" + "Character at index 3: " + ind); 

document.getElementById("q6").innerHTML = "<h3>Question # 6</h3> Repeat Q1 using string concat() method.";
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" ",lastName);
// alert("Hello! " + fullName + " How are you?");

document.getElementById("q7").innerHTML = "<h3>Question # 7</h3> Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.";
// var str = "Hyderabad"; 
// var txt = str.replace("Hyder","Islam");
// document.write("City: " + str + "<br>" + "After replacement: " + txt);

document.getElementById("q8").innerHTML = "<h3>Question # 8</h3> Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.";
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var txt = message.replace(/and/g,"&");
// document.write(txt);

document.getElementById("q9").innerHTML = "<h3>Question # 9</h3> Write a program that converts a string “472” to a number 472. Display the values & types in your browser.";
// var i = "472";
// var a = 472;
// document.write("Value: " + i + "<br>" + "Type: " + typeof i + "<br>" + "Value: " + a + "<br>" + "Type: " + typeof a);

document.getElementById("q10").innerHTML = "<h3>Question # 10</h3> Write a program that takes user input. Convert and show the input in capital letters.";
// var text = prompt("Write something in Lowercase");
// document.write("User input: " + text + "<br>" + "Uppercase: " + text.toUpperCase());

document.getElementById("q11").innerHTML = "<h3>Question # 11</h3> Write a program that takes user input. Convert and show the input in title case.";
// function sentenceCase (str) {
//     if ((str===null) || (str===''))
//          return false;
//     else
//      str = str.toString();
  
//    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//   }
  
// document.write(sentenceCase("Title Case: " + prompt('Write something in Lowercase')));

document.getElementById("q12").innerHTML = "<h3>Question # 12</h3> Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.";
// var num = 35.36;
// var str = num.toString();
// var str = str.replace(".", "");
// document.write("Number: "  + num + "<br>");
// document.write("Result: " + str);

document.getElementById("q13").innerHTML = "<h3>Question # 13</h3> Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.";
// var userName = prompt("Enter your name");
// for (i = 0; i <= userName.length - 1; i++) {
//     if (userName.charCodeAt(i) == 64 || userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46) {
//         alert("Please! Enter a valid username.");
//     }
// }

document.getElementById("q14").innerHTML = "<h3>Question # 14</h3> You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.";
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var list = 0;

// for (i = 0; i <= a.length - 1; i++) {
//     if (a[i] == b) {
//         document.write(b + " is available at index " + a.indexOf(b) + " in our bakery!");
//         list = 1;
//     }
// }

// if (list == 0) {
//     document.write("We are sorry, " + b + " is not available in our bakery!");
// }

document.getElementById("q15").innerHTML = "<h3>Question # 15</h3> Write a program to take password as an input from user.";
// var num = prompt("Type your Password");
// var a = false;
// var b = false;
// var length = true;
// var firstChar = true;


// for (x = 0; x <= password.length - 1; x++) {
//     if (password.charCodeAt(x) >= 97 && password.charCodeAt(x) <= 122) {
//         a = true;
//     }
//     if (password.charCodeAt(x) >= 48 && password.charCodeAt(x) <= 57) {
//         num = true;
//     }
//     if (password.charCodeAt(x) >= 65 && password.charCodeAt(x) <= 90) {
//         b = true;
//     }
// }

// if (password.length <= 6) {
//     length = false;
// }

// for (i = 0; i <= 10; i++) {
//     if (password.startsWith(i, 0)) {
//         firstChar = false;
//     }
// }

// if (num == false || b == false || a == false || length == false || firstChar == false) {
//     alert("You entered incorrect password");
//     if (num == false || b == false || a == false) {
//         alert("Password should contain alphabets and numbers");
//     }
//     if (length == false) {
//         alert("Password must be at least 6 characters long");
//     }
//     if (firstChar == false) {
//         alert("Password can not begin with a number");
//     }
// }
// else {
//     alert("You successfully entered your password!");
// }

document.getElementById("q16").innerHTML = "<h3>Question # 16</h3> Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.";
// var university = "University of Karachi";
// var str = university.split("");


// for (i = 0; i <= university.length - 1; i++) {

//     document.write(str[i] + "<br>");
// }

document.getElementById("q17").innerHTML = "<h3>Question # 17</h3> Write a program to display the last character of a user input.";
// var str = "Pakistan"; 
// var char = str.slice(-1);
// document.write("User input: " + str + "<br>" + "Last character of input: " + char);

document.getElementById("q18").innerHTML = "<h3>Question # 18</h3> You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.";
// var text = "The quick brown fox jumps over the lazy dog";
// var i = text.match(/the/gi);

// document.write("Text: " + text + "<br>");
// document.write("There are " + i.length + " occurence(s) of word 'the'");



document.getElementById("ch2").innerHTML = "<h1>Chapter 26-30</h1>";

document.getElementById("que1").innerHTML = "<h3>Question # 1</h3> Write a program that takes a positive integer from user & display the following in your browser.";
// var num = prompt("Enter any positive number");
// document.write("number : " + num + " <br>");
// document.write("round off value : " + Math.round(num) + " <br>");
// document.write("floor value : " + Math.floor(num) + " <br>");
// document.write("ceil value : " + Math.ceil(num));

document.getElementById("que2").innerHTML = "<h3>Question # 2</h3> Write a program that takes a negative floating point number from user & display the following in your browser.";
// var i = prompt("Enter any negative number");
// document.write("number : " + i + " <br>");
// document.write("round off value : " + Math.round(i) + " <br>");
// document.write("floor value : " + Math.floor(i) + " <br>");
// document.write("ceil value : " + Math.ceil(i));

document.getElementById("que3").innerHTML = "<h3>Question # 3</h3> Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5";
// var a = prompt("Enter any number");
// document.write("The absolute value of " + a + " is " + Math.abs(a));

document.getElementById("que4").innerHTML = "<h3>Question # 4</h3> Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.";
// var i = Math.floor((Math.random() * 6) + 1);
// document.write("Random dice value: " + i);

document.getElementById("que5").innerHTML = "<h3>Question # 5</h3> Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser";
// var x = Math.random() * 2;
// var toss = Math.ceil(x);
// if (toss == 2) {
//     document.write(toss + "<br>")
//     document.write("Random coin value: Heads");
// }
// else if (toss == 1) {
//     document.write(toss + "<br>");
//     document.write("Random coin value: Tails");
// }

document.getElementById("que6").innerHTML = "<h3>Question # 6</h3> Write a program that shows a random number between 1 and 100 in your browser.";
// var i = Math.floor((Math.random() * 100) + 1);
// document.write("Random number between 1 and 100: " + i);

document.getElementById("que7").innerHTML = "<h3>Question # 7</h3> Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.";
// var weight = prompt("Enter your weight in kilograms");
// var i = parseFloat(weight);
// document.write("The weight of user is " + i + " kilograms");

document.getElementById("que8").innerHTML = "<h3>Question # 8</h3> Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.";
// var num = prompt("Enter any number from 1 to 10");
// var i = Math.floor();

// if (i == num) {
//     alert("Congratulations!");
// }
// else {
//     alert("Try again!");
// }


document.getElementById("ch3").innerHTML = "<h1>Chapter 31-34</h1>";
document.getElementById("h1").innerHTML = "<h3>Question # 1</h3> Write a program that displays current date and time in your browser.";
// var x = new Date()
// document.write(x)

document.getElementById("h2").innerHTML = "<h3>Question # 2</h3> Write a program that alerts the current month in words. For example December.";
// var x = new Date();
// var month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var currentMonth = x.getMonth();
// document.write("Current Month: " + month[currentMonth]);

document.getElementById("h3").innerHTML = "<h3>Question # 3</h3> Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.";
// var x = new Date();
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var today = x.getDay();
// document.write("Today is " + days[today]);

document.getElementById("h4").innerHTML = "<h3>Question # 4</h3> Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.";
// var x = new Date();
// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var i = x.getDay();

// if (days[i] == 'Sun' || days[i] == 'Sat') {
//     document.write("It's Funday");
// }

// else {
//     document.write("It's a weekday");
// }

document.getElementById("h5").innerHTML = "<h3>Question # 5</h3> Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.";
// var x = new Date();
// var a = x.getDate();

// if (x > 16) {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last fifteen days of the month");
// }

document.getElementById("h6").innerHTML = "<h3>Question # 6</h3> Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.";
// var x = new Date();
// var time = (x.getTime()) / (1000 * 60);
// document.write("Current date: " + x + "<br>");
// document.write("Elapsed Miliseconds since Jan 1 1970: " + x.getTime() + "<br>");
// document.write("Elapsed Minutes since Jan 1 1970: " + time);

document.getElementById("h7").innerHTML = "<h3>Question # 7</h3> Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.";
// var x = new Date();
// var hours = x.getHours();
// if (hours >= 0 && hours <= 12) {
//     document.write("Its AM");
// }
// else {
//     document.write("Its PM");
// }

document.getElementById("h8").innerHTML = "<h3>Question # 8</h3> Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.";
// var i = new Date("Dec 31, 2020");
// document.write("Later Date: " + i);

document.getElementById("h9").innerHTML = "<h3>Question # 9</h3> Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015";
// var x = new Date();
// var a = new Date("June 18, 2015 ");
// var i = (x - a) / (1000 * 60 * 60 * 24);
// document.write(Math.floor(i) + " days have passed since 1st Ramzan, 2015");

document.getElementById("h10").innerHTML = "<h3>Question # 10</h3> Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.";
// var x = new Date("Dec 5, 2015");
// var date = new Date("Jan 1, 2015");
// var sec = (x - date) / (1000);

// document.write("On reference date " + x + ", " + Math.floor(sec) + " seconds has passed since beginning of 2015");

document.getElementById("h11").innerHTML = "<h3>Question # 11</h3> Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.";
// var x = new Date();
// document.write("current date: " + x + "<br>");
// x.setHours(x.getHours() - 1)
// document.write("1 hour ago, it was " + x);

document.getElementById("h12").innerHTML = "<h3>Question # 12</h3> Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?";
// var x = new Date();
// document.write("current date: " + x + "<br>");
// x.setFullYear(x.getFullYear() - 100)
// document.write("100 years back, it was " + x);

document.getElementById("h13").innerHTML = "<h3>Question # 13</h3> Write a program to ask the user about his age. Calculate and show his birth year in your browser.";
// var age = prompt("Enter your age");
// var x = new Date();
// var year = x.getFullYear();
// var birthYear = year - age;

// document.write("Your age is: " + age + "<br>");
// document.write("Your birth year is: " + birthYear);

document.getElementById("h14").innerHTML = "<h3>Question # 14</h3> Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.";
// var i = "Arbeena";
// var x = new Date();
// var month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var currMonth = x.getMonth();

// var units = 410;
// var perUnit = 16;

// var netAmount = units * perUnit;
// var latePayment = 350;
// var grossAmount = netAmount + latePayment;

// document.write("<h1> K-Electric Bills </h1>");
// document.write("Current Name: " + "<b>" + i + "</b>" + "<br>");
// document.write("Current Month: " + "<b>" + month[currMonth] + "</b>" + "<br>");
// document.write("Number of units: " + "<b>" + units + "</b>" + "<br>");
// document.write("Charges per unit: " + "<b>" + perUnit + "</b>" + "<br>" + "<br>");

// document.write("Net Amount Payable (within Due Date): " + "<b>" + netAmount + "</b>" + "<br>");
// document.write("Late Payment Surcharge: " + "<b>" + latePayment + "</b>" + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + "<b>" + grossAmount + "</b>" + "<br>");


document.getElementById("ch4").innerHTML = "<h1>Chapter 35-38</h1>";

document.getElementById("qu1").innerHTML = "<h3>Question # 1</h3> Write a function that displays current date & time in your browser.";
// function date() {
//     var i = new Date();
//     document.write();
// }

// date();

document.getElementById("qu2").innerHTML = "<h3>Question # 2</h3> Write a function that takes first & last name and then it greets the user using his full name.";
// function name(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     return fullName;
// }

// var a = prompt("Enter your First Name");
// var b = prompt("Enter your Last Name");

// document.write("Hi! " + name(a, b) + " How are you?");

document.getElementById("qu3").innerHTML = "<h3>Question # 3</h3> Write a function that adds two numbers (input by user) and returns the sum of two numbers.";
// function add(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
// }

// var num1 = prompt("Enter your First number");
// var num2 = prompt("Enter your Second number");

// document.write("Total: " + add(num1, num2));

document.getElementById("qu4").innerHTML = "<h3>Question # 4</h3> Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.";
// function cal(num1, sign, num2) {
//     if (sign == "+") {
//         var result = num1 + num2;
//         return result;
//     }
//     if (sign == "-") {
//         var result = num1 - num2;
//         return result;
//     }
//     if (sign == "*") {
//         var result = num1 * num2;
//         return result;
//     }
//     if (sign == "/") {
//         var result = num1 / num2;
//         return result;
//     }

// }

// var num1 = prompt("Enter First Number");
// var sign = prompt("Enter operator", "+, -, *, /");
// var num2 = prompt("Enter Second Number");

// document.write("Result: " + num1 + " " + sign + " " + num2 + " is:  " + cal(num1, sign, num2));

document.getElementById("qu5").innerHTML = "<h3>Question # 5</h3> Write a function that squares its argument.";
// function square(num) {
//     var square = num * num;
//     return square;
// }

// var num = prompt("Enter any number");

// document.write("Square of " + num + " is  " + square(num));

document.getElementById("qu6").innerHTML = "<h3>Question # 6</h3> Write a function that computes factorial of a number.";
// function factorial(num) {
//     var a = 1;
//     if (num === 0 || num === 1) {
//         return a;
//     }
//     else {

//         for (var i = num; i >= 1; i--) {

//             a = a * i;

//         }
//         return a;
//     }
// }

// var num = prompt("Enter any number");
// document.write("Factorial of " + num + " is  " + factorial(num));

document.getElementById("qu7").innerHTML = "<h3>Question # 7</h3> Write a function that take start and end number as inputs & display counting in your browser.";
// function count(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

// var start = prompt("Enter starting number");
// var end = prompt("Enter ending number");

// count(start, end);


document.getElementById("qu8").innerHTML = "<h3>Question # 8</h3> Write a nested function that computes hypotenuse of a right angle triangle.";
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(a) {
//         a = a * a;
//         return a;
//     }
//     var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//     return Math.sqrt(hypotenuse);
// }

// var base = prompt("Enter base value");
// var perpendicular = prompt("Enter perpendicular value");

// document.write("Hypotenuse of a right angle triangle: " + calculateHypotenuse(base, perpendicular));

document.getElementById("qu9").innerHTML = "<h3>Question # 9</h3> Write a function that calculates the area of a rectangle.";
// function a(width, height) {
//     var a = width * height
//     return a;
// }
// width = 10;
// height = 6;

// document.write("Arguments as value = " + a(4, 8) + "<br>");
// document.write("Arguments as variables = " + a(width, height));

document.getElementById("qu10").innerHTML = "<h3>Question # 10</h3> Write a JavaScript function that checks whether a passed string is palindrome or not?";
// function palindrome(see) {
//     var a = "";

//     for (var i = see.length - 1; i >= 0; i--) {
//         a += see[i];
//     }
//     if (see === a) {
//         alert(see + " is palindrome");
//     }
//     else {
//         alert(see + " is not palindrome");
//     }
// }
// var i = prompt("Write a word to check it's palindrome or not..");
// palindrome(i);

document.getElementById("qu11").innerHTML = "<h3>Question # 11</h3> Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.";
// function titleCase(change) {
//     var arr = change.split(" ");
//     var abc = [];
//     var a;
//     for (var i = 0; i < arr.length; i++) {
//         var firstChar = arr[i].slice(0, 1);
//         var addChar = arr[i].slice(1);
//         var b = firstChar.toUpperCase() + addChar.toLowerCase();
//         abc.push(b);
//     }
//     a = abc.join(" ");
//     document.write("STRING: " + change + "<br>");
//     document.write("OUTPUT: " + a);
// }

// var i = prompt("Write any text..");
// titleCase(i);

document.getElementById("qu12").innerHTML = "<h3>Question # 12</h3> Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.";
// function longestString(change) {
//     var a = change.split(" ");
//     var b = a[0];
//     for (i = 0; i < a.length; i++) {
//         if (a[i].length > b.length) {
//             b = a[i];
//         }
//     }
//     document.write("STRING: " + change + "<br>")
//     document.write("OUTPUT: " + b)
// }
// var p = prompt("Write soemthing in 3 to 4 words..");
// longestString(p);

document.getElementById("qu14").innerHTML = "<h3>Question # 12</h3> Create 2 functions that calculate properties of a circle, using the definitions";
// function calcCircumference(radius) {
//     var a = 2 * 3.142 * radius;
//     document.write("The circumference is: " + a + "<br>");
// }
// function calcArea(radius) {
//     var b = 3.142 * radius * radius;
//     document.write("The area is: " + b + "<br>");
// }
// var radius = prompt("Enter radius of a Circle");
// calcCircumference(radius);
// calcArea(radius);






















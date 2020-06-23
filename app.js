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
var num = prompt("Enter any number from 1 to 10");
var i = Math.floor();

if (i == num) {
    alert("Congratulations!");
}
else {
    alert("Try again!");
}


















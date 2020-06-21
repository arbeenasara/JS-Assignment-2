document.getElementById("demo").innerHTML = "<h1>Chapter 21-25</h1>";

document.getElementById("q1").innerHTML = "<h3>Question # 1</h3>";
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello! " + fullName + " How are you?");

document.getElementById("q2").innerHTML = "<h3>Question # 2</h3>";
// var mob = prompt("Enter your favourite Mobile Phone Model");
// document.write("My favourite phone is: " + mob + "<br>" + "Length of String: " + mob.length);

document.getElementById("q3").innerHTML = "<h3>Question # 3</h3>";
// var str = "Pakistani";
// var ind = str.indexOf("n");
// document.write("String: " + str + "<br>" + "Index of 'n': " + ind);

document.getElementById("q4").innerHTML = "<h3>Question # 4</h3>";
// var str = "Hello World";
// var ind = str.lastIndexOf("l");
// document.write("String: " + str + "<br>" + "Last Index of 'l': " + ind);

document.getElementById("q5").innerHTML = "<h3>Question # 5</h3>";
// var str = "Pakistani";
// var ind = str.slice(3,4);
// document.write("String: " + str + "<br>" + "Character at index 3: " + ind); 

document.getElementById("q6").innerHTML = "<h3>Question # 6</h3>";
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" ",lastName);
// alert("Hello! " + fullName + " How are you?");

document.getElementById("q7").innerHTML = "<h3>Question # 7</h3>";
// var str = "Hyderabad"; 
// var txt = str.replace("Hyder","Islam");
// document.write("City: " + str + "<br>" + "After replacement: " + txt);

document.getElementById("q8").innerHTML = "<h3>Question # 8</h3>";
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var txt = message.replace(/and/g,"&");
// document.write(txt);

document.getElementById("q9").innerHTML = "<h3>Question # 9</h3>";
// var i = "472";
// var a = 472;
// document.write("Value: " + i + "<br>" + "Type: " + typeof i + "<br>" + "Value: " + a + "<br>" + "Type: " + typeof a);

document.getElementById("q10").innerHTML = "<h3>Question # 10</h3>";
// var text = prompt("Write something in Lowercase");
// document.write("User input: " + text + "<br>" + "Uppercase: " + text.toUpperCase());

document.getElementById("q11").innerHTML = "<h3>Question # 11</h3>";
// function sentenceCase (str) {
//     if ((str===null) || (str===''))
//          return false;
//     else
//      str = str.toString();
  
//    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//   }
  
// document.write(sentenceCase("Title Case: " + prompt('Write something in Lowercase')));

document.getElementById("q12").innerHTML = "<h3>Question # 12</h3>";
// var num = 35.36;
// var str = num.toString();
// var str = str.replace(".", "");
// document.write("Number: "  + num + "<br>");
// document.write("Result: " + str);

document.getElementById("q13").innerHTML = "<h3>Question # 13</h3>";
// var userName = prompt("Enter your name");
// for (i = 0; i <= userName.length - 1; i++) {
//     if (userName.charCodeAt(i) == 64 || userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46) {
//         alert("Please! Enter a valid username.");
//     }
// }

document.getElementById("q14").innerHTML = "<h3>Question # 14</h3>";
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

document.getElementById("q15").innerHTML = "<h3>Question # 15</h3>";
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

document.getElementById("q16").innerHTML = "<h3>Question # 16</h3>";
// var university = "University of Karachi";
// var str = university.split("");


// for (i = 0; i <= university.length - 1; i++) {

//     document.write(str[i] + "<br>");
// }

document.getElementById("q17").innerHTML = "<h3>Question # 17</h3>";
// var str = "Pakistan"; 
// var char = str.slice(-1);
// document.write("User input: " + str + "<br>" + "Last character of input: " + char);

document.getElementById("q18").innerHTML = "<h3>Question # 18</h3>";
// var text = "The quick brown fox jumps over the lazy dog";
// var i = text.match(/the/gi);

// document.write("Text: " + text + "<br>");
// document.write("There are " + i.length + " occurence(s) of word 'the'");













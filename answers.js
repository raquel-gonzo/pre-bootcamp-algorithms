// command + click https://codepen.io to run javascript code

// Setting and Swapping
var myNumber = 42
var myName = "Rachel Gonzalez"
myName = myNumber
myNumber = myName

// Print -52 to 1066
for (var num = -52; num <= 1066; num = num+1) {
    console.log("Number is ", num); 
}
console.log("Done.");

// Don't Worry, Be Happy
// helpful link: https://stackoverflow.com/questions/44008092/how-to-call-a-function-multiple-times
function beCheerful() {
    console.log("good morning!")
}
for (var i = 0; i < 98; i++){
    beCheerful();
}

 // Multiples of Three
for (var num = -300; num <0; num += 3) {
    if (num == -6 || num == -3) { // skips -3 and -6 in the loop.
        continue
    } 
    console.log("Number is "+ num);
 }


 // Printing integers with While
var num = 2000
while (num < 5281) {
    console.log("Print " + num)
    num += 1
}
console.log("Done counting."); 

// You say it's your birthday

function bDay(birthMonth, birthDay) {
    if (birthMonth == 4 && birthDay == 5)
    {
        console.log("How did you know?")
    }
    else 
    {
        console.log("Just another day...")
    }
}
 // Leap year
 // helpful link:  https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php
function leapYear(year) {
    if (year % 4 != 0) {
        console.log(year + " is not a leap year.")
    }
    if (year % 4 == 0){
        if (year % 100 != 0) {
            console.log(year + " is a leap year.")
        }
    
        if (year % 100 == 0) {
            if (year % 400 ==0) {
                console.log(year + " is a leap year.")
            }
            if (year % 400 != 0) {
                console.log(year + " is not a leap year.")
            }
        }
    }
}
  

 // Print and count
 // helpful link: https://www.freecodecamp.org/forum/t/problem-1-multiples-of-3-and-5/206277
var sum = 0 // how many numbers are divisible by 5
for (var num = 512; num < 4097; num += 1) {
    if (num % 5 === 0) {
        sum +=1 
        console.log(num)
    }
}
 console.log ("There are " + sum + " numbers divisible by 5 counting from 512 to 4096.")

 // Multiples of 6
 var num = 6;
 while (num < 60){
   if (num % 6 === 0){
     console.log(num + " is divisible by 6.");
   }
   num += 1;
 }

 // Counting the Dojo Way
// helpful link: https://repl.it/@charissayj/Counting-the-Dojo-Way
for (var num = 1; num <= 100; num +=1){
    if (num % 5 === 0){
        console.log("Coding");{
            if (num % 10 === 0){
                console.log("Dojo");
            }
        }
    } 
    else{
        console.log(num);
    }
}

// What do you know?
function whatDoYouKnow(incoming)
{
    console.log(incoming)
}
whatDoYouKnow();

// Sucker's Huge
//helpful link: https://gist.github.com/tacheshun/5587510mb_title
function suckersHuge(n){
var sum = 0;
var currentNumber = -300000
while (currentNumber <= n){
    if (currentNumber % 2 ==1){
        sum += currentNumber;
    }
    currentNumber +=1
}
return sum; 
}
console.log("The sume of odd numbers is " + suckersHuge(300000));

// Countdown by Fours
// helpful link: https://teamtreehouse.com/community/countdown-using-javascript
var num = 2016;
while (num > 0){
    console.log(num);
    num -= 4;
}
console.log("done.")

// Flexible countdown
function flexCount(lowNum, highNum, mult){
    for (var num = highNum; num > lowNum; num -= 1) {
      if (num % mult === 0) {
        console.log(num)
      }
    }
}

flexCount(2, 9, 3) // prints 9, 6, and 3

// Final countdown
function finalCount(mult, lNum, hNum, skip){
    var num = lNum;
    while (num < hNum){
        if (num != skip && num % mult === 0){
            console.log(num)
        } 
        num +=1
    }
}
finalCount(3, 5, 17, 9) 
/*****************************************/
// DIRECTIONS
// 1. Read the ENTIRE starter code & comments
// 2. Code the getCentury() method. Make sure it works before moving forward. No googling. Don't skip the learning. This isn't about points. It's about problem-solving.
// 3. Feel free to read the suffix() method, but don't edit it!
// 4. Code the printYearCentury() method.
// 5. Code the askUserYear() method.

/*****************************************/
// CENTURIES
// A century is 100 years long.
// We are in the 21st century, years 2000 to 2099
// Last century was the 20th century, years 1900 to 1999
// But the 1st century was years 1 to 99 (because there was no "year 0").
// And the 2nd century was years 100 to 199
// This method of counting has been debated, known as "strict" vs "popular". We will be using "popular". Feel free to read more here: https://en.wikipedia.org/wiki/Century#Start_and_end_in_the_Gregorian_calendar

/*****************************************/
// CODE


// TASK 1:
// returns the century of the year inputted
// assume input year ≥ 1
// Ex: 1 returns 1
// Ex: 99 returns 1
// Ex: 100 returns 2
// Ex: 305 returns 4
// Ex: 2020 returns 21
function getCentury(year) {
  // HINT: Math.floor() or Math.ceil()
  /* code below 👇 */
  
  /* code above 👆 */ 
  
}
// use these to make sure your function above is working properly
console.log(getCentury(1)); // 1
console.log(getCentury(99)); // 1
console.log(getCentury(100)); // 2
console.log(getCentury(305)); // 4
console.log(getCentury(2020)); // 21


// DO NOT EDIT THIS FUNCTION
// IT IS ALREADY DONE!!!
// returns the suffix of a number
// ex: 1 returns "st" (because 1st = firST)
// ex: 2 returns "nd" (because 2nd = secoND)
// ex: 3 returns "rd" (because 3rd = thiRD)
function suffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return "st";
    }
    if (j == 2 && k != 12) {
        return "nd";
    }
    if (j == 3 && k != 13) {
        return "rd";
    }
    return "th";
}


// TASK 2:
// prints to the document "The year X is in the Y century"
// Ex: "The year 2020 is in the 21st century."
// Ex: "The year 1900 is in the 20th century."
// Ex: "The year 1 is in the 1st century."
function printYearCentury(year) {
  /* code below 👇 */
  document.write();
  /* code above 👆 */ 
  document.write("<br>");
}

// Testing the printYearCentury() function

// The year 2020 is in the 21st century.
printYearCentury(2020);

// The year 1900 is in the 20th century.
printYearCentury(1900);

// The year 1 is in the 1st century.
printYearCentury(1);


// TASK 3:
// Ask the user to input a year
// Call the printYearCentury() function with the user's input
function askUserYear() {
  /* code below 👇 */
  
  /* code above 👆 */ 
  
}
askUserYear();

// EXTENSION:
// Write a function that gets the 2-digit year within the current century.
// Example: 2056 --> returns --> 56
// See if you can incorporate this into the `printYearCentury` function.
// Example: The year 2056 is the 56th year of the 21st century.
// Make sure you test it out!












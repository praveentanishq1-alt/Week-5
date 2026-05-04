// PART 1: Time-based Greeting
// Prompt the user for their name
let userName = prompt("Please enter your name:");

// Get the current hour (0-23)
let currentHour = new Date().getHours();
let greeting;

// Logic for time-based greeting
if (currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

// Print personalized greeting to the console
console.log(greeting + ", " + userName + "!");


// PART 2: Age and Days Lived Verification
// Prompt for birth year
let birthYear = prompt("What year were you born?");

// Calculate age and days lived
let currentYear = 2026; 
let age = currentYear - birthYear;
let daysLived = age * 365;

// Print days lived to the console
console.log("You have lived for approximately " + daysLived + " days!");

// Age verification logic
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

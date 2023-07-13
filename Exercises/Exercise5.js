//ticket booking system for a cinema

let movieType = "3D";
let age = 20;
let isVIP =true;

let ticketPrice;

if (movieType === "regular") {
  if (age < 12) {
    ticketPrice = 8;
  } else if (age >= 12 && age < 65) {
    ticketPrice = 12;
  } else if (age >= 65) {
    ticketPrice = 10;
  }
} else if (movieType === "3D") {
  if (age < 12) {
    ticketPrice = 10;
  } else if (age >= 12 && age < 65) {
    ticketPrice = 15;
  } else if (age >= 65) {
    ticketPrice = 12;
  }
} else if (movieType === "IMAX") {
  if (age < 12) {
    ticketPrice = 12;
  } else if (age >= 12 && age < 65) {
    ticketPrice = 18;
  } else if (age >= 65) {
    ticketPrice = 15;
  }
}

if (isVIP) {
  ticketPrice += 5;
}

console.log(" The Ticket Price is $" + ticketPrice);

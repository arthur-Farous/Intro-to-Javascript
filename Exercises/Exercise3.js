// Step 1: Define variables for principal amount, interest rate, and time period
const principal = 6000;
let interestRate = 0.05;
const timePeriod = 2;

// Step 2: Calculate the compound interest using the formula: A = P * (1 + r/n)^(nt)
const compoundInterest = principal * Math.pow(1 + interestRate, timePeriod);

// Step 3: Round the compound interest to 2 decimal places using the toFixed() method
const roundedInterest = compoundInterest.toFixed(2);

// Step 4: Display the compound interest
console.log(`Compound Interest: $${roundedInterest}`);

// Step 5: Update the interest rate by decrementing it by 0.01 using the decrement operator
interestRate -= 0.01;

// Step 6: Calculate the new compound interest with the updated interest rate
const newCompoundInterest = principal * Math.pow(1 + interestRate, timePeriod);

// Step 7: Calculate the difference between the new and previous compound interests
const interestDifference = newCompoundInterest - compoundInterest;

// Step 8: Display the new compound interest and the difference compared to the previous interest
console.log(`New Compound Interest: $${newCompoundInterest.toFixed(2)}`);
console.log(`Interest Difference: $${interestDifference.toFixed(2)}`);

// Step 9: Convert the compound interest to a string and extract the cents using string methods
const compoundInterestString = newCompoundInterest.toFixed(2);
const cents = compoundInterestString.slice(-2);

// Step 10: Display the extracted cents from the compound interest
console.log(`Extracted Cents: ${cents}`);

// Step 11: Calculate the total amount by adding the principal and compound interest
const totalAmount = principal + newCompoundInterest;

// Step 12: Display the total amount using string interpolation and the toLocaleString() method
console.log(`Total Amount: $${totalAmount.toLocaleString()}`);

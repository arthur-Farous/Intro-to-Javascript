// User Inputs
let plan = "standard";
let hasPersonalTrainer = false;
let hasMealPlan = true;

// Base Price
let basePrice;

switch (plan) {
  case "basic":
    basePrice = 10;
    break;
  case "standard":
    basePrice = 15;
    break;
  case "premium":
    basePrice = 20;
    break;
  default:
    console.log("Invalid plan en.");
    return; // Exit the code if an invalid plan is entered
}

// Additional Costs
let additionalCost = 0;

if (hasPersonalTrainer) {
  additionalCost += 5;
}

if (hasMealPlan) {
  additionalCost += 8;
}

// Discount,if user has a personal trainer& a meal plan
let discount = 0;

if (hasPersonalTrainer && hasMealPlan) {
  discount = 3;
}

//  Calculation of totalCost
let totalCost = basePrice + additionalCost - discount;

// Output
console.log("The monthly subscription cost is: $" + totalCost);

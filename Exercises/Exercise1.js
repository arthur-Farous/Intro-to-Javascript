// Step 1: Define variables for length and width of the rectangle
let length = 10;
let width = 6;

// Step 2: Calculate the area of the rectangle using the formula: area = length * width
let area = length * width;

// Step 3: Update the width by adding 2 to it using the assignment operator
width += 2;

// Step 4: Calculate the perimeter of the rectangle using the formula: perimeter = 2 * (length + width)
let perimeter = 2 * (length + width);

// Step 5: Display the calculated area and perimeter using string interpolation
console.log(`Area: ${area}`);
console.log(`Perimeter: ${perimeter}`);

// Step 6: Calculate the square root of the area using the Math object
let squareRoot = Math.sqrt(area);

// Step 7: Display the square root of the area using string interpolation
console.log(`Square Root of Area: ${squareRoot}`);

// Step 8: Convert the area to a string and display its length using string methods
let areaString = area.toString();
console.log(`Length of Area String: ${areaString.length}`);

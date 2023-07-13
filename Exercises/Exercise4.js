//Declaration of variables
const fullName= 'farous Arthur'

//Step2
let firstName=fullName.substring(0,6)
let lastName=fullName.slice(7)

//Step3
firstName=(firstName[0].toUpperCase()+ firstName.slice(1));

//Step4
let splitted= lastName.split("")
let reversed=(splitted.reverse())
let reversedLastName= reversed.join("")

//Step5
fullName.length
fullName.includes('a');

//Step6
console.log (`reversedLastName= ${reversedLastName}`)

//Step7
console.log(`firstName= ${firstName}`);
console.log(`lastName= ${lastName}`);

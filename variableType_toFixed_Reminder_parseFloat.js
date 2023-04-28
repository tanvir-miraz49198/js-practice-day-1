// (variable type) (toFixed)
// (ParseFloat) (Reminder)

// variable type
var cost = 100;
console.log(typeof cost) // ans : number
var cost = "100";
console.log(typeof cost) // ans : string
var isHappy = true ;
console.log(typeof isHappy) // ans : boolean

// toFixed , ParseFloat
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2 ;
console.log(sum)  //ans : 0.30000000000000004
sum = sum.toFixed(1)
console.log(sum) //ans : 0.3
console.log(typeof sum) // ans : string
sum = parseFloat(sum)
console.log(typeof sum) // ans : number

// Reminder
var mangos = 22;
var person = 4;
var left = mangos % person;
console.log(left)  // ans : 2 



// concat 
var firstName = "Tanvir" ;
var lastName = "hassan" ;
var fullName = firstName + lastName ;
console.log(fullName)
 // ans : Tanvirhassan
console.log(firstName + " " + lastName)
// ans : Tanvir hassan


// parsInt
var rate1 = "30" ;
var rate2 = "10" ;
var totalRate = rate1 + rate2 ;
console.log(totalRate) // ans : 3010

var rate3 = "30" ;
var rate4 = 10 ;
var totalRate2 = rate3 + rate4 ;
console.log(totalRate2) // ans : 3010

// convert string to number
var rate5 = parseInt(rate3);
var totalRate3 = rate5 + rate4 ;
console.log(totalRate3) // ans : 40


// parseFloat 
var gpa = "4.17" ;
var firstResult = parseInt(gpa);
console.log(firstResult) // ans : 4
var secondResult = parseFloat(gpa);
console.log(secondResult) // ans : 4.17
var amount;
var principal =100;
var rate =5;
var time= 5;
var noOfcompundings =20;

amount = principal*(1+(rate/noOfcompundings))**(noOfcompundings*time);
console.log("The amount is: " + amount);
document.write("The amount is: " + amount);



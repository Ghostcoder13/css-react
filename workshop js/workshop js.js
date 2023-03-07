let firstValue = parseInt(prompt("enter une valeur"));
let secondValue = parseInt(prompt("entrer une valeur"));
let operator = prompt("entrer un signe");

switch(operator){
    case "+":
        console.log(firstValue + secondValue);
    break;
    case "-":
        console.log(firstValue - secondValue);
    break;
    case "*":
        console.log(firstValue * secondValue);
    break;
    case "/":
        console.log(firstValue / secondValue);
    break;
    default:
        console.log("operateur non valide");
    break;
}




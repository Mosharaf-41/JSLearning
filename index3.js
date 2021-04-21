// var num1 = prompt("Enter num1 : ");
// var num2 = prompt("Enter num2 : ");
// var num3 = prompt("Enter num3 : ");


// if (num1 > num2 && num1 > num3) {
//     console.log("Large number = "+num1);
// }
// if (num2 > num1 && num2 > num3) {
//     console.log("Large number = "+num2);
// }
// else  {
//     console.log("Large number = "+num3);
// }

// Vowel / Consonant ...............
// var letter = prompt("Enter a letter : ");

// letter = letter.toLowerCase();
// if (letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u") {
//     console.log("Vowel");
// }
// else {
//     console.log("Consonant");
// }

//digit spelling 
//0 - Zero, 1 - One .....9 - Nine, 10 - Not a valid digit 
// var digit = prompt("Enter any digit : ");
// if (digit == 0) 
//     console.log("Zero");
// else if (digit == 1) 
//     console.log("One");
// else if (digit == 2) 
//     console.log("Two");
// else if (digit == 3) 
//     console.log("Three");
// else if (digit == 4) 
//     console.log("Four");
// else if (digit == 5) 
//     console.log("Five");
// else if (digit == 6) 
//     console.log("Six");
// else if (digit == 7) 
//     console.log("Seven");
// else if (digit == 8) 
//     console.log("Eight");
// else if (digit == 9) 
//     console.log("Nine");
//     else 
//     console.log("Not a digit");



// switch, case, break, default 

// var digit = prompt("Enter any digit : ");

// switch (digit) {
//     case "0":
//         console.log("Zero");
//         break;
//     case "1":
//         console.log("One");
//         break;
//     case "2":
//         console.log("Two");
//         break;
//     case "3":
//         console.log("Three");
//         break;
//     case "4":
//         console.log("Four");
//         break;
//     case "5":
//         console.log("Five");
//         break;
//     case "6":
//         console.log("Six");
//         break;
//     case "7":
//         console.log("Seven");
//         break;
//     case "8":
//         console.log("Eight");
//         break;
//     case "9":
//         console.log("Nine");
//         break;
//     default:
//         console.log("Not a digit");
//         break;    
// }

var letter = prompt("Enter any letter : ");
letter = letter.toLowerCase();

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");
}
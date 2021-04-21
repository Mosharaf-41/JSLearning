// reverse  a string 

function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello alien bhai brother.";
var forAlien = reverseString(statement);
console.log(forAlien);
var foodVlog = reverseString("ki khawa jai.....khida lagse");
console.log(foodVlog);
var hDoor = reverseString("esgal adihk.....iaj awahk ik");
console.log(hDoor);
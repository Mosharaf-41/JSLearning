
//Arry - is an object; collection of variables;

var names = [ "Mina", "Siam", "Ayman", "Sabina", "Anis", "Mosharaf"];
console.log(names);

// shift opposite to pop

// names.shift();
// console.log(names);

// //unshift opposite to push
// names.unshift("Saidur");
// console.log(names);

// names.splice(2,0,"Karim","Rahim");
// console.log(names);

// names.splice(0,0,"Forida");
// console.log(names);

//slice
// var newArry = names.slice(1);
// console.log(newArry);
// console.log(names);

// var sortedNames = names.sort();
// console.log(sortedNames);

// var sortedNames = names.sort();
// names.reverse();
// console.log(sortedNames);

var numbers = [20, 5, 25, 45, 1];
numbers.sort();
console.log(numbers);

var numbers = [20, 5, 25, 45, 1];
numbers.sort(function (a,b) {
    return a-b;
});
console.log(numbers);

var numbers = [20, 5, 25, 45, 1];
numbers.sort(function (a,b) {
    return b-a;
});
console.log(numbers);
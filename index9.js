
// Student details
// object 

// var student1 = {
//     name : " Siam",
//     age : 27,
//     cgpa : 3.25,
//     lang :["Bengali", "Hindi", "English"]
// }

// var student2 = {
//     name : " Babu",
//     age : 42,
//     cgpa : 2.25,
//     lang :["Bengali", "Hindi"]
// }

// var student3 = {
//     name : " ayman",
//     age : 7,
//     cgpa : 1.25,
//     lang :["Bengali", "English"]
// }
// var student4 = {
//     name : " Sabina",
//     age : 27,
//     cgpa : 3.45,
//     lang :["Bengali", "Arabic", "English"]
// }
// console.log(student4.name);

// adding a constructor

// adding function inside a constructor
function Student(name,age,cgpa,lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
        
    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student ("Sabina",27,3.45,["Bengali", "Arabic", "English"]);
var student2 = new Student ("Siam",7,3.45,["Bengali", "Hindi", "English"]);
var student3 = new Student ("Ayman",2,3.45,["Bengali", "nepali", "English"]);
var student4 = new Student ("Mosharaf",32,3.45,["Bengali", "Arabic", "English"]);

student1.display();
student2.display();
student3.display();
student4.display();
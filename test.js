var name = [3, 6,6,7, 3,6,2,5,4];
var uName = [];

for (var i=0; i<name.length; i++ ){
    var element = name[i];
    var index = uName.indexOf(element);
    if (index == -1) {
        uName.push(element);
    }
}

console.log(uName);
function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78, 12];
var result = getArraySum(numbers);
console.log("Total of the numbers: ", result);
var total = getArraySum([42, 45, 12, 48, 69, 78, 95]);
console.log("Total of the numbers: ", total);
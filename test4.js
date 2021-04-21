// function ...............

nums = [ 5, 12, 89, 18, 8 ,12];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
   if (num % 2 == 0) {
       console.log(num, ": is even number");
   }else{
    console.log(num*2, ": is odd number");
   }
    
}

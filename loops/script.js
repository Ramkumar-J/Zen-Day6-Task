// Part 2 : Find the culprits and nail them — debugging javascript loops

// Write a code to print the numbers in the array
// Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i];
}
console.log(new_string);

// Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] + ","; 
}
console.log(new_string);

// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 10; i >= 0; i-- ) {
 new_string += numsArr[i] + " "; 
}
console.log(new_string);

// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
    if(numsArr[i] %2 == 0 )
    {
    numsArr[i] = "even";
    }
   }
   console.log(numsArr);

// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
    if(numsArr[i] %2 !== 0 )
    {
    numsArr[i] = "even";
    }
   }
   console.log(numsArr);
   
// Write a code to add all the numbers in the array
// Output: 66
let numsArra = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum=0;
for (let i = 0; i < numsArra.length; i++) {
    sum += numsArra[i];
   }
   console.log(sum);

// Write a code to add the even numbers only
// Output: 30
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1=0;
for (var i = 0; i < numsArr.length; i++) {
 if(numsArr[i]%2==0){
 sum1 += numsArr[i];
}
}
console.log(sum1);

// Write a code to add the even numbers and subract the odd numbers
// Output: 94
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2=100;
for (var i = 0; i < numsArr.length; i++) {
 if(numsArr[i]%2 == 0)
 {
 sum2 += numsArr[i]
 }
 else
 {
 sum2 -= numsArr[i]
 }
}
console.log(sum2);

// Write a code to print inner arrays
// Output: Array(5) [ 1, 2, 3, 4, 5 ] , Array(6) [ 6, 7, 8, 9, 10, 11 ]
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++){
 console.log(numsArr[i]);
}

//* Write a code to print elements in the inner arrays
// Output: 1234567891011
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
     str_all +=inner_array[j];
 }
}
console.log(str_all);

// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
      if(inner_array[j]%2 !== 0 )
      {
        inner_array[j] = "even"
       }
    }
}
console.log(numsArr);

//* Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j =inner_array.length ; j >= 0 ;j-- )
     str_all +=inner_array[j]+" ";
}
console.log(str_all);

// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++){
 if(inner_array[j]%2 == 0)
 {
 sum_odd += inner_array[j]
 }
 else
 {
 sum_even += inner_array[j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);

console.log('------------');


// Part 3: Find the culprits and nail them — debugging javascript

// Fix the code to get the largest of three.
let aa = (f,s,t) => {
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
aa(2,6,3);

// Fix the code to Sum of the digits present in the number
let n = 4;
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n;i++){
 sum +=i;
 }
 return sum;
}
// let a=add(n);
// console.log(a);

// Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function(arr) {
    let sum = 0;
    for (var i = 0; i <= arr.length; i++){
    sum += arr[i];
    console.log(sum);
    }
    return sum;
   })(arr);

// Fix the code to gen Title caps.
// var array = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
//     for (var i = 0; i <= arro.length; i++) {
//     console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//     }
//    }
//    ano(array);

// Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%2===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);
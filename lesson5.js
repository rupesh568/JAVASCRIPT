/*Function:Function is a block of code which is used to perform specific task.
Itis reusable code which we can use from any part of the code*/



function myFunction(){
    console.log("I am learning web development");
    console.log("I am learning JS");
}
myFunction();

//parameter ==argument are same things:
function myMessage(msg){
    console.log(msg);
}
myMessage("I love JS");


//sum of two numbers using function:
function sumNumber(num1,num2){
    sum=num1+num2;
    return sum;
}
let result=sumNumber(2,3);
console.log(`The sum is ${result}`);
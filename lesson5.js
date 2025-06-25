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
function sumNumber(num1,num2){ //parameters are local variable means it is alive within the block of the funtion only but not oustside of it.
    sum=num1+num2;
    // console.log(num1);
    return sum;
}
let result=sumNumber(2,3);
console.log(`The sum is ${result}`);

//product of two vaiable;
function productNum(a,b){
    return a*b;
}
let relsult2=productNum(3,4);
console.log(`The product is ${relsult2}`);


//Arrow funtion:It is the simplest form of writing of function:

const sumNum1=(x,y)=>{
    return x+y;
}
let result3=sumNum1(4,4);
console.log(result3);
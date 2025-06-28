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

let arrowMulti=(a,b,c)=>{
    console.log(a*b*c);
}
arrowMulti(2,2,2);

let printHello=()=>{
    console.log("hello world");
}
printHello();

//practise question:
//Q1.Create a function using "function" keyword that takes a string as an argument & retruns the number of vowels in the string;
function Functionstr(letter){
    let count=0;
    let count1=0;
    for(let i of letter){
        if (i=="a" || i=="e" || i=="i" || i=="o" ||i=="u"){
            count++;
        }
        else{
            count1++;
        }
    }
    console.log(count);
    console.log(count)

}
Functionstr("rupesh");
 //same question using arrow function:
 const countLetter=(str)=>{
    let count1=0;
    for(let i of str){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count1++;
        }
    }
    console.log("Vowel Letters=",count1);
 }
 countLetter("umberalla");

 //Call Back Function:A call back function is a function that passed as an argument to another function.
let arr=[1,2,3,4,53,3];
arr.forEach(function printElement(val){ //val means each element of the array;
    console.log(val);
});

//using arrow function:
let arr2=[4,5,6,7,8];
arr2.forEach((val)=>{
    console.log(val);

});

let str_ing=["delhi","mumbai","pune"];
str_ing.forEach((val,i,str_ing)=>{
    console.log(val.toUpperCase(),i,str_ing);
})

/*Note:Higher order function:forEach funcition is called higher order function.A higher order function is that function that either take parameter as another function or return the function value.*/

//Q2.For a given array of numbers,print the square of each value using the forEach loop.

let arr4=[2,3,4,5,6,8,9];
arr4.forEach((val)=>{
    console.log(val**2);
})


//Loops :Loops is used to repeat certain instructions multiple times:
//There are SIX types of loop in javascript:
//1.FOR LOOP:

for(let i=1;i<=10;i++){
    console.log("hello world");//pint hello world 10 times:
}


//calculate the sum of first n number:
let n=prompt("Enter the value of n");
let sum=0;
for(let i=0;i<=n;i++){
    sum+=i;
}
console.log("sum=",sum);

//print 1 to 5
for(let i=1; i<=5;i++){
    console.log("i=",i);
}
//Table of 3 using for loop;
let num=prompt("Enter the value of num:");
for(let i=1; i<=10;i++){
    console.log(num*i);
}

//To print even number from 2 to 10;
for(let i=2;i<=10;i+=2){
    console.log("i=",i);
}
//2.Infinite loop:
// for(let i=1;i>=0;i++){
//     console.log("i=",i);
// }

//3.While Loop:
let i=1;
while(i<=10){
    console.log("rupesh",i);
    i++;
}

//4.do While Loop:
{
    let i=10;
    do{
        console.log(i); //at least print once time even though the stopping codition doesn't match;
        i++;
    }while(i<=5);
}

//5.FOR -OF -LOOP:is used to bring each charter of a sting or array;
let str="rupesh";
let size=0;
for(let val of str){
    console.log("val=",val);
    size++;
}
console.log("length of loop=",size);

//6.FOR -IN -LOOP:is used to print the each key of an object;
const student={
    fullName:"Rupesh Kumar Chaudhary",
    age:20,
    isPass:true,
    cgpa:10,
};
let len=0;
console.log(student);
for(let key in student){
    console.log("key=",key, "and value=",student[key]);
    len++;
}
console.log("length of key=",len);

//Q1.print all even numbers from 0 to 100;

for(let i=0;i<=100;i+=2){
    console.log("even number=",i);
}
//Another way of solving same problem;
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("even=",i);
    }
}

//Q2.Create a game where you start with any random game numer.Ask the user to keep guessing the game number until the user enters the correct value

let gameNumber=23;
let userNumber=prompt("Enter the correct number:");
while(userNumber!=gameNumber){
    userNumber=prompt("you have entered the wrong number.please enter correct");

}
console.log("Congratulations ! you have entered the correct game number");

//String in javascipt:A string is a sequence of characters which is used to represent text;
{
    let str="Rupesh";
    console.log(str);
    console.log(str.length); //length of string:6
    console.log(typeof(str));//type of str:string
    console.log(str[0]);//:R
    
}


//Template Literals in Js:A way to have embedded expressions in string:`this is a template literal`

let str2=`this is a template literal`;
console.log(str2);
console.log(str2.length);
console.log(typeof(str2));

//Best example of template literals:
const product={
    pname:"book",
    price:20,
};
console.log("The price of",product.pname,"and price is:",product.price);
console.log(`The price of ${product.pname} is ${product.price}`)

console.log("Rupesh\nKumar");
let one="Rupesh\tKumar";
console.log(one.length); //13


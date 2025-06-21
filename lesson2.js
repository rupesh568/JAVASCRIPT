//single line comment:
//This is a single comment
//multiline comment:
/*This is a multiline 
comment in javascript 
programming language*/

/*OPERATOR IN JS:
1.Arithmetic operator*/
let a=2;
let b=4;
console.log("a+b=",a+b);//sum
console.log("a-b=",a-b);//difference
console.log("a*b=",a*b);//product
console.log("a/b=",a/b);//divison
console.log("a%b=",a%b);//modululus
console.log("a**b=",a**b);//exponentitation
console.log("++a=",++a);//pre inrement
console.log("--a=",--a);//pre decrement
console.log("a++=",a++)//post increment
console.log("a=",a);
console.log("a--=",a--)//post decrement
console.log("a=",a);

//2.Assignment Operator:
let num1=2;
let num2=4;
num1+=2;//num1=num1+2
console.log("num1=",num1);//4
num1-=1;//num1=num1-1
console.log("num1=",num1);
num1*=2;//num1=num1*2
console.log("num1=",num1);
num1/=1;//num1=num1/1
console.log("num1=",num1);
num1%=2;//num1=num1%2
console.log("num1=",num1);
num1**=3;//num1=num1**3
console.log("num1=",num1);

//3.Comparison or relational operator;
let p=4;
let q=3;
console.log("p>q=",p>q);//true
console.log("p<q=",p<q);//false
console.log("p>=q=",p>=q);//true
console.log("p<=q=",p<=q);//false
let x=2;
let y="2";
console.log("x==y=",x==y);//true;
console.log("x!=y=",x!=y);//false;
console.log("x===y=",x===y);//false
console.log("x!==y",x!==y);//true

//4.Logical Operator:
{
    let a=8;
    let b=4;
    console.log("a>b && a<b=",a>b && a<b);//false which is and operator
    console.log("b<a || a>b=",b<a || a>b);//true which is or operator
    console.log("a!=b=",a!=b);//true which is not operator
}
//Conditional statements:
let age=24;
if(age>=18){
    console.log("can vote");
}
if(age<18){
    console.log("cannot vote")
}

let mode="dark";
let color;
if(mode=="dark"){
    color="white";
}
if(mode=="black"){
    color="blue";
}
console.log(color);
/*{}this means i have used same variable multiple times so i have used blocks*/
// if-else statement:
{
 let age=11;
 if(age>=18){
    console.log("can vote");
 }
 else{
    console.log("cannot vote")
 }
}
//if -elseif-else statement;
{
//Largest of three numbers;
let a=2;
let b=3;
let c=4;
if(a>=b && a>=c){
    console.log("The greatest number is a:",a);
}else if(b>=a && b>=c){
    console.log("The greatest number is b:",b);
}else{
    console.log("The greatest number is c:",c);
}
}
//Program to swap two numbers with and without using third variable.
{
    //using third variable:
    let a=2;
    let b=3;
    let c;
    console.log("Before swapping:","a=",a,"and b=",b);
    c=a;
    a=b;
    b=c;
    console.log("After swapping:","a=",a ,"and b=",b);

    //without using third variable:
    a=a+b;
    b=a-b;
    a=a-b;
    print("After swapping wihout using thid variable:a=")
    
}





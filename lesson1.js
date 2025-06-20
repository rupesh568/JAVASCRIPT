console.log("Rupesh Kumar Chaudhary");
//varible rules:
fullName="Rupesh";
FULLNAME="Rupesh";
fullName44="Rupesh";
full_Name="Rupesh";
//22fullname="rupesh" is incorrect way;
console.log(FULLNAME);

//let,const &var:
let a=3;
a=5;
a=3
console.log(a); //3

{
    let x=5;
    console.log(x)
}
{
    let x=9
    console.log(x)
}
const radius=3.14;
console.log(radius);


//Data types:TWO TYPES:Primitive and Non primitive:
//.1.Primitive:Number,String,Boolean,Undefined,Null,BigInt,Symbol;
let myName="Rupesh Kumar Chaudhary";
let age=20;
let isPass=true;
let x=null;
let y=undefined;
let p=BigInt("3");
let q=Symbol("xyz");
console.log(myName);
console.log(typeof(myName));
console.log(age);
console.log(typeof(age));
console.log(isPass);
console.log(typeof(isPass));
console.log(x);
console.log(typeof(x));
console.log(y);
console.log(typeof(y));
console.log(p);
console.log(typeof(p));
console.log(q);
console.log(typeof(q));

//2.Non-Primitive data type:OBJECT;
const student={
    MYNAME:"RUPESH",
    AGE:20,
    CGPA:10,
    ISPASS:true,
};
console.log(student);
console.log(typeof(student));
console.log(student["MYNAME"]);
console.log(student.AGE);
student["MYNAME"]="AARAV";
console.log(student.MYNAME);


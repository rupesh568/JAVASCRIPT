//some methods of array:

//1.forEach Function:This function takes parameter as another function or returns the function value:

let arr5=[2,3,4,5,6];
arr5.forEach((val)=>{
    console.log(val);
});



//2.Map method:It is used to create a new array using the same value;
let arr=[1,2,3,4,5,6,7,8];
let newArr=arr.map((val)=>{
    return val;
});
console.log(newArr);

//To find square of an array using map method:
let arr2=[1,2,4,5];
let newarr2=arr2.map((val)=>{
    return val**2;
});
console.log(newarr2);

//3.Filter Function:It is used to filter the array based on certain condition like odd,even,less than etc.
let arr4=[2,3,4,5,6,7,8];
let newArr4=arr4.filter((val)=>{
    return val%2===0; //return all even number;
});
console.log(newArr4);


//4.Reduce Function:It is used to reduce multiples input values into a single output value.for example=To calculate the sum of 10 numbers we uses 10 numbers as input but the ouput is only one number:
let Arr=[1,2,3,4,4,4];
const sumArr=Arr.reduce((result,current)=>{
    return result+current;
});
console.log(sumArr);

//To find the largest of multiple number in an array:
let arr6=[1,2,3,11,5,22,1];
let  newValue=arr6.reduce((result,current)=>{
    return result>current ? result :current;
});
console.log("largest_num=",newValue);


//Practise Questions:
//Q1.We are given array of marks of students.Filter out of the marks of students that scored 90+;
let arrMarks=[10,20,55,90,93,94,44,33];
const result=arrMarks.filter((val)=>{
    return val>90;
});
console.log("marks>90=",result);

/*Q2.Take a number n as input from user.Create an array of numbers from 1 to n .
use the reduce method to calculate sum of all numbers in the array.
use the reduce method to calculate product of all numbers in the array.*/
let n=prompt("Enter the number:");
let arr8=[];
for(let i=1;i<=n;i++){
    arr8.push(i);

}
console.log(arr8);
//calculate the sum of all numbers;
let newArr8=arr8.reduce((result,current)=>{
    return result+current;
});
console.log("Sum=",newArr8);

//calculate the product of all numbers of array;
let productArr=arr8.reduce((result,current)=>{
    return result*current;
});
console.log("Product=",productArr);





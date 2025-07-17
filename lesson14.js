//Synchronous:It means code runs in a particular  sequence of instructions given in the program.Each instruction waits for the previous instructions to complete its execution.
//Example-
console.log("first instruction");
console.log("second instruciton");
console.log("third instruction");
console.log("fourth instruction");

//Asynchronous:Due to synchronous programming,sometimes imp instructions ge blocked due to some previous instructions,which causes a deleay in the UI.Asynchrounous code execution allows to execute the next instructions immediately and doesn't block the flow.
//Example:
function printHello(){
    console.log("hello");
}
setTimeout(printHello,3000);

setTimeout(()=>{
    console.log("rupesh");

},4000);
console.log("fifth instrucion");
console.log("sixth instructions");

//callback function:The function in which we pass another function as argument is called callback function.
//1.callback function in synchrounous;
// function printSum(a,b){
//     console.log(a+b);
// }
// function calculate(a,b,sumcallback){
//     sumcallback(a,b);

// }
// calculate(1,3,printSum);
// //2.callback function in asynchrounous:
// setTimeout((a,b)=>{
//     console.log(a+b);
// },2000);

// setTimeout(()=>{
//     console.log("js");
// },2000);

// const printValue=(a,b)=>{
//     console.log(a+b);
// }
// printValue(2,3);

// setTimeout(()=>{
//     printValue(3,3)
// },5000);

// const newValue=()=>{
//     console.log("learning js");
// }
// setTimeout(newValue,8000);

let printSum=(a,b)=>{
    console.log(a+b);
}
setTimeout(()=>{
    printSum(3,3)
},4000);

function printWord(){
    console.log("word");
}
setTimeout(printWord,3000);

//Callback hell:Nested callbacks stacked below one anohter forming a pyramid structure.This type of styling can be difficult to manage and do.
//example of nesting:
let age=52;
if(age>=19){
    if(age<=55){
        console.log("middle age");
    }
    else{
        console.log("old")
    }
}
else{
    console.log("minor age");
}

//Real Life example of callback hell:
function getData(dataId){
    setTimeout(()=>{
        console.log("data",dataId)
    },4000);
}
getData(1);
getData(2);
getData(3);//here all these things come in 4sec but we need one after another with the gap of 4sec.Now we will be using callback hell function.
function getdata1(dataId1,getNewData){
    setTimeout(()=>{
        console.log("data",dataId1);
        if(getNewData){
        getNewData();
    }
    
    },2000);

}
//The below code is callback hell code;
getdata1(10,()=>{
    console.log("data 2 is loading.....");
    getdata1(20,()=>{
        console.log("data 3 is loading.....");
        getdata1(30,()=>{
            console.log("data 4 is loading.....");
            getdata1(40)
        })
    })
});

/*Promises:To solve call back hell problems we use promises;
Promise is for eventual completion of task.Tt is an object in JS.It is a solution to callback hell.*/
let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    reject("some error occured");
});
console.log(promise);

//reslove & reject are callbacks provided by JS.
let promise2=new Promise((resolve,reject)=>{
    console.log("This is a promise");
    resolve("This is resolved");
});
console.log(promise2);

function
 



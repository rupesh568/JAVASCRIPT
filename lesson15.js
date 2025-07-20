//promise chain:means using one then into another then.
function getValue(getId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data=",getId);
            resolve("success");
        },2000);
    });
}
let promise=getValue(1);
promise.then((res)=>{
    console.log(res);
    let promise2=getValue(2);      //first way of doing
    promise2.then((res)=>{
        console.log("success");
    });
});


getValue(1).then((res)=>{
    console.log("data 2 is loading");
    getValue(2).then((res)=>{
        console.log("data 3 is loading");  //second way of doing
        getValue(3);
        console.log(res);
    });
});

getValue(1)
    .then((res)=>{
        console.log("data 2 is loading");
        return getValue(2);
    })
    .then((res)=>{
        console.log("data 3 is loading");
        return getValue(3);
    })
    .then((res)=>{
        console.log("data 4 is loading");
        console.log(res);
        return getValue(4);
        
    });

//Async:It is used with the before the function keyword in function and made the function asynchronous.It always return a promise.
async function printHello(){
    console.log("hello world");
};


function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}
async function getWeatherdata(){
    console.log("getting data 1..");
    await api();
    console.log("getting data 2..");
    await api();
    console.log("getting data 3..");
    await api();

}

// let weather=getWeatherdata();
// console.log(weather);
//await pauses the execution of its surrounding async function until the promise is settled.

//Note:when we use async await then we will not use .then or .catch and vice versa;

function getData22(ID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(ID);
            resolve("success");
        },2000);
    });
}

async function getValue(){
    console.log("getting data 1.....");
    await getData22(1);
    console.log("getting data 2.....");
    await getData22(2);
    console.log("getting data 3.....");
    await getData22(3);
}
getValue();
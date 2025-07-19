//promise chain:means using one then into another then.
function getValue(getId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data=",getId);
            resolve("success");
        },2000);
    });
};
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

//Async:It is used with the before the function keyword in function and made the function asynchronou.

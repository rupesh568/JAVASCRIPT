let URL="https://jsonplaceholder.typicode.com/posts";
let promise=fetch(URL);
console.log(promise);
let btn=document.createElement("button");
btn.innerText="click me!";
document.body.prepend(btn);

const getData=async()=>{
    console.log("getting data.....");
    let response=await fetch(URL);
    console.log(response);
    console.log(response.status);
    console.log(response.type);

    let data=await response.json();
    console.log(data[0].body);
    let para=document.querySelector("#para");
    para.innerText=data[0].body
    console.log(data[1].body);
    btn.addEventListener("click",(e)=>{
        console.log(data[1].body);
    })
}
getData();

// let para=document.querySelector("#para");
// para.innerText=data[0].body

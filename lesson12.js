let body=document.querySelector("body");

let modebtn=document.querySelector("#mode");
let currMode="light";
modebtn.addEventListener("click",(e)=>{
    if(currMode=="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light")
        // document.querySelector("body").style.backgroundColor="black";
     
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
        // document.querySelectorocument("body").style.backgroundColor="white";
    }
    console.log(currMode);
})

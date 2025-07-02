//Event:The changing in state of an object is called event.
//Events are fire to notify code of"ineresting changes" that may affect code execution.
/*1.Mouse events(click,double,click)etc
2.Keyboard events(keypress,keyup,keydown)
3.Form events(submit etc)
4.Print event & many more */

//Note:We can do event handling in inline ways as well in html code but it is not good .so we will be using JAVASCRIPT to do it.
let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn1 is clicked");
    let a=24;
    a++;
    console.log(a);
    alert("hello");
}


let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are on the div");
}
//Note:The priority of inline html event code is lesser than the event set on js.

//Event Object:It is a special type of object which have all details about the object.All event handlers have access to the event object's properties and methods.
/*node.event=(e)=>{
    //handle her
}
e.target,e.type,e.clientX,e.clientY */

let btn2=document.querySelector(".btn2");

btn2.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
}

let div2=document.querySelector("#box8");
div2.onmouseover=(e)=>{
    console.log("you are on the div rupesh");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
}

//Event Listener:Best way of event handling as well as seeing event object both:

//to add an event:node.addEventListener("event",callback function)
//to remove an event:node.removeEventListener("event",callback function)

let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",(e)=>{
    console.log("Btn3 was cliked - handler1");
})

btn3.addEventListener("click",(e)=>{
    console.log("Btn3 was cliked - handler2");
})
const handler3=(e)=>{
    console.log("Btn3 was cliked - handler3");


}
btn3.addEventListener("click",handler3);
btn3.addEventListener("click",(e)=>{
    console.log("Btn3 was cliked - handler4");
})

btn3.removeEventListener("click",(handler3));
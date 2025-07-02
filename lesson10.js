//PRACTISE QUESTIONS:
//Q1.Create a new button element.Give it a tet "click me",background color of red & text color of white;
//Insert the button as the first element inside the body tag.
let newButton=document.createElement("button");
newButton.innerText="click me";

newButton.className="button1";
newButton.style.backgroundColor="green";
newButton.style.color="white";



document.querySelector("body").prepend(newButton);


//Q2.Create a <p> tag in html,give it a class & some styling.
//Now create a new class in CSS and try to append this class to the <p> element.
//Did you notice ,how you overwrite the class name when you add a new one?
//solve this using classList.

let class4=document.querySelector(".two");
let para3=document.querySelector("p");

//using class list;
console.log(para3.classList.add("two")); 

//To get the value of attributes:
/*Attributes:It is the additional information present in any tags like its .example=id,class,img,anchor text etc.*/
//1.getAttibute(attr)//to get the attributre value
//2.setAttribute(attr,value) // to set the new attribute value

//3.For style:node.style



let div=document.querySelector("div");
console.log(div.getAttribute("id"));
// div.setAttribute("id","one");
// console.log(div.getAttribute("id"));

//for paragraph ;
let para=document.querySelector("p");
console.log(para.getAttribute("class"));
para.setAttribute("class","newClass");
console.log(para.getAttribute("class"));

//3.Changing style of css or html using js code:
let div2=document.querySelector("div");
div2.style.backgroundColor="blue";
div2.style.fontSize="30px";


//DOM MANIPULSTION:
//INSERT ELEMENTS WITH THE HELP OF JS;
//.node.append(el) //adds at the end of the node(inside)
//.node.prepend(el) //adds at the start of node(inside)
//.node.before(el) //adds before teh node(outside)
//.node.after(el) //adds after the node(outside)

//Delete Element:
//node.remove() //

//we have added a new button using js;

let newButton=document.createElement("button");
newButton.innerText="Click";
console.log(newButton);
console.log(newButton.innerText);
newButton.className="buttonclass"; //given class name to set its property in css;

let div3=document.querySelector("div");
div3.append(newButton); //button comes at the last of the dive inside div:
div3.prepend(newButton);//button comes at the start of the dive inside div:
div3.before(newButton);//button comes before the div
div3.after(newButton);//button comes after the div

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>I am Rupesh Kumar Chaudhary</i>";
console.log(newHeading);

document.querySelector("body").prepend(newHeading);

let parg1=document.querySelector("p");
parg1.remove();





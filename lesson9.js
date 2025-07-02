//To get the value of attributes:
/*Attributes:It is the additional information present in any tags like its .example=id,class,img,anchor text etc.*/
//1.getAttibute(attr)//to get the attributre value
//2.setAttribute(attr,value) // to set the new attribute value

//3.For style:node.style



let div=document.querySelector("div");
console.log(div.getAttribute("id"));
div.setAttribute("id","one");
console.log(div.getAttribute("id"));

//for paragraph ;
let para=document.querySelector("p");
console.log(para.getAttribute("class"));
para.setAttribute("class","newClass");
console.log(para.getAttribute("class"));
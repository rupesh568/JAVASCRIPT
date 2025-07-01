// let fruit=document.querySelector("div");
console.log(fruit);
console.dir(fruit);
console.log(fruit.tagName);
console.log(fruit.innerHTML);
console.log(fruit.innerText);

//Note:We can change the value of it as well.
let heading=document.querySelector("h2");
console.dir(heading);
console.log(heading);
heading.innerText="Rupesh";//WE HAVE CHAGNED THE INNER TEXT
console.log(heading);
heading.innerHTML="<p>This is a paragraph</p>"//WE HAVE CHANGED THE INNER HTML
console.log(heading.innerHTML);
console.log(heading.innerText);

let heading5=document.querySelector("h5");
console.log(heading5);
console.log(heading5.textContent);


/*Practise Question:
1.Create a h2 heading element with text-"Hello JavaScript".Append "from Apna College students " to this text using JS.*/
let appen=document.querySelector("h2");
let inner_text=appen.innerText;
let result=inner_text.concat(" from Apna College students");
console.log(result);

/*2.Create 3 divs with common class name-"box".Access them & add some unique text to each of them.*/
let allClass=document.querySelectorAll(".box");
console.log(allClass);
console.log(allClass.length);
// for(let i in allClass){
//     console.log(allClass[i]);
// }
allClass.forEach((val)=>{
    console.log(val.innerText);

});
allClass[0].innerText="This is box1";
allClass[1].innerText="This is box2";
allClass[2].innerText="This is box3";

allClass.forEach((val)=>{
    console.log(val.innerText);
});


/*Window Object:The window object represents an open window in a browser.It is a browser's object(not javascript's) and is automatically created by brower.
It is a global object with alots of properties and methods.*/

//Note:console.dir(widow.document)=>is used to print all the properties of html code or entire html code.


/*DOM:It stands for document object model.When a page is loaded ,the brower creates a Documents object model(DOM) of the page.
It is like window.document(object)=>document(object)=>html=>head,body:,head=>meta title, meta description,meta keywords etc.:,body:<div>,<script>*/


console.dir(window.document);
console.log(window.document);
console.dir(document.body);
console.log(document.body);
console.dir(document.body.childNodes[1]);
console.log(document.body.childNodes[1]);
document.body.style.background="blue";
document.body.childNodes[1].style.background="red";
document.body.childNodes[3].style.background="pink";


/*DOM Manipulation:DOM Manipulation means changing the content, structure, or style of a webpage using JavaScript by interacting with the Document Object Model (DOM).It also means accessing the elements by theri id,classes or tags.*/

//Accessig html tags using ID'S;
let heading1=document.getElementById("heading1");
console.dir(heading1);
let heading2=document.getElementById("heading2");
console.dir(heading2); 

//Accessing html tags using CLASS:

let heading3=document.getElementsByClassName("heading-class");
console.log(heading3);
console.dir(heading3);

//Accesssing html tags or webpage content using tags:
let paragraph=document.getElementsByTagName("pre");
console.dir(paragraph);

//Accesssing html tags or webpage content using queryselector:h=This is the best method.

let element=document.querySelector("pre");
console.dir(element); //first pre content not all to do all we have to use queryselectorall;

let element2=document.querySelectorAll("pre");
console.dir(element2);


//same for class;
let allClassElement=document.querySelectorAll(".heading-class");
console.dir(allClassElement);

let button=document.querySelector("button");
console.dir(button);
console.log(button); //This print the entire code of button tag.
console.log(button.tagName);

/*Dom properties:
1.tagName:return tag for element nodes.
2.innerText:returnn the text content of the element and its children.
3.innerHTML:returns the plain text or HTML contents in the element;
4.textContent:returns textual content even for hidden elements.*/

let a=document.querySelector("div").children;
console.log(a); //tagname;
console.dir(a);

/*Note:
1.Element Node:It is the actual tag of the html like h1,div,span etc.
2.Text Node:It is the content inside the element tag.
3.Comment Node:It is the comment.*/













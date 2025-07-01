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
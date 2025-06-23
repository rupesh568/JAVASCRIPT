//Arrays:Arrays is the collection of items.we specially use array when we want to store multiple items in the same name .otherwise we can use object as well.
let marks=[20,30,40,50];
console.log(marks);
console.log(marks.length);//4
console.log(typeof(marks));
marks[0]="99";
console.log(marks);

let heroes=["Rupesh","Aarav","Akshay","Akshat","Varun","Siddharth"];
console.log(heroes);
console.log(heroes.length);
console.log(typeof(heroes));
console.log(heroes[5]);
console.log(heroes[3]);
console.log(heroes[8]);


//Loops in array:
let fruits=["mango","apple","banana","pineapple"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//using for of loop:
for(let fruit of fruits){
    console.log(fruit);
}

let cities=["Delhi","Gurugram","Noida","Pune"];
for(let city of cities){
    console.log(city.toUpperCase());
}

//Methods in array:
//1.Push :means adding of new element at end of the array:
let vegetables=["tomato","potato","cauliflower","ginger"];
console.log(vegetables);
vegetables.push("carrot");
console.log(vegetables);

//2.Pop:delting of an item from end as well as returning it
let deleted_item=vegetables.pop();
console.log(vegetables);
console.log(deleted_item);

//3.tostring method:It is used to convert array into string:
let marks2=[33,44,55,66,66,77,88,99];
console.log(marks2);
console.log(marks2.toString());

//4.concat method:It is used to add two or more than two arrays;
let marvelHeros=["Thor","spiderman","ironman"];
let dcHeroes=["superman","batman"];
let indianHeroes=["AARAV","Kartik"]
let heroes1=marvelHeros.concat(dcHeroes,indianHeroes);
console.log(heroes1);

//5.unsift method:It is used to add element in the start of the array
let fruits3=["mango","gauva","pineapple"];
console.log(fruits3);
fruits3.unshift("apple");
console.log(fruits3);

//shift method:It is used to delete an item from the start of the arrary;
let heroes4=["Ranbir","salman","varun","kartik"];
console.log(heroes4);
let deleted_item1=heroes4.shift();
console.log(deleted_item1);
console.log(heroes4);

//slice method:It is used to access certain part of the array:
let animals=["cow","goat","tiger","lion"];
console.log(animals)
console.log(animals.slice(1,3));

//splice method:It is used to do changes in the index either adding ,deleting or replacing;
let array=[1,2,3,4,5,6,7,8];
array.splice(2,2,101,102);
console.log(array);
array.splice(2,0,101);//add new element
console.log(array);
array.splice(2,1);//delete an element
console.log(array);
array.splice(2,1,200);//replace the old value with new one;
console.log(array);


//Practise Questions:
//Q1.create an array to stroe companier ->"Bloomberg","Microsoft","Uber","Google","IBM",Netflix:
//a.Remove the first company from the array;
//b.Remove Uber and Add Ola in its place
//c.Add Amazon at the end
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
let remove_item=companies.shift();
console.log(remove_item);
console.log(companies);
companies.splice(2,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);







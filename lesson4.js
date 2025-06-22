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
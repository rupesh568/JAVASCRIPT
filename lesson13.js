const studentDetails={
    fullName:"Rupesh Kumar Chaudhary",
    CGPA:10,
    AGE:20,
    newDetails:function(){
        console.log(`my cgpa is${this.CGPA}`);
    },
    extraDetails:()=>{
        console.log("hello world");
    }
};
console.log(studentDetails);
console.log(studentDetails.extraDetails());
console.log(studentDetails.newDetails());


//Object :A javascript object is an entity having state and behaviour(properties & methods).
//JS objects have a special property called prototype.we can set it as _ _ proto _ _
const employee={
    calTax(){
        console.log("tax is 10%");
    },
};
console.log(employee.calTax());

const Rupesh={
    salary:100000,

};

const Rupesh2={
    salary:100000,

};

const Rupesh3={
    salary:100000,

};

const Rupesh4={
    salary:100000,
    calTax(){
        console.log("tax is 20%");
    }

};


Rupesh.__proto__=employee;
Rupesh2.__proto__=employee;
Rupesh3.__proto__=employee;
Rupesh4.__proto__=employee;
console.log("accessing object=",Rupesh4.calTax());

//Note:If object and prototype have same method ,then object method will be used.

//Classes:Classes are blueprint for creating an objects.All the objects having same class will get all the properties,methods of that class.

class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    set(brand){
        this.brand=brand;
    }
}

let fortuner=new ToyotaCar();
console.log(fortuner);
console.log(fortuner.start());
console.log(fortuner.stop());
fortuner.set("fortuner");

let Legender=new ToyotaCar();
console.log(Legender);
Legender.set("Legender");

//Note:We create class to store multiples data under the same template.eg-A bank want to store the details of each emplyee .so in this case the data of each individual will be same.

//Constructor:It is special type of method which is created whenever an object is created even the constructor is not mentioned or defined in the class and if it is defined then all the properties,methods will shown automatically whenever the object is initialized.

class bankEmployee{

    constructor(name,age,grade){
        console.log("creating of an object");
        this.name=name;
        this.age=age;
        this.grade=grade;
    }
    
    comingTime(){
        console.log("10AM");
    }
    leavingTime(){
        console.log("4PM");
    }
    employeeName(fullName){
        this.fullName=fullName;
    }
}
let Aniket=new bankEmployee("Rupesh",20,10);
console.log(Aniket);

let Vishal=new bankEmployee("Vishal",19,9);
console.log(Vishal);


//Inheritance in JS:Ineritance means passing of properties and methods to child class from parent class.

class Students{
    eat(){
        console.log("eat food");
    }
    sleep(){
        console.log("sleep at night");
    }
    rest(){
        console.log("take some rest")
    }
}
class Engineer extends Students{
    work(){
        console.log("do engineering");
    }
}
let Ram=new Engineer();
console.log(Ram);
console.log(Ram.work());
console.log(Ram.eat());//accesssed the parent class property.
console.log(Ram.sleep());//accesse the parent class property

class Doctor extends Students{
    work(){
        console.log("treat the patient");
    }
    rest(){
        console.log("take rest after completing work");
    }
}
let rajDoctor=new Doctor();
console.log(rajDoctor);
console.log(rajDoctor.work());
console.log(rajDoctor.eat());
console.log(rajDoctor.rest());

//Note:If parent class and child class have same method then child class method will be shown as it have higher priority.
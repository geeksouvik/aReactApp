// var has scope in the entire function
// let has scope in the required block itself
// const has scope in the required block only
// its is prereble to use const over let, use let only if u wanna reassign that variable again

// objects: In javascript objects are a key value pair
/* 
    In an object if you define a function its called a "method"

    const person= {

    name: 'souvik',
    walk: function(){},
    talk() {}               //here  talk is also a function, and the general way to define these things is like this only

    };

    //Accesing these attributes

        person.talk();      // use the dot notation when we know before hand which property we gonna use

        const member= 'name';           // use this when you dont know early enough which property to access
        person[member.value]= '';
*/

/*
    very important this keyword

    in javascript this always returns a reference to the current object

    when we do person.talk(), we call the method then this returns a reference to the current object

    But when we do const hello = person.talk; and then hello(); it  returns invalid and not a reference to the object 

    The value of this is determined by how a function is called, if we call a fuction as a method in the object then "this" will always 
    return a refernce to that object.

    But if you call a function like a standalone object or outside of an object then "this " will return a global object which is the 
    window object in the browsers. the console output was something like this

    Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

        const person = {
            name: "souvik",
            talk() {
                console.log(this);
            },
        };


        person.talk();

        const hello = person.talk;
        console.log(hello);
        hello();
*/

/*
        Binding (i like the concept)

        Functions in javascript are objects, they have properties and methods that we can use.

        Since these functions are objects we can access methods related to it, one of them is bind method. With this method we can  
        permanently set the value of "this"

        const hello = person.talk,bind(person);
        hello()

        In this even though I am calling hello() in a standalone manner it will return the same thing that person.hello() did,
        that is a reference to the person object and not to the glbal object that it was earlier doing


*/

/* 
        Woah!! Atlast.... The Arrow function
        const number = function(number){
                return number * number;
            }

        const number = number => number * number;

        Same output


*/

/*
            Arrow functions and this
        

    Arrow functions do not rebind "this"

    The theory of callback function: 
    Simply put: A callback is a function that is to be executed after another function has finished executing — 
    hence the name ‘call back’.

    More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, 
    and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is 
    passed as an argument is called a callback function.

    Read this: https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

    const person = {
        name: "souvik",
        talk() {
            setTimeout(function () {
                console.log(this);
            }, 1000);
        },
    };

    person.talk();

    since we are calling here method of an object the code must run smoothly and the "this" should return a reference to the object.
    But but but....ths doesnt happen and it returns a windows object which is a global object.

    Why so??   So the function which is logging in the console is a callback function and its not part of any object, 
    in a way its a standalone function (its not like the talk method of person object). what setTimeout does is,it waits for the 
    time given 1000ms and then lets the function given as argument to initiate...u get what i say right!!!!!!

    So so so.....How the fuck do we solve this problem!!!!! that is how do we return a reference to the object from the callback
    function.

    Method 1: using the "var" since we know their scope is in the entire body not just a particular block

    const person = {
        name: "souvik",
        talk() {
            var self= this;
            setTimeout(function () {
                console.log(self);
            }, 1000);
        },
    };
    person.talk();

    Why does it work??? Because the variable is declared outside the callback function.

    Method 2: Tada we have the supercool arrow function

    Arrow function inherits the this keyword. So if we change the callback function to arrow function then we are done.

    const person = {
        name: "souvik",
        talk() {
            setTimeout(() => {
                console.log(self);
            }, 1000);
        },
    };
    person.talk();

    NOTE: With arrow functions the this keyword always represents the object that defined the arrow function.
    
    In regular functions the this keyword represented the object that called the function, which could be the window,
    the document, a button or whatever

*/

/*
        The map

    Whenever we wanna render some list of items thats when we use map.

    Now map requires a call back function as argument, the job of the function will be to transform each element in the arrray.


    const colors= ['red', 'green', 'yellow'];
    const items= colors.map(function(color){
        return '<li>' + color +'</li>';
    });

    Method 2: use arrow function

    const colors= ['red', 'green', 'yellow'];
    const items= colors.map(color => `<li> ${color}</li>`);      This is called a template litral the one put in back ticks ``

*/

/*
        Object destructuring (imp)

    say we have an object something like this

    const address = {
        street: '';
        country:'';
        mohalla:'';
    }

    Now we wanna access these properties and store in some variables so earlier we used to do like

    const street= address.street;
    const country= adrdress.country;
    const mohalla= address.mohalla;

    Don't you think this is so repetetive and UNCOOL!!!!!!!!!1

    Now we can do like this,

    const {street, country, mohalla}=address;

    Or if u want alias and wanna use different name then

    const {street:st}=address;

*/

/*
        The super amazing spread operator (...)

    const first= [1,2,3];
    const second= [4,5,6];

    const combined= first.concat(second);       old school
    const combined= [...first, ...second]


    This can also be used for objects:

    const obj1= { name: 'souvik};
    const obj2= { job: 'student'};

    const combined= {...obj1, ...obj2};
*/

/*
            Classes

    class Person{
        constructor(name){
            this.name=name;
        }

        walk(){
            console,log("walk");
        }
    }
    
    const person new Person('souvik)            U use the "new" reserved keyword to create an object of the class
    
    Now person is an object of Person class

*/

/*
            Inheritence

    class Person{
        constructor(name){
            this.name=name;
        }

        walk(){
            console,log("walk");
        }
    }

    class Teacher extends Person{       
        
        constructor(name, degree){
            super(name);               Whenever the child class has a constructor of it's own, it HAS to call the constructor of parent class using super()
            this.degree=degree;
        }

        teach(){
            console,log("teach");
        }
    }


*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import register from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/Counters";

ReactDOM.render(<Counters />, document.getElementById("root"));

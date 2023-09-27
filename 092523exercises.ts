
// Exercise 1 
function outerFunc() {
	let outerVar = "I'm outside!";

	function innerFunc() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // We can access outerVar, is part of global scope
		console.log(innerVar); // We can access innerVar, is part of local scope
	}

	innerFunc();
}

outerFunc();

//Exercise 2
console.log(Multiplication(25));
     function Multiplication(number){
        return number * number;
     }


/* function is called through console.log before funtion is defined,
 results in no error as typed*/

//Exercsie 3
function outerFunction(){
    function innerFunction(a,b){
    return a * b;
    }
    return innerFunction;
} 
const innerFunction = outerFunction(); 

console.log(innerFunction(3,100));

/*looking at this now it seems my outer function is really not
a separate entity from the inner function, I'll try again below since this 
did creat a workable function.*/
function outerFunction1(){
    const n=200;
    const x=100;
        const result=innerFunction1();
function innerFunction1(){
    return n / x;
}
return result;
}
console.log(outerFunction1())
//I can call the outer function and recieve a result based on the inner functions parameters

// Exercise 4
let Variable="Mustang";
     function ChangeVariable(newString){
     Variable="Ford"};
    
     console.log(Variable);// still returns "Mustang"

        ChangeVariable('Ford');

        console.log(Variable);// Now returns "Ford"

        function newScopeVar(){
            let Variable= "newCar" 
        }
        console.log(ChangeVariable);
        console.log(newScopeVar);
        //Both of these just return the function? I need more study here.

//exercise 5
function difference(x, y){
    return Math.abs(x-y);
}
console.log(difference(100, 56));// Not what I'm trying to do, but returned
//an interesting output.

function outer() {
	let outerVariable = 'This is my outer variable';

	function inner() {
		console.log('This is my inner variable,', outerVariable);
	}

	inner();//This is where/how a function is called
}

outer();//Not sure why I have problems remembering how we call theses.

//ecxercise 6
console.log(trees1);//tried to print variable prior to declaration of the variable
    let trees="pinesAndOaks";// under let the result an error as I called the variable 
    //before I defined it.
    const trees2="CedarsAndWalnuts"//Same as let above

    var trees1='MaplesAndRedbuds';// Returned Undefined- that I did not expect

    let cars="JeepsAndTrucks";
    const beaches= 'florida';
    var money= 'dollarsAnd Euros';
    console.log(cars);// this worked as expected
    console.log(beaches); //This worked as expected
    console.log(money);// worked as expected
    
    {let cars= "Trucks";
    console.log(cars)}//Here I have the same variable name with a different value,
    // but scoped locally, so I can avoid error messages.

 //exercise 7
 function counter(step){
    let count=0;
    return function increaseCount(){
        count+=step;// a "-" would be a negative counter, "subtraction"
        return count;
    };
 }
 let add1=counter(4);
 let add10=counter(10);

 add1();
 console.log(add1());//not sure why this returns an 8, I thought I was going
 //to return a 4.

 add10();
 console.log(add10());//And this console.log gives me 20
 // the increase count function has access to the counter function, which
 //basically allows the outer and inner function to work together to define a
 //step and define an increment for that step.

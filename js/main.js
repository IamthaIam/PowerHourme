// Intro to JS
// Study guide by Zrybea Whitfield

//Strings - Data type that holds data in text form. Strings in Javascript are represented by wrapping text in double quotes or single quotes

console.log("Hello World")
console.log('Hello friends')

//Numbers - Data type that holds data that is a numerical value. It can be a whole integer (10) or a float which is a fractional number (10.54)
let number = 5
console.log(5)
console.log(number)

//Variables - Variables are a container that stores some data. We can store strings and numbers but also functions, arrays, and objects. We represent that stored data by using *keywords* (let, const, or var) to declare that variable, an english word that we use to represent that value, an ' = ' symbol (called equal operator) that is used to assign that variable, and finally, the value we want to store
    //var - you may see this older way to declare a varible. Coding languages get updated and previously, we used var to declare a variable. var has global scope (you may learn more about scope later)
    var value1 = "hey girl"
    console.log("This is value1: " + value1)

    //Once you declare a variable, you can reassign it using the equal operator.
    value1 = "hey boy"
    console.log("This is new value1: " + value1)

    //const - const is the accepted most updated way (As of ES6 - the  most recent version of JavaScript) to declare a value that * WILL NOT change * Take your name for example. If you wanted to declare a variable that held your name, use const
    const me = "Zrybea"
    console.log("This is me: " + me)

    // Now, try uncommenting the next two lines. You will see that an error will occur telling you that you cant reassign a constant variable
    // me = "Naomi Campbell"
    // console.log(me)

    //let - let is the accepted most updated way to declare a value that * May change *
    let value2 = 6
    console.log("This is value2: " + value2)

    value2 = 10
    console.log("This is the new value2: " + value2)

    //So now you have the basics on variables! Use let and const for your variable declarations but understand you may see old code examples that use var



//Functions- functions are a set of instructions, a procedure that occurs. JavaScript has a ton of built in functions called "methods". But you can also write (declare) your own using the keyword "function". We run or execute the functions that we write by "calling" the function. A "function call" is done by typing the function name with the specified parameters in parenthesis
    //this is a function declaration
    function sayHi(){
    alert("Hi!!!!!!!!")
    }

    //This is a function call: uncomment the next line to run this function and refresh your browser
    // sayHi()


//Iterators = a way for us to 'go through" a set of data and repeat some action a number of times. We can do this with loops (there are different types) or methods sunch as forEach
    // for loop - A for loop is initialized or delcared with the keyword "for". It then has 3 parts, an initial expression (starting point), condition expression (how long the loop runs), and increment expression (how to iterate)

    let dataSet = 10

    //In this loop, we are saying: Starting at "i" (which is the number 0), we are going to check to see if it is less than our dataSet (which is 10); and if it is, we will print to the console "Hey girl Hey". Then we will take "i" and add 1 to it (which is represented by "i++"). Now, i is equal to 1. The loop then repeats. Starting at i (which is now 1), is it less than our dataSet (10)? Yes! So we print our statement to the console again. Then finally we add 1 to "i" again (i++). Now, "i" is equal to 2....And so on, this process repeats until "i" is equal to 10. When the loop checks to see if "i" is less than 10, it will stop because when i has a value of ten, it will not be less than dataSet.
    //Uncomment the next 3 lines to see this run in the console.
    // for(let i = 0; i < dataSet; i++){
    // console.log("Hey girl Hey")
    // }



// document.querySelector("section").addEventListener('click', changeGreen)

// function changeGreen(){
//     document.querySelector("#nikki").style.backgroundColor = "green"
// }

// const nikki = document.getElementById("nikki")

// nikki.onclick = changeBlue

// function changeBlue(){
//     nikki.style.backgroundColor = "red"
// }

// arrow functions
//document.querySelectorAll("section").addEventListener('click', (e) => document.querySelector("section").style.backgroundColor = "green")



// let arr = [box1, box2, box3, box4]


// const boxNodeList = document.querySelectorAll(".blue")

// Array.from(boxNodeList).forEach(boxes => boxes.addEventListener('click', changeBlue))

// function changeBlue(click){
//     // document.querySelector(".blue").style.backgroundColor = "green"

//     if(click.target.classList.contains("blue")){
//         document.querySelector('#nikki').classList.toggle("display")
//     } else {
//         document.querySelector('#nikki').style.background = "red"
//     }
       
    
// }

// function changeNikki(){
//     document.getElementById("nikki").onclick = changeGreen
// }


//parameters

// function giveMeANum(){
//     return 23
// }

// function add(funct){
  
//     console.log(funct)
// }


// add(giveMeANum())


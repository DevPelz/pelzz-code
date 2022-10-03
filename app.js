// prompt("How are you today?")
// // variables
// // var
// var fistName="Pelz"
// console.log(fistName)

//  // let
// let day;
// day="friday"
// console.log(day)

// // const
// const weather="cloudy"
// console.log(weather)

// // // functions
// // // fuction declaration 
// let firstName="peter"
// function Greet (){
//     alert(fistName);
//     let secondName = "Mohammad";
//     const fullName = firstName + " " + secondName;
//     window.confirm("Is your Name" + fullName);
//     window.confirm("Welcome" + fullName);

// }
//     Greet ();
//     // console.log(fullName)


// // functions expressions
// const date = function(){
//     alert("Today is 12th August 2022")
// }
// console.log(date);
// date();
// // arrow fuctions
// const sum = (a,b)=>{
//     return a + b;
// }
// alert(sum(5,6))


// let paragraph = document.querySelector(".greet");
// let span = document.getElementById("welcome")
// let query = document.querySelectorAll("input");

// span.style.color = "red"
// paragraph.style.fontsize = "100px"

// let button = document.querySelector("button");
// function success(){
//     alert("Congratulations!!!, you've successfully submitted.")
// }
// button.addEventListener("click",success);

// document.querySelector("#gender").addEventListener("click",anything)
// function anything(){
//     var userAdjective = prompt("Are you male or female")
// }

// document.querySelector("#print").addEventListener("click", helpme)
// function helpme(){
//     console.log("i just got clicked")
// }

// let x = prompt('enter a number');
// x = Number(x);

// if(x > 2){
//     console.log("The number is greater than 2")
// } else if (x === 2) {
//     console.log("the number is equal to 2")
// }
//  else {
//     console.log("The number is lesser than 2")
//  }

// let num = 10;

// for (b = 1; b < num; b++){
//     if (b === 3){
//         alert('I am number 3'); 
//     } else {
//         console.log(b);
//     }
// // }
// let numbers = []

for (var i =1; i <=30; i++ ){
    var isDivisibleByThree = i % 3 === 0;
    var isDivisibleByFive = i % 5 === 0;

    if(isDivisibleByThree && isDivisibleByFive){
        console.log('FizzBuzz');

    }else if (isDivisibleByThree){
        console.log('Fizz')
    }
    else if (isDivisibleByFive){
        console.log('Buzz')
    }
    else {
        console.log(i);
    }
}


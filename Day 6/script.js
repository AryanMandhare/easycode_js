//switch statement

let USERname=prompt("enter your name");

switch(USERname){
        case "yash":
                console.log("hello yash");
                break;
        case "aryan":
                console.log("hello aryan");
                break;
        case "rahul":
                console.log("hello rahul");
                break;
        case "rohan":
                console.log("hello rohan");
                break;

        default:
                console.log("name not found");

}

let carname = prompt("Enter the car name:");

switch (carname) {
    case "swift":
        console.log("this is swift car");
        console.log("manufracter year:2020");
        break;
    case "alto":
        console.log("this is alto car");
        console.log("manufracter year:2022");
        break;
    case "thar":
        console.log("this is thar car.");
        console.log("manufracter year:2021.");
        break;
    case "ertiga":
        console.log("this is ertiga car")
        console.log("manufracter year:2023");
        break;
    default:
        console.log("car not found");
}



//nested if-else

let Uinput = prompt("Enter a mark:");
let num = parseInt(Uinput);

if (num >= 35) {
    if (num >= 90) {
        console.log("Grade A");
    } else if (num >= 80) {
        console.log("Grade B");
    } else if (num >= 50) {
        console.log("Grade C");
    } else {
        console.log("Grade D");
    }
} else {
    console.log("Grade F");
}


let age=prompt("enter your age:");
let userage=parseInt(age);
let hasid=true;

if(userage>=18){
     console.log("you are eligible to vote");
     if(hasid){
        console.log("you can register to vote");
     }else{
        console.log("you can not register to vote");
     }
    }else{
    console.log("you can not vote");
 }




//else if Statement

let userinput=prompt("enter a mark:");
let number=parseInt(userinput);
   if(number>=90){
        console.log("grade A");
   }else if(number>=80){
        console.log("grade B");
   }else if(number>=50){
        console.log("grade C");
   }else if(number>=35){
        console.log("grade D");
   }else{
        console.log("grade F");
   }

// While loop

 let count = 0;
 while(count<=100){
       if(count%2==1){
        console.log(count, "is odd");
       }
       count++;
 }

let value= parseInt(prompt("enter a number"));

let mul_value=1;
while(mul_value <=10){
  console.log(value*mul_value);
  mul_value++;
}

 let number =prompt("Enter a number: ");
 number = parseInt(number);
 while (number <=number) {
    if(number>=0){
        console.log(number, "is positive");
    }else{
        console.log(number, "is negative");
    }
    number = parseInt(prompt("Enter another number: "));
 }


// Do while loop

 let num =prompt("Enter a number: ");
 num = parseInt(num);
 do{
     if(num>=0){
         console.log(num, "is positive");
     }else{
         console.log(num, "is negative");
     }
     num = parseInt(prompt("Enter another number: "));
 } while(num<=100);


 let n = 0;
do {
    if(n % 2 == 0) {
        console.log(n, "is even");
    }
    n++;
} while(n <=100);

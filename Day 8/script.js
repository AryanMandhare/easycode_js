
// For Loop

// Multiplication table using for loop
let number= parseInt(prompt("enter a number:"));
let mul_value=1;
for(mul_value; mul_value<=10; mul_value++){
  console.log(number*mul_value);
}

let mul= parseInt(prompt("enter a number:"));
for(let i=1; i<=10; i++){
  console.log(mul*i);
}

// Sum of first 5 numbers using for loop
let num=0;
let sum=0;
for(num; num<=25; num++){
  sum=sum+num;
}
console.log(sum);

let result=0;
for(let i=0; i<=5; i++){
  result += i;
}
console.log(result);
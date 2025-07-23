// push & pop method

let states =['goa','rajsthan','punjab','delhi','up'];
console.log(states);
states.push('kerala');
console.log(states);
let rem=states.pop();
console.log(rem);
console.log(states);
console.log(states.length);

// unshift  method use for add element in array

let cities=['delhi','mumbai','pune','banglore','hyderabad'];
console.log(cities);
cities.unshift('goa');
console.log(cities);
console.log(cities.length);

// shift   method use for remove element in array

let colour=['pink','black','white','blue'];
console.log(colour);
colour.shift();
console.log(colour);
console.log(colour.length);

// splice method using this method we can remove & add element into the array

let food = ['biryani','korma','tikka','kabab','pizza'];
console.log(food);

food.splice(1,2,'burger');
console.log(food);

let country =['india','america','pakistan','russia','china'];
console.log(country);

country.splice(2,1,'canada','australia');
console.log(country);

// sort method

const number=[1,45,2,3,56,]
number.sort();
console.log(number);

const num=[10,45,20,30,56,60];
num.sort();
console.log(num);
console.log(num[num.length-3]);

// indexof method

let course=['bca','mca','bba','mba','btech'];
let res=course.indexOf('bba');
console.log(res);

// includes method

let company=['wipro','tcs','hcl','tech mahindra'];
let res1=company.includes('tcs');
console.log(res1);
let res2=company.includes('infosys');
console.log(res2);

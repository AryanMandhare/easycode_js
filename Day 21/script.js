
// new Date() creates a new instance of JavaScript's built-in Date object, representing the current date and time at the moment the code runs.
let date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());


// It returns a number from 0 to 11.
//0 is January, 1 is February, ..., 11 is December.
//So if today is July 31st, date.getMonth() would return 6.
//This is because JavaScript months are zero-indexed.

//  1] To get the current month's number
let currentDate = `${date.getDate()}, ${date.getMonth() + 1}, ${date.getFullYear()}`;
console.log(currentDate);

// 2] To get the current month's name
let month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
let Currentdate = `${date.getDate()}, ${month[date.getMonth()]}, ${date.getFullYear()}`;
console.log(Currentdate);

// to get current time
let  currentTime = `${date.getHours()}, ${date.getMinutes()}, ${date.getSeconds()}`;
console.log(currentTime);
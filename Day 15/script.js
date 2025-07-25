
let addtion = function (a, b) {
    return a + b;
}

// let res = addtion(10, 20);
// console.log(res);


let checknum = function (number) {
    // if (number % 2 == 0) {
    //     console.log("even");
    // }
    // else {
    //     console.log("odd");

    // }
    //ternary operator
    number % 2 == 0 ? console.log("even") : console.log("odd");
}

checknum(10);
checknum(11);
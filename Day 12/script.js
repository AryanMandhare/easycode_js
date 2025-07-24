let myinfo = {
    name: "aryan",
    age: 20,
    address: "wai"
}
console.log(myinfo);


let person = {
    name: "aryan",
    age: 21,
    address: "wai"
}

console.log(person.name);
console.log(person.age);
console.log(person.address);

let student = {
    student1: "aryan",
    student2: "raj",
    student3: "sai",
    student4: "yash",
    student5: "omkar"
}

console.log(student.student1);
console.log(student.student2);

let college = {
    FYBCA: ["aryan", "raj", "sai", "yash", "omkar"],
    SYBCA: ["arnav", "rohan", "sairaj", "vaibhav", "sanskar"],
    TYBCA: ["raya", "prasad", "karan", "aditya", "omkar"],

}
console.log(college);
console.log(college.FYBCA[3]);
console.log(college.SYBCA[1]);
console.log(college.TYBCA[4]);

let popularfood = {
    Mumbai: ["Vada Pav", "Pav Bhaji", "Bhel Puri"],
    Delhi: ["Chole Bhature", "Butter Chicken", "Parathas"],
    Kolkata: ["Rasgulla", "Machher Jhol", "Puchka"],
    Chennai: ["Idli", "Dosa", "Sambar"],
    Wai: ["Kandi Pedhe"]
};

console.log(popularfood.Mumbai[0]);
console.log(popularfood.Delhi[1]);
console.log(popularfood.Mumbai.indexOf("bhel puri"));
console.log(popularfood.Chennai[2]);
console.log(popularfood.Wai[0]);
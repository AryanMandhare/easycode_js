// create an object and access their key & value
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

// instagram profile example

let instagram = {
    name: "aryan",
    username: "aryan_123",

    following: [

        {
            name: "raj",
            username: "raj123"
        },
        {
            name: "sai",
            username: "sai123"
        },
        {
            name: "yash",
            username: "yash123"
        },
        {
            name: "omkar",
            username: "omkar123"
        }
    ],

    followers: [
        {
            name: "raj",
            username: "raj,123"
        },
        {
            name: "sai",
            username: "sai12"
        }
    ],

    posts: [
        {
            image: "abc.jpg",
            likes: 10,
            comments: 2
        },
        {
            image: "xyz.jpg",
            likes: 12,
            comments: 3
        }
    ]

}

console.log(instagram);
console.log(instagram.name);
console.log(instagram.username);
console.log(instagram.following[1].name);
console.log(instagram.followers[1].name);
console.log(instagram.posts[1].image);
console.log(instagram.posts[1].likes);
console.log(instagram.posts[1].comments);

for (let i = 0; i < instagram.following.length; i++) {
    console.log(instagram.following[i].name);
}

for (let i = 0; i < instagram.posts.length; i++) {
    console.log(instagram.posts[i].likes);
}

let res = instagram.following.shift();
console.log(res);

instagram.followers.push({ name: "rohan", username: "rohan123" }
);
console.log(instagram);
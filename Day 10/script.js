// create an array of animal & car names

let animal_name =['Lion', 'Tiger', 'Elephant'];
console.log(animal_name);

let car_name = ['BMW', 'Audi', 'Mercedes'];
console.log(car_name);

// display fruit name using index number

let fruit =['Apple', 'Banana', 'Mango'];
console.log(fruit[0]);

let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(day[3]);

// display array length & check typeof

let food = ['Pizza', 'Burger', 'Pasta'];
console.log(food);
console.log(food[2]);
console.log(food.length);   
console.log(typeof food);

let drinks = ['Tea', 'Coffee', 'Juice', 'Soda', 'Water', 'Milk'];
console.log(drinks);
console.log(drinks[1]);
console.log(drinks.length);
console.log(typeof drinks);

// using for loop print array element

let bike= ['Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'Ducati', 'Triumph'];
for(let i=0; i<=5; i++){
    console.log(bike[i]);
}

let colour = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 'Black', 'White'];

for(let i=0; i<colour.length; i++){
    console.log(i,colour[i]);
}

//push & pop method

// i> push
let course =['batch-1','batch-2'];
console.log(course);
course.push('batch-3');
let result=course.push('batch-4');
console.log(course);
console.log(result);

// ii> pop
let courses =['batch-1','batch-2','batch-3','batch-4'];
console.log(courses);
let res=courses.pop();
console.log(courses);
console.log(res);
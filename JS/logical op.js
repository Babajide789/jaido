let a = 50;

let b = 100;

let result = a>40 && b<80

        // true && false = false

console.log(result);

// TRUE && TRUE = TRUE

// TRUE && FALSE = FALSE

// FALSE && FALSE = FALSE

// FALSE && TRUE = FALSE


let c = 150;
let d = 200;

let result_two = c > 100 && d < 150;
        // true && false = false

console.log(result_two)

let e = 1;

let f = 5;

let result_three = !(e < f && f > 3.5)

        // true && true = true

console.log(result_three)

// OR LOGICAL OPERATOR

// TRUE || TRUE = TRUE;

// TRUE || FALSE = TRUE;

// FALSE || TRUE = TRUE;

// FALSE || FALSE = FALSE;

let g = 10;

let h = 15;

let result_four = (h < g || h > 10)

        // false || true = true

console.log(result_four)

// NOT !() IS USED TO INVERSE YOUR RESULT


let minimum_value = 3;

let maximum_value = 20;

if (!(minimum_value>0)){
    console.log("This is not possible")
}else{
    console.log("You can go ahead")
}

//IF ELSE STATEMENT

let today = "Tuesday"

if (today==="Tuesday"){
    console.log("We are correct")
}else{
    console.log("We are not correct")
}


let phone_price = 30000;

let radio_price = 5000;

if(!phone_price>=radio_price){
    console.log("Please, buy me Radio")
}else{
    console.log("Buy me Phone")
}

let price_of_house = 180;

let price_of_land = 51;

let construction_price = "35"

if (price_of_house + price_of_land >= construction_price){
    console.log("The price is okay!")
}else{
    console.log("The price is not okay")
}

if(construction_price === 35){
    console.log("This is good")
}else{
    console.log("This is bad")
}

// ELSE IF 

let student = "Kay"

if (student==="Jide"){
    console.log("The student is Jide")
}else if (student === "Kay"){
    console.log("The student is Kay")
}else if (student === "Labeto"){
    console.log("The student is Labeto")
}else{
    console.log("The name is wrong")
}

// TENARY OPERATOR

// (CONDITION) ? console.log("hello") : console.log("nay")



let month = "October";

(month==="October") ? console.log("This is the month of october") : console.log("This month is not october")

// same code using if else 
let months = "November";

if (months === "November"){
    console.log("This is the month of November")
}else{
    console.log("This month is not November")
}


// ASSment
// let student_ass = "Jaido";
// let student_ass1 = "Kay";
// let student_ass2 = "Labeto";

// (student_ass === "Jaido", "Kay") ? console.log("The name is Jaido") : console.log("The name is wrong")

let club = "city";

(club==="city") ? console.log("This is City") : (club==="barca") ? console.log("This is barca") :  console.log("This is man")

let city = "paris"

let town = " caen"

let place = city + town

console.log(place)


//  TENAR OPERATOR

let student_name = "Yahaya";

// if (student_name=== "Dele"){
//     console.log(`THE NAME IS ${student_name}`)
// }else if(student_name=== "Yahaya"){
//     console.log(`THE NAME IS ${student_name}`)
// }else if(student_name=== "Stam"){
//     console.log(`THE NAME IS ${student_name}`)
// }else {
//     console.log(`THE NAME IS ${student_name}`)
// }


// TENARY OP

student_name === "dele" ? console.log (`THE NAME IS ${student_name}`) : student_name === "Yahaya" ? console.log(`The mame os ${student_name}`) : console.log (`Thw mame s ${student_name}`)

//  SWITCH OP

let child = "Chap"

switch(child){
    case "Mama":
        console.log(`my `)
}

// while 

let ourWar = 10;

while (ourWar>=5){
    console.log(`The no is ${ourWar}`)
    ourWar--
}

// for

// for (o=0; o<=10; o++){
//     console.log(`The new number is ${o}`)
// }

// for (k=0; k>=10; k--){
//     console.log(`Our new number is ${k}`)
// }
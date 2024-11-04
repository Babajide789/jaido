// FUNCTION

function activate() {
    console.log("ACTIVATE 1.0 STUDENT")
}

activate()    // FUNCTION INVOCATION OR CALLING THE FUNC
activate()
activate()
activate()
activate()
activate()
activate()


// FUNCTION ARGUMENT AND PARAMETER

function addNum(a, b){
    console.log(a + b)
}

addNum(6, 4)
addNum(13,7)

function student(name){
    console.log(`MY NAME IS ${name}`)
}

student("JAGO")

function fruit (name_of_fruit){
    console.log(`THE FRUIT IS ${name_of_fruit}`)
}

fruit("Orange")
fruit("Osha")

// 

function students(name){

    return name
}

// console.log(students("YAHAYA BABAJIDE"))  // INVOCATION OR CALL

// console.log(students("ASAKE OLOLADE"))       

let result_1 = students("YAHAYA BABAJIDE")      // DITTO

console.log(result_1)

let result_2 = students("ASAKE OLOLADE")

console.log(result_2)

console.log(result_2)


function subtract(a, b){
    return `THE RESULT OF THIS IS ${a-b}`
}

let outcome = subtract(300, 70)

console.log(outcome)

// ARROW FUNCTION

let subtractNum = (a, b)=>{
    return `THE RESULT OF THIS IS ${a-b}`
}

let our_outcome =subtractNum(33, 55)

console.log(our_outcome)

let fruits = ["Apple", "Owl", "Graft"]

let our_list = (arr)=>{
    return arr
}

let result = our_list(fruits);

console.log(result)

// CALLBACK

let outerFunc = ()=>{
    return "MY NAME IS JIDE"
}

let firstName = "Jide"

let innerFunc = (a)=>{
    return a;
}

let overallResult = innerFunc(outerFunc)

console.log(overallResult())

let studentss = (names)=>{
    return `The babe of jago ${names}`
}

let resultOne = student("OMO MII");

console.log(resultOne)

let multiply = (x, y)=>{
    return `THE PRODUCT IS ${x * y}`
}

let result4 = multiply(10,5);

console.log(result4)


// 

let fruit1 = ["Fam", "AAA"]

let arrayval = (jago)=>{
    return fruit1[1]
}

let result11 = arrayval(fruit)

console.log(result11)

// CALL BACK FUNCTION

let child = ()=>{
    return "THIS IS A CHILD"
}

let parent = (aa)=>{
    return aa
}

let result7 = parent(child())

console.log(result7)



let ola = (a, b)=>{
    return a * b;
}

let dej = (cb)=>{
    return cb;
}

let result9 = dej(ola(10, 6));

console.log(result9)


// DECLARE VAR

function zzz(){
    return 'my name is jago'
}

let result13 = zzz()

console.log(result13)



// ARROW FMT

let mew = (bro)=>{
    return `MY BABE IS ${bro}`
}

let result0 = mew("JAGO")

console.log(result0)

let result00 = mew("SENA")

console.log(result00)



let valueMulti = (m, l)=>{
    return m * l
}

let result111 = valueMulti(3, 9)

console.log(result111)




let peoples = (arre)=>{
    return arre
}

let result099 = peoples(["Asake", "Hope", "Sade"])

console.log(result099[1])

console.log(result099)

console.log(result099[0])

let peopleP = (firstName, lastName)=>{
    return `My name is ${firstName} ${lastName}`
}

let mewFunc = (cbb) => {
    return cbb
}

let result000 = mewFunc(peopleP("Agbo", "Ola"));

console.log(result000)




let myFunc1 = (x, y)=>{
    return x**2 + y**2
}

let myFunc2 = (cb)=> {
    return cb
}

let resul = myFunc2(myFunc1(2,3))

console.log(resul)




let opoFu = (clb) =>{
    return clb;
}

let trew = opoFu((r, t)=> r**2 + t**2)(2,5);

console.log(trew)



let lofAct = ["Adeset", "momma", "jago", "KK"]

for(let O=0; O<lofAct; O++){
    console.log(lofAct[O])
}

// CALLBACK METHOD

lofAct.forEach((name)=>console.log(name))



// function.abde(){
//     return "ABIDEEN"  // ES 5
// }

// let george = ()=>{
//     return(GEORGE)  // ARROW & ES 6
// }

// let bola = ()=> "BOLA" // ARROW & ES 6

// ()=>                    // anon func



// forEach method


let studentd = ["George", "Oladimeji", "Jago", "Bola"];

for (let i=0; i<student.length; i++){
    console.log(studentd[i])
}


studentd.forEach((items)=> console.log(items))


// MAP METHOD


let activateScore = [100, 300, 500, 700]

let ourActivatescore = activateScore.map((item)=>item * 2)

console.log(ourActivatescore)




let poeple = ["HKM", "Shod", "JJ", "MM", "SOD"];

let result_of_poeple = poeple.map((q)=> `My name is ${q}`)

console.log(result_of_poeple)


// FILTER METHOD

let foodPrice = [300, 600, 400]

let result17 = foodPrice.filter((price)=> price>200)

console.log(result17)


let vate = ["JK", "LM", "Rao", "HHH"]

let result19 = vate.filter((r)=> r==="JK")

console.log(result19)


// REDUCE METHOD

let ourMum = [10, 30, 50, 70];

let result99 = ourMum.reduce((accumulator, current) => accumulator + current, 0)

console.log(result99)



// SOME METHOD

let e = ["Bola", "Ade"]

let result33 = e.some((item) => item === "Dotun")

console.log(result33)

// EVERY

let result34 = e.every((name)=>name==="Bola")

console.log(result34)


// OBJECT

let our_lists ={
    firstName: "Jago",
    lastName: "Tabb",
    gender: "M",
    age: 11,
    activateStudent: true
}

console.log(our_lists)

console.log(typeof(our_lists))


let allStudent = [
    {
    firstName: "Jago",
    lastName: "Tabb",
    gender: "M",
    age: 11,
    activateStudent: true
    }
    {
    firstName: "Jago",
    lastName: "Tabb",
    gender: "M",
    age: 11,
    activateStudent: true
    }
]


// HOMOGENOUS ARRAY

let activate_students = ["Jago", "Jide", "George", "Kay"]

let our_number = [1,2,3,4,5]

let numbers = [true, true, true]

// HETEROGENOUS ARRAY

let items = [24, "orange", true]

// MULTI-DIMENSIONAL ARRAY

let list =  ["bike", [34,78], true]

            // [0           1       2   3 ]
let student = ["AISHAT", 'JIMOH', 10, true];

let result = student[0];

let result_1 = student[1];

let result_2 = student[2];

let result_3 = student[3];

console.log(result);

console.log(result_1);

console.log(result_2);


let order = ["good", [12, 7, "goods"]]

console.log(order)

let a = [[21, 28]];

console.log(a)

console.log(a.length)


let ourInfo = ["jide", "babajide", ["yahaya", 7]]

let info = ourInfo[1];

console.log(info)

let s = ourInfo[2][1]

console.log(s)


let multi_array = [[4, 5, "shodipo"], "Aishat", ["Bola", ["George", false]]];

let aa = multi_array[0][2];

console.log(aa)

let aaa = multi_array[1];

console.log(aaa)

let b = multi_array[2][0];

console.log(b)

let bb = multi_array[2][1][0];

console.log(bb)

let bbc = multi_array[2][1][1];

console.log(bbc)

// COMCAT (METHOD)

let arra = [2, 4, 6 ,9];

let arr = ["as", "tall", "amd"];

let comb = arra.concat(arr);

console.log(comb)

// POP () METHOD 

let mew = ["doll", "qwer", "asa"]

let apple = mew.pop();

console.log(apple)

console.log(mew)

// PUSH ARRA

mew.push("Jago")

console.log(mew)

// SHOFT ()METHOD

console.log(mew.shift())

console.log(mew)


// OMCLUDE 

let omcl = mew.includes("doll");

console.log(omcl);

let o0m = mew.includes("www");

console.log(o0m)

// FOR LOOP TO ACCESS ARRAT

let last = ["ARE", "WE", "GOOD"];

for(let w=0; w < last.length; w++){
    console.log(last[w])
} 
let good = [
    {name: "laptop", price: 1200},
    {name: "Phone", price: 800},
    {name: "Tablet", price: 500}
];

let result = good.map((item) =>{
    return {...item, discount: item.price - item.price * 0.1, mod_name: item.name.toUpperCase()}
});

console.log(result)



let product = [
    {name: "laptop", price: 1200},
    {name: "Phone", price: 800},
    {name: "Tablet", price: 500}
];

let resultFilter = product.filter((item)=>{
    return item.price >= 500 && item.price <=1000
})

console.log(resultFilter)

//  DFF BETWEE LET AMD COMST

let job = "fromt emd dev"

job1 = "backemd dev"

const art = "Moah"

const art1 = "mopah"

console.log(job1)

console.log(art1)
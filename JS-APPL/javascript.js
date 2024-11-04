// DOCUMENT OBJECT MODEL (DOM)

// console.log(document)

// console.log(document.body)


// console.log(document.head)


// console.log(document.title)


// ACCESSING OUR HTML USING DOM:

// 1. getEleme


// let headingOnee = document.getElementsByTagName("h1") // HTML COLLECTION

// console.log(headingOnee[1])

// // let headingOne = Array.from(document.getElementsByTagName("h1"));

// // headingOne.forEach((item) =>{
// //     console.log(item)                           // FOR EACH 
// // })


// // let res_headingOne = Array.from(headingOne)

// // console.log(res_headingOne)



// let pOne = document.getElementsByTagName("p")               // HTML COLLECTION
  
// console.log(pOne)

// let special = document.getElementsByClassName("test")

// console.log(special)

// let paragraph = document.getElementById("para")

// console.log(paragraph)

// let ourSpan = document.querySelector("span")

// console.log(ourSpan)

// let anchor = document.querySelector(".anchor")

// console.log(anchor)

// let heading = document.querySelector("#headFour")

// console.log(heading)

// let hell = document.querySelectorAll("h6") // NODE LIST

// console.log(hell)

// hell.forEach((item) =>{
//     console.log(item)
// })



// // INNER TEXT

// let headingTwo = document.querySelector("h3");

// // let result = headingTwo.innerText;

// // console.log(result)

// // console.log(headingTwo.innerText)

// console.log(headingTwo.textContent)





// let head_three = document.querySelector("h2")

// // head_three.innerText = "Jago is the man"

// // head_three.textContent = "jattttooo slatttt"

// head_three.innerHTML = "<h2>Touch ammm</h2"



// let heading1 = document.querySelector(".jago")

// // console.log(heading1)

// // CLASS LIST

// // console.log(heading1.classList)

// heading1.classList.add("ramdom")

// // console.log(heading1)


// h1.classList.remove("ramdom")


// TOGGLE 

let h2 = document.querySelector(".racks");

h2.classList.toggle("tree")


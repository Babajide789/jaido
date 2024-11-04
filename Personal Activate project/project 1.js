

const hamburger = document.querySelector(".hamburger")


const navLinks = document.querySelector(".hyper_link")


hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("active")
    
})
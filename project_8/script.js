
const breakfastBtn = document.getElementById("breakfastBtn")
const lunchBtn = document.getElementById("lunchBtn")
const shakesBtn = document.getElementById("shakesBtn")
const allBtn = document.getElementById("allBtn")


const breakfast = document.querySelectorAll(".breakfast")
const lunch = document.querySelectorAll(".lunch")
const shakes = document.querySelectorAll(".shakes")


breakfastBtn.addEventListener("click", ()=>{
    lunch.forEach(l =>{
        l.style.display = "none"
    })

    shakes.forEach(s => {
        s.style.display = "none"
    })

    breakfast.forEach(b => {
        b.style.display = "flex"
    })
})


lunchBtn.addEventListener("click", () =>{
    shakes.forEach(s => {
        s.style.display = "none"
    })

    breakfast.forEach(b => {
        b.style.display = "none"
    })

    lunch.forEach(l =>{
        l.style.display = "flex"
    })
})


shakesBtn.addEventListener("click", () =>{
    shakes.forEach(s => {
        s.style.display = "flex"
    })

    breakfast.forEach(b => {
        b.style.display = "none"
    })

    lunch.forEach(l =>{
        l.style.display = "none"
    })
})


allBtn.addEventListener("click", () =>{
    shakes.forEach(s => {
        s.style.display = "flex"
    })

    breakfast.forEach(b => {
        b.style.display = "flex"
    })

    lunch.forEach(l =>{
        l.style.display = "flex"
    })
})
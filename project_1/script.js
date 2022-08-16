const hexaEl = document.getElementById("hexa-el")
const buttonEl = document.getElementById("button-el")
let hex = "#"
let hexaArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

buttonEl.addEventListener("click", () =>{

    for(let i = 0; i<6;i++){
        let random = Math.floor(Math.random()*hexaArray.length)
        hex += hexaArray[random]
        
    }

    hexaEl.textContent = hex
    document.body.style.backgroundColor = hex
    hex = "#"
    
})
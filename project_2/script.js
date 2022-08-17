const numEl = document.getElementById("num-el")
let btn = document.querySelectorAll(".btn")
let num = 0

btn.forEach(btn => {
    btn.addEventListener("click", (i)=>{
        let button = i.currentTarget
        
            if(button.classList.contains("increase")){
                    num++
                    numEl.textContent = num                
            }else if (button.classList.contains("decrease")){
                    num--
                    numEl.textContent = num
            }else{
                    num = 0
                    numEl.textContent = num
            }

            if(num > 0){
                numEl.style.color = "green"
            }else if(num < 0){
                numEl.style.color = "red"
            }else{
                numEl.style.color = "black"
            }
    })
})
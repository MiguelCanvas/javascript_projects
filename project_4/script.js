let bars = document.querySelector(".bars")


function showMenu(){
    let menu = document.querySelector(".menu")
    let barsMenu = document.querySelector(".fa-bars")
    barsMenu.classList.toggle("fa-xmark")
    menu.classList.toggle("show-menu")
}

bars.addEventListener("click", showMenu)
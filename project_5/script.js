let menu = document.querySelectorAll(".menu-icon")


function showMenu(){
    let container = document.querySelector(".container")
    container.classList.toggle("show-menu")
}

menu.forEach(i => {
    i.addEventListener("click", showMenu)
})
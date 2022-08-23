const modal = document.querySelectorAll(".modal")

function showModal(){
    let modalBackground = document.querySelector(".modal-background")
    modalBackground.classList.toggle("show-modal")
}

modal.forEach(i => {
    i.addEventListener("click", showModal)
})
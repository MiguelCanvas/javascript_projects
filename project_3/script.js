let people = [
    {
        name: "Peter",
        job: "Web developer",
        img: "Images/person_2.jpg",
        description: "I'm baby meggins twee health goth +1. Bicycle right tumeric chartreause before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodle, cold pressed four dollar toast everyday carry"
    },
    {
        name: "Saul",
        job: "Ux design",
        img: "Images/person_3.jpg",
        description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil aut, asperiores cum illo nostrum unde excepturi eaque? Ipsam, vel suscipit?"
    },
    {
        name: "Johana",
        job: "Boss",
        img: "Images/person_1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis fugit totam officiis eius dolore, recusandae illo autem tenetur inventore quas adipisci vel nesciunt explicabo eligendi. Vel dignissimos ipsa aut placeat?"
    },
    {
        name: "Steve",
        job: "Data analyst",
        img: "Images/person_4.jpg",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque ad corrupti eveniet sit reprehenderit beatae dolores, necessitatibus deleniti omnis, quasi officiis exercitationem voluptas voluptatem?"
    },
    {
        name: "Sandra",
        job: "Manager",
        img: "Images/person_5.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo culpa non expedita, nam dolores?"
    }
]


let num = 1
const userName = document.getElementById("user-name")
const jobPosition = document.getElementById("job-position")
const userDescription = document.getElementById("description")
const userImage = document.getElementById("image")
let arrow = document.querySelectorAll('.arrow')



function setupEvent(){
    userName.textContent  = people[0].name
    jobPosition.textContent = people[0].job 
    userDescription.textContent = people[0].description
    userImage.src = people[0].img
}


window.onload = function () {
    setupEvent()
}


arrow.forEach(element => {
    element.addEventListener("click", (i) => {
        let button = i.currentTarget

        if(button.classList.contains("right")){
            if(num >= people.length){
                num = 0
            }
            userName.textContent = people[num].name
            jobPosition.textContent = people[num].job
            userDescription.textContent = people[num].description
            userImage.src = people[num].img
            num++

            console.log(num)
        }else if(button.classList.contains("left")){
            if(num <= 1){
                num = people.length+1
            }
            num--
            userName.textContent = people[num-1].name
            jobPosition.textContent = people[num-1].job
            userDescription.textContent = people[num-1].description
            userImage.src = people[num-1].img
            
        }else if(button.classList.contains("random")){
            let random = Math.floor(Math.random()*people.length)
            num = random

            userName.textContent = people[num].name
            jobPosition.textContent = people[num].job
            userDescription.textContent = people[num].description
            userImage.src = people[num].img

            num++
        }

    })
});




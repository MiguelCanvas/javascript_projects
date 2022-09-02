let playBtn = document.getElementById("play-button");
let video = document.getElementById("video")

playBtn.addEventListener("click", () => {
    if(video.paused == true){
        video.play()

        playBtn.innerHTML = "Pause"
    }else{
        video.pause()

        playBtn.innerHTML = "Play"
    }
})
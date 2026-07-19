// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to AS ACHU Portfolio!");
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Simple Fade Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";
});
function playVideo(video){
    let popup = document.getElementById("video-popup");
    let player = document.getElementById("popup-video");

    player.src = video;
    popup.style.display = "flex";
    player.play();
}

function closeVideo(){
    let popup = document.getElementById("video-popup");
    let player = document.getElementById("popup-video");

    player.pause();
    player.src = "";
    popup.style.display = "none";
}
function playVideo(video){
    document.getElementById("popup-video").src = video;
    document.getElementById("video-popup").style.display = "flex";
}

function closeVideo(){
    document.getElementById("video-popup").style.display = "none";
    document.getElementById("popup-video").src = "";
}
window.addEventListener("load", function(){
    setTimeout(function(){
        document.querySelector(".loader").style.opacity="0";

        setTimeout(function(){
            document.querySelector(".loader").style.display="none";
        },800);

    },2000);
});
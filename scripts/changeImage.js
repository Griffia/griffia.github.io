const images = [
    "images\\church.jpg", 
    "images\\stained-glass.jpg",
    "images\\inside-church.jpg",
    "images\\garden.jpg"
]

let i = 1;

const switchImage = () => {
    const image = document.getElementById("image");
    image.src = images[i];
    image.classList.remove("slide-and-fade");
    image.offsetWidth;
    image.classList.add("slide-and-fade");

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

}

window.onload = function() {
    setInterval(switchImage, 6000);
}
const closeInformation = document.querySelectorAll(".close");

closeInformation.forEach((closeElement) => {
    closeElement.addEventListener("click", (e) => {
        if (!e.currentTarget.parentElement.classList.contains("hidden")) {
            e.currentTarget.parentElement.classList.add("hidden");
        }
    })
});


const contactUs = document.getElementById("contact-us");
const contactUsPopUp = document.getElementById("contact-us-pop-up");


const hideContactPopUp = () => {
    contactUsPopUp.classList.toggle("hidden");
    contactUsPopUp.classList.toggle("dropDown");
}

contactUs.addEventListener("mouseover", () => {
    hideContactPopUp();
})

contactUsPopUp.addEventListener("mouseleave", (e) => {
    hideContactPopUp();
})

const copyToClipBoard = () => {
    const getInfo = document.getElementById("copy-info");
    navigator.clipboard.writeText(getInfo.innerText);
}

const contactInfo = document.getElementsByClassName("contact-info");
// console.log(contactInfo);

for (let i = 0; i <contactInfo.length; i++) {
    contactInfo[i].addEventListener("click", (e) => {
        console.log("clicked");
        console.log(e.target.innerText);
        navigator.clipboard.writeText(e.target.innerText);
    })
}

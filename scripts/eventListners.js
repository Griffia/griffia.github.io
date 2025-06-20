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
});

contactUsPopUp.addEventListener("mouseleave", (e) => {
    hideContactPopUp();
});

const copyToClipBoard = () => {
    const getInfo = document.getElementById("copy-info");
    navigator.clipboard.writeText(getInfo.innerText);
}

const contactInfo = document.getElementsByClassName("contact-info");
const contactInfoCopyPopUp = document.getElementById("contact-info-copy-pop-up");
const copyText = document.getElementById("copy-text");

for (let i = 0; i <contactInfo.length; i++) {
    contactInfo[i].addEventListener("click", (e) => {
        // console.log("clicked");
        // console.log(e.target.innerText);
        navigator.clipboard.writeText(e.target.innerText);
        copyText.innerText = "Copied!";
        setTimeout(revertCopyText, 1500)
    });

    contactInfo[i].addEventListener("mouseover", (e) => {
        contactInfoCopyPopUp.style.top = e.clientY - 50 + "px";
        contactInfoCopyPopUp.style.left = e.clientX - 100 + "px";
        contactInfoCopyPopUp.classList.toggle("hidden");
    });

    contactInfo[i].addEventListener("mouseleave", (e) => {

        contactInfoCopyPopUp.classList.toggle("hidden");
    });
}


const revertCopyText = () => {
    copyText.innerText = "Click to Copy";
}
const closeInfo = document.getElementById("close");

// closeInfo.addEventListener("click", (e) => {
//     // console.log(additionalInfo.style.display);
//     // console.log(e.currentTarget);
//     additionalInfo.classList.add("hidden");
// });


const closeInformation = document.querySelectorAll(".close");

closeInformation.forEach((closeElement) => {
    closeElement.addEventListener("click", (e) => {
        if (!e.currentTarget.parentElement.classList.contains("hidden")) {
            e.currentTarget.parentElement.classList.add("hidden");
        }
    })
})
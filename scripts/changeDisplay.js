const whatsOnContainer = document.getElementById("whats-on-container");
const churchContainer = document.getElementById("church-hall-container");

const whatsOn = document.getElementById("whats-on");
const churchHall = document.getElementById("church-hall");

whatsOn.addEventListener("click", () => {

    if (whatsOnContainer.classList.contains("hidden") && !churchContainer.classList.contains("hidden")) {
        //Hides the church hall info
        churchContainer.classList.add("hidden");

        //Unhides the whats on info
        whatsOnContainer.classList.remove("hidden")

        //Adds the styling to the headers
        whatsOn.classList.add("selected");
        churchHall.classList.remove("selected");

        //Adds the animation
        whatsOnContainer.classList.add("change");

        //Ensures the additional information div is no longer visable when chaning back to the what's on section
        additionalInfo.classList.add("hidden");
    }
});

churchHall.addEventListener("click", () => {

    if (churchContainer.classList.contains("hidden") && !whatsOnContainer.classList.contains("hidden")) {
        //Hides the whats on info
        whatsOnContainer.classList.add("hidden");

        //Unhides the church hall info
        churchContainer.classList.remove("hidden");

        //Adds the styling to the headers
        churchHall.classList.add("selected");
        whatsOn.classList.remove("selected");

        //Adds the animation
        churchContainer.classList.add("change");
    }
});

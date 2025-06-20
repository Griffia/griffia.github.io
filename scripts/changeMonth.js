const previousMonth = document.getElementById("previous");
const nextMonth = document.getElementById("next");
const displayCurrentMonth = document.getElementById("current-month")
const monthsElements = document.querySelectorAll(".month")
const selectMonth = document.getElementById("select-month-container")

let month = new Date().getMonth();

displayCurrentMonth.innerText = months[month];


const changeEventsInfo = () => {

    while (eventsContainer.childElementCount !== 0) {
        eventsContainer.removeChild(eventsContainer.childNodes[0]);
    }

    displayCurrentMonth.innerText = months[month];
    const reloadEvents = new XMLHttpRequest();

    reloadEvents.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            
            let response = JSON.parse(churchEvents.responseText);

            response[months[month]].forEach(event => {

                let eventContainer = document.createElement("div");
                let eventDetails = document.createElement("div");
                let eventDate = document.createElement("h3");
                let eventName = document.createElement("h4");
                let eventTime = document.createElement("p");

                //Creating event info tool tip
                let eventInfo = document.createElement("div");
                
                //Adding the appropriate styling
                eventContainer.classList.add("event");
                eventDetails.classList.add("event-details");

                //Applying the info from JSON to screen
                eventDate.innerText = event.date;
                eventName.innerText = event["event-name"];
                eventTime.innerText = event.time;

                //Adds each event card to DOM
                eventContainer.append(eventDate);
                eventDetails.append(eventName);
                eventDetails.append(eventTime);
                eventContainer.append(eventDetails);
                eventsContainer.append(eventContainer);
            });
        }
    }

    reloadEvents.open("GET", "events/events.json", true);
    reloadEvents.send();
}

previousMonth.addEventListener("click", () => {
    if (month !== 0) {
        month--;
    }

    changeEventsInfo();
});

nextMonth.addEventListener("click", () => {
    if (month !== 11) {
        month++;
    }

    changeEventsInfo();
});

monthsElements.forEach((element) => {
    element.addEventListener("click", (e) => {
    month = e.currentTarget.getAttribute("data-value");
    changeEventsInfo();

    if (!selectMonth.classList.contains("hidden")) {
        selectMonth.classList.add("hidden");
    }
})
});

displayCurrentMonth.addEventListener("click", (e) => {
    if (selectMonth.classList.contains("hidden")) {
        selectMonth.classList.remove("hidden");
    }
    selectMonth.style.left = e.clientX - 100 + "px";
    selectMonth.style.top = e.clientY + 20 + "px";
})
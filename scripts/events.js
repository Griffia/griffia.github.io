const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();

let currentMonth = months[date.getMonth()];

const eventsContainer = document.getElementById("events-container");

const eventInfoContainer = document.getElementById("event-info-container");

const events = new XMLHttpRequest();

events.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        let response = JSON.parse(events.responseText);

        response[currentMonth].forEach(event => {

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
};

events.open("GET", "events/events.json", true);
events.send();

// document.addEventListener("mousemove", function(event) {
//     const x = event.clientX;
//     const y = event.clientY;

//     eventInfoContainer.style.top = y + "px";
//     eventInfoContainer.style.left = (x + 10) + "px";
//     eventInfoContainer.style.display = "none";
// });
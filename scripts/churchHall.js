const churchHallContainer = document.getElementById("church-hall-container");

const hallEvents = new XMLHttpRequest();

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const additionalInfo = document.getElementById("additional-info-container");

hallEvents.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(hallEvents.responseText);

        for (let i = 0; i < days.length; i++) {

            let day = days[i];

            //Creates a seperate row for each day of the week
            let row = document.createElement("div");
            row.classList.add("hall-event");

            //Labels the beginning of each row
            let dayOfWeek = document.createElement("h2");
            dayOfWeek.innerText = day;


            //Add styling to the day of the week
            dayOfWeek.classList.add("day-of-week");

            row.append(dayOfWeek);

            response[day].forEach(info => {
                //Creates elements
                let event = document.createElement("div");
                let eventTitle = document.createElement("h3");
                let eventLocation = document.createElement("h4");
                let eventTime = document.createElement("p");

                //Adding information
                eventTitle.innerText = info.event;
                eventLocation.innerText = info.location;
                eventTime.innerText = info.time;

                //Adding styling
                event.classList.add("hall-event-details");
                event.setAttribute("data-description", info.description);
                event.setAttribute("data-contact", info.contact);

                //Appending Elements to the event
                event.append(eventTitle);
                event.append(eventLocation);
                event.append(eventTime);

                //Appending row to container
                row.append(event);

                //Appending to the DOM
                churchHallContainer.append(row);

                event.addEventListener("click", (e) => {
                    let description = document.getElementById("description");
                    let contact = document.getElementById("contact");
                    

                    if (additionalInfo.classList.contains("hidden")) {
                        additionalInfo.classList.remove("hidden");
                    }

                    description.innerText = e.currentTarget.getAttribute("data-description");
                    contact.innerText = e.currentTarget.getAttribute("data-contact");
                });

            });
        }
         
    
    
    }
}

hallEvents.open("GET", "events/churchHall.json");
hallEvents.send();
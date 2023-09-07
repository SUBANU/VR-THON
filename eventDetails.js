  let myData; 

  const url = "https://web-it-like-spider.onrender.com/hackathon/home/";


  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch data. Status code: " + response.status);
      }
    })
    .then(data => {
      myData = data;
      console.log(myData);
      updateContent();
    })
    .catch(error => {
      console.error("Error:", error);
    });

  // Function to update HTML content with myData(json data from the given API)

  function updateContent() {
    document.getElementById("name").textContent = myData.name;
    document.getElementById("start_date").textContent = myData.start_date;
    document.getElementById("end_date").textContent = myData.end_date;
    document.getElementById("registration_start_date").textContent = myData.registration_start_date;
    document.getElementById("registration_end_date").textContent = myData.registration_end_date;
    document.getElementById("contact_number").textContent =myData.contact_number;

    const roundsList = document.getElementById("roundsList");
    myData.rounds.forEach(round => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Round ${round.round_number}:</strong> ${round.round_date}`;
        roundsList.appendChild(listItem);
    });
    const announcementsList = document.getElementById("announcementsList");
    myData.announcements.forEach(announcement => {
        const listItem = document.createElement("li");
        listItem.textContent = announcement.announcement_text;
        announcementsList.appendChild(listItem);
    });

    const organizersList = document.getElementById("organizersList");
    myData.organizers.forEach(organizer => {
        const listItem = document.createElement("li");
        listItem.textContent = organizer.organizer_info;
        organizersList.appendChild(listItem);
    });
    

  }




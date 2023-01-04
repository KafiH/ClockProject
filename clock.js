function getTime() {
  // Get the value of the input field
  var location = document.getElementById("location").value;

  // Make requests to the World Time API using the fetch function
  const fetchEuropeTimezone = () =>
  fetch(`http://worldtimeapi.org/api/timezone/Europe/${location}`).catch(error => {
    console.log("Error fetching Europe timezone:", error);
  });

const fetchAmericaTimezone = () =>
  fetch(`http://worldtimeapi.org/api/timezone/America/${location}`).catch(error => {
    console.log("Error fetching America timezone:", error);
  });

const fetchAfricaTimezone = () =>
  fetch(`http://worldtimeapi.org/api/timezone/Africa/${location}`).catch(error => {
    console.log("Error fetching Africa timezone:", error);
  });

const fetchAsiaTimezone = () =>
  fetch(`http://worldtimeapi.org/api/timezone/Asia/${location}`).catch(error => {
    console.log("Error fetching Asia timezone:", error);
  });

const fetchAustraliaTimezone = () =>
  fetch(`http://worldtimeapi.org/api/timezone/Australia/${location}`).catch(error => {
    console.log("Error fetching Australia timezone:", error);
  });

  

  Promise.all([
    fetchEuropeTimezone(),
    fetchAfricaTimezone(),
    fetchAsiaTimezone(),
    fetchAustraliaTimezone(),
    fetchAmericaTimezone()

  ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      // Extract the current time from the API responses
      let time = data.map(response => response.datetime);

      // Create a new Date object from the unix timestamp
      let date = new Date(time);

      // Use the .toLocaleString() method to format the date and time in a human-readable format
           
      console.log(date)
      console.log(time)

      // Update the time div with the formatted time
      document.getElementById("time").innerHTML = time;
    })
    
    .catch(_error => {
      // handle error
    });
}






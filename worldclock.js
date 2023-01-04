
const TIME_API_URL = 'https://worldtimeapi.org/api/timezone';

const getTime = async (timezone) => {
  const response = await fetch(`${TIME_API_URL}/${timezone}`);
  const data = await response.json();
  return data;
};

const updateTimes = function(locations) {
    locations.forEach(async location => {
    const output = location.querySelector('output');

    const timezone = location.getAttribute('data-timezone');

    const timeResponse = await getTime(timezone);
    const localTime = new Date(timeResponse.datetime);

    output.innerHTML = localTime.toLocaleTimeString();
    const hour = localTime.getHours();

    if (hour >= 9 && hour < 18) {
      location.classList.add('open');
    }
  });
};
updateTimes(location);
setInterval(function() {
  updateTimes();
}, 1000);

const today = new Date();
const currentYear = today.getFullYear();

document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

const temperature = 30;
const windSpeed = 10;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temperature * (windSpeed ** 0.16));
}
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed);
}

document.getElementById("windchill").textContent =
    windChill === "N/A" ? "N/A" : windChill.toFixed(1) + " °C";
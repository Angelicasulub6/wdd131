const today = new Date();
const currentYear = today.getFullYear();

document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent = "Last Modification:" + document.lastModified;
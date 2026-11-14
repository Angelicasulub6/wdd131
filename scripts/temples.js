const today = new Date();
const currentYear = today.getFullYear();

document.querySelector("#currentYear").textContent = currentYear;
document.querySelector("#lastModified").textContent =
    "Last Modification: " + document.lastModified;

    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
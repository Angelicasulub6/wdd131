const today = new Date();
const currentYear = today.getFullYear();

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#primaryNav");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "X" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

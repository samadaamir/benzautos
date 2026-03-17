const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const logos = [
    "images/mercedes.jpeg",
    "images/bmw.jpeg",
    "images/ford.jpeg",
    "images/nissan.jpeg",
    "images/Toyota.jpeg",
    "images/audi.jpeg",
    "images/chevrolet.jpeg",
    "images/porsche.jpeg",
    "images/volkswagen.jpeg",
    "images/lexus.jpeg"
];

const brandTrack = document.getElementById("brand-track");

function loadLogos() {
    [...logos, ...logos].forEach((logo) => {
        const img = document.createElement("img");
        img.src = logo;
        img.alt = logo.split("/").pop().split(".")[0];
        brandTrack.appendChild(img);
    });
}

loadLogos();



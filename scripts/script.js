const navMen = document.querySelector("header nav:last-of-type")
const navMenButt = document.querySelector("header button:first-of-type")
const navX = document.querySelector("header nav:last-of-type div:first-of-type button")
const navMenXSVG = document.querySelector("header button:first-of-type svg:first-of-type")
const navMenButtSVG = document.querySelector("header button:first-of-type svg:last-of-type")

navMenButt.onclick = navMenTogg
navX.onclick = navMenTogg

function navMenTogg() {
    navMen.classList.toggle("hide")
    navMenXSVG.classList.toggle("hide")
    navMenButtSVG.classList.toggle("hide")
}
'use strict'
const slides = document.querySelectorAll(".slide-js")
const next = document.querySelector(".button-1")
const prev = document.querySelector(".button-2")

let steps = 0

let x = true

function slideNext() {
    slides.forEach(slide => {
        slide.style.display = "none"
    })
    console.log(steps);
    ++steps
    console.log(steps);
    if (steps === slides.length) steps = 0

    slides[steps].style.display = "block"
}


function slidePrev() {
    slides.forEach(slide => {
        slide.style.display = "none"
    })
    --steps
    if (steps < 0) steps = slides.length - 1
    slides[steps].style.display = "block"
    console.log(steps); 
}

next.addEventListener('click', slidePrev)
prev.addEventListener('click', slideNext)

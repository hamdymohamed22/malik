let skills = document.querySelector(".our-skills");
let progress = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop - 100) {
        progress.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

//count down
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let mints = document.querySelector(".mints");
let sec = document.querySelector(".sec");

let countdowndate = new Date("Dec 31,2022 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let deff = countdowndate - dateNow;

    let dayst = Math.floor(deff / (1000 * 60 * 60 * 24));
    let hourst = Math.floor((deff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mintst = Math.floor((deff % (1000 * 60 * 60)) / (1000 * 60));
    let sect = Math.floor((deff % (1000 * 60)) / (1000));


    days.innerHTML = dayst;
    hours.innerHTML = hourst;
    mints.innerHTML = mintst;
    sec.innerHTML = sect;


    if (deff < 0) {
        clearInterval(counter);
    }
}, 1000);


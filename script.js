const opening = document.getElementById("opening");
const openBtn = document.getElementById("openBtn");


// =========================
// OPEN INVITATION
// =========================

openBtn.onclick = () => {

    opening.classList.add("opened");
    document.body.classList.remove("locked");

    // Start music automatically
    if (!audio) {
        audio = new Audio("assets/music.mp3");
        audio.loop = true;
        audio.volume = 0.55;
    }

    audio.play()
        .then(() => {
            playing = true;
            musicToggle.textContent = "Ⅱ";
        })
        .catch(() => { });

    // Start hero animation
    startHeroAnimation();

};


// =========================
// HERO TEXT ANIMATION
// =========================

function startHeroAnimation() {

    const items = [
        document.querySelector(".hero-content .eyebrow"),
        document.querySelector(".hero-content h2"),
        document.querySelector(".hero-content .wedding-title"),
        document.querySelector(".hero-content .date"),
        document.querySelector(".hero-content .venue"),
        document.querySelector(".hero-content .time")
    ];

    items.forEach((item, index) => {

        if (!item) return;

        // Initial animation position
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";

        setTimeout(() => {

            item.style.transition =
                "opacity 1s ease, transform 1s ease";

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }, 500 + (index * 350));

    });

}


// =========================
// COUNTDOWN
// =========================

const weddingDate =
    new Date("2026-11-06T17:00:00+03:00").getTime();


function tick() {

    const d = Math.max(
        0,
        weddingDate - Date.now()
    );

    const v = {

        days:
            Math.floor(d / 86400000),

        hours:
            Math.floor(d / 3600000) % 24,

        minutes:
            Math.floor(d / 60000) % 60,

        seconds:
            Math.floor(d / 1000) % 60

    };


    // Main countdown
    ["days", "hours", "minutes", "seconds"]
        .forEach(k => {

            const el =
                document.getElementById(k);

            if (el) {

                el.textContent =
                    String(v[k]).padStart(2, "0");

            }

        });


    // Countdown slide
    [
        ["days2", v.days],
        ["hours2", v.hours],
        ["minutes2", v.minutes]

    ].forEach(([id, n]) => {

        const el =
            document.getElementById(id);

        if (el) {

            el.textContent =
                String(n).padStart(2, "0");

        }

    });

}


tick();

setInterval(tick, 1000);


// =========================
// MUSIC
// =========================

let audio;
let playing = false;

const musicToggle =
    document.getElementById("musicToggle");


musicToggle.onclick = () => {

    if (!audio) {

        audio = new Audio(
            "assets/music.mp3"
        );

        audio.loop = true;
        audio.volume = 0.55;

    }


    if (playing) {

        audio.pause();

        playing = false;

        musicToggle.textContent = "♫";

    }

    else {

        audio.play()
            .then(() => {

                playing = true;

                musicToggle.textContent = "Ⅱ";

            })
            .catch(() => { });

    }

};


// =========================
// RSVP
// =========================

document.getElementById("rsvpForm").onsubmit = e => {

    e.preventDefault();

    document.getElementById("rsvpMsg").textContent =
        "Thank you — your RSVP has been received.";

    e.target.reset();

};
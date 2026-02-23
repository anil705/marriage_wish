const questionSection = document.getElementById("questionSection");
// ===== Buttons & Elements =====
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const music = document.getElementById("music");

// ===== No Button Move Effect =====
noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// ===== Yes Button Click =====
// yesBtn.addEventListener("click", function () {
//     result.classList.remove("hidden");
//     music.play();
//     startConfetti();
//     slowScrollToBottom();
//     yesBtn.style.display = "none";
// noBtn.style.display = "none";
// });
yesBtn.addEventListener("click", function () {

  // Hide whole question section
  questionSection.style.display = "none";

  // Show result section
  result.classList.remove("hidden");

  music.play();
  startConfetti();
  slowScrollToBottom();
});

// ===== Confetti Setup =====
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
let confettiStarted = false;

// Create confetti particles
for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 150,
        color: "hsl(" + Math.random() * 360 + ",100%,50%)"
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < confetti.length; i++) {
        let c = confetti[i];

        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
        ctx.fill();

        c.y += 2;

        if (c.y > canvas.height) {
            c.y = -10;
            c.x = Math.random() * canvas.width;
        }
    }
}

function startConfetti() {
    if (!confettiStarted) {
        setInterval(drawConfetti, 20);
        confettiStarted = true;
    }
}

// ===== Slow Motion Scroll =====
function slowScrollToBottom() {
    let scrollHeight = document.body.scrollHeight;
    let currentPosition = window.scrollY;

    let interval = setInterval(function () {

        currentPosition += 2;  // Speed (1 = slower, 3 = faster)

        window.scrollTo(0, currentPosition);

        if (currentPosition >= scrollHeight) {
            clearInterval(interval);
        }

    }, 20);  // Delay (20ms = smooth slow)
}
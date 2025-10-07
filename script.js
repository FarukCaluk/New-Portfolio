let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*='${id}']`)
          ?.classList.add("active");
      });
    }
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
window.addEventListener("scroll", function () {
  const dots = document.querySelectorAll(".timeline-dot");
  const scrollY = window.scrollY;
  dots.forEach((dot, i) => {
    // Pomjeri svaku tačku malo drugačije za efekat talasa
    const offset = Math.sin(scrollY / 100 + i) * 10; // 10px gore-dolje
    dot.style.transform = `translateY(${offset}px)`;
  });
});

window.addEventListener("scroll", function () {
  const timeline = document.querySelector(".timeline-items");
  const dot = document.getElementById("moving-dot");
  if (!timeline || !dot) return;

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Izračunaj koliko je timeline vidljiv na ekranu
  let percent = 0;
  if (rect.top < windowHeight && rect.bottom > 0) {
    percent = Math.min(
      1,
      Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight))
    );
  }

  // Postavi dot od vrha do dna timeline-a
  const minY = 0;
  const maxY = rect.height - 21; // 21 je visina tačke
  const y = minY + percent * maxY;

  dot.style.top = y + "px";
});
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("matrix-bg");
  const ctx = canvas.getContext("2d");

  // Resize canvas
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Matrix chars
  const chars = ["0", "1"];
  const fontSize = 22;
  const columns = () => Math.floor(canvas.width / fontSize);
  let drops = Array(columns()).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(10,15,26,0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px 'Orbitron', monospace";
    ctx.fillStyle = "#00fff7";
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_ze0p0br", "template_oma0xz8", this).then(
      function () {
        alert("Poruka je poslana! ✅");
      },
      function (error) {
        alert("Greška sa slanjem poruke ❌: " + JSON.stringify(error));
      }
    );
  });

const roles = [
  "Developer",
  "Student at FIT UNMO",
  "Hybrid Athlete",
  "Taekwondo Trainer",
];
const span = document.querySelector(".text-animation span");
let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeRole() {
  if (typing) {
    if (charIndex < roles[roleIndex].length) {
      span.textContent += roles[roleIndex][charIndex];
      charIndex++;
      setTimeout(typeRole, 90);
    } else {
      typing = false;
      setTimeout(typeRole, 1200);
    }
  } else {
    if (charIndex > 0) {
      span.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeRole, 40);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 400);
    }
  }
}
typeRole();

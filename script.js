const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  const spans = hamburger.querySelectorAll("span");

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
      spans[0].style.transform = "rotate(45deg) translate(5px,5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px,-5px)";
    } else {
      spans.forEach(span => {
        span.style.transform = "none";
        span.style.opacity = "1";
      });
    }
  });
}

document.querySelectorAll("main .btn-link").forEach(btn =>{
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.background = `radial-gradient(circle at ${x}px ${y}px,
      rgba(162,148,207,0.3), transparent 60%)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.background = "transparent";
  });

  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
  });

  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
  });
});


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.8)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.6)";
    navbar.style.boxShadow = "none";
  }
});

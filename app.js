// Initializing particles js for background animation in :)
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 80,
      color: "#00a2ff",
      opacity: 0.7,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// making mobile menu working
var options = document.querySelectorAll(".dropdown li");
var container = document.querySelector(".dropdown");
var menuIconBtn = document.querySelector(".menu-icon");
var login_btn = document.querySelectorAll(".login_btn");
var signup_btn = document.querySelectorAll(".signup_btn");
var login_section = document.querySelector(".for_login");
var signup_section = document.querySelector(".for_signup");

console.log(login_btn, signup_btn);

options.forEach((item) => {
  item.classList.add("nav_item");
  item.addEventListener("click", () => {
    container.classList.toggle("active");
    container.classList.toggle("deactive");
    console.log("You clicked item");
  });
});

function handle_login_section() {
  signup_section.classList.add("hidden__form_sign_up");
  login_section.classList.toggle("hidden__form_log_in");
}

function handle_signup_section() {
  login_section.classList.add("hidden__form_log_in");
  signup_section.classList.toggle("hidden__form_sign_up");
}

// for mobile
signup_btn[0].addEventListener("click", handle_signup_section);

// for desktop
signup_btn[1].addEventListener("click", handle_signup_section);

// for mobile
login_btn[0].addEventListener("click", handle_login_section);

// for desktop
login_btn[1].addEventListener("click", handle_login_section);

menuIconBtn.addEventListener("click", () => {
  container.classList.toggle("active");
  container.classList.toggle("deactive");
  console.log("menu icon toggled");
});

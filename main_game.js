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
      enable: false,
      distance: 180,
      color: "#00a2ff",
      opacity: 1,
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

var options = document.querySelectorAll(".dropdown li");
var container = document.querySelector(".dropdown");
var menuIconBtn = document.querySelector(".menu-icon");

var red = document.querySelector(".red");
var black = document.querySelector(".black");
var odd = document.querySelector(".odd");
var even = document.querySelector(".even");

function handleclickToggler(e) {
  red.style.border = "3px solid rgba(0, 0, 0)";
  black.style.border = "3px solid rgba(255, 0, 0)";
  odd.style.border = "3px solid rgb(0, 124, 182)";
  even.style.border = "3px solid rgb(0, 124, 182)";

  odd.style.borderRight = "1px solid white";
  let bg =
    this.classList[0] == "odd" || this.classList[0] == "even"
      ? "white"
      : this.classList[0];

  let border_style = `3px solid yellow`;
  console.log(border_style);
  this.style.border = border_style;
}

red.addEventListener("click", handleclickToggler);
black.addEventListener("click", handleclickToggler);
odd.addEventListener("click", handleclickToggler);
even.addEventListener("click", handleclickToggler);

options.forEach((item) => {
  item.classList.add("nav_item");
  item.addEventListener("click", () => {
    container.classList.toggle("active");
    container.classList.toggle("deactive");
    console.log("You clicked item");
  });
});

menuIconBtn.addEventListener("click", () => {
  container.classList.toggle("active");
  container.classList.toggle("deactive");
  console.log("menu icon toggled");
});

const technalogies = [
  {
    item: "./logo/react.png",
    name: "React"
  },
  {
    item: "./logo/laravel-removebg-preview.png",
    name: "Laravel",
  },
  {
    item: "./logo/redux.png",
    name: "Redux",
  },
  {
    item: "./logo/php-removebg-preview.png",
    name: "PHP",
  },
  {
    item: "./logo/mysql-removebg-preview.png",
    name: "MySQL",
  },
  {
    item: "./logo/linux-removebg-preview.png",
    name: "Linux",
  },
  {
    item: "./logo/javascript.png",
    name: "Javascript",
  },
  {
    item: "./logo/html5.png",
    name: "HTML",
  },
  {
    item: "./logo/css3.png",
    name: "CSS",
  },
  {
    item: "./logo/bootstrap.png",
    name: "Bootstrap",
  },
  {
    item: "./logo/postman.png",
    name: "Postman",
  },
  {
    item: "./logo/git.png",
    name: "Git",
  }
];
const typed1 = new Typed(".name-text", {
  strings: ["Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
window.addEventListener("load", function () {
  let x = technalogies.map(
    (item) => `<div class="col-md-2 col m-2 p-4 div-boarder">
    <div class="d-flex align-items-center">
      <div class="technologies me-3">
        <img class="technologies-img" src="${item.item}" alt="${item.name}">
      </div>
      <div>
        <strong class="fs-5">${item.name}</strong>
      </div>
    </div>
  </div>`
  );
  this.document.getElementById("array").innerHTML = x;
  // JavaScript to add the 'scrolled' class on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("scroll");
    const threshold = 200;

    if (window.scrollY > threshold) {
      navbar.classList.add("animation--down");
    } else {
      navbar.classList.remove("animation--down");
    }
  });
});
document.getElementById("aboutLink").addEventListener("click", function (event) {
  event.preventDefault();
  const aboutSection = document.getElementById("aboutus");
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
document.getElementById("skillLink").addEventListener("click", function (event) {
  event.preventDefault();
  const aboutSection = document.getElementById("skilllink");
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
document.getElementById("experienceLink").addEventListener("click", function (event) {
  event.preventDefault();
  const aboutSection = document.getElementById("experience");
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

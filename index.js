const technalogies = [
  {
    item: "./logo/react-removebg-preview.png",
    name: "REACT",
    data: "React.js is a JavaScript library for building interactive user interfaces. It helps create fast, dynamic web apps by using reusable components.",
  },
  {
    item: "./logo/laravel-removebg-preview.png",
    name: "LARAVEL",
    data: "Laravel is a powerful and elegant PHP framework designed for building web applications",
  },
  {
    item: "./logo/php-removebg-preview.png",
    name: "PHP",
    data: "PHP is a server-side programming language used to create dynamic websites and applications.",
  },
  {
    item: "./logo/mysql-removebg-preview.png",
    name: "MYSQL",
    data: "MySQL is a free, open-source database used to store and manage data. It uses SQL to organize and retrieve information quickly and reliably.",
  },
  {
    item: "./logo/linux-removebg-preview.png",
    name: "Linux",
    data: "Linux is an open-source operating system known for being secure, stable, and customizable, widely used for servers and development.",
  },
  {
    item: "./logo/JavaScript-removebg-preview.png",
    name: "Javascript",
    data: "JavaScript is a programming language used to create interactive effects and dynamic content on websites.",
  },
  {
    item: "./logo/html-removebg-preview.png",
    name: "HTML",
    data: "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web, such as text, images, and links.",
  },
  {
    item: "./logo/css-removebg-preview.png",
    name: "CSS",
    data: "CSS (Cascading Style Sheets) is used to style and design the layout of web pages, including colors, fonts, and spacing.",
  },
  {
    item: "./logo/bootstrap-removebg-preview.png",
    name: "Bootstrap",
    data: "Bootstrap is a framework that helps build responsive websites quickly with ready-to-use components.",
  },
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
  <div class="technologies m-auto">
    <img class="technologies-img" src="${item.item}" alt="${item.name}">
  </div>
  <div class="d-flex justify-content-center">
    <strong class="fs-5 mt-3 ">${item.name}</strong>
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <span class="">${item.data}</span>
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
document.getElementById("aboutLink").addEventListener("click", function(event) {
  event.preventDefault();
  const aboutSection = document.getElementById("aboutus");
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
document.getElementById("skillLink").addEventListener("click", function(event) {
  event.preventDefault();
  const aboutSection = document.getElementById("skilllink");
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

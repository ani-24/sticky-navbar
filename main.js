const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  nav.classList.toggle("change", window.scrollY > 0);
  console.log(nav);
});

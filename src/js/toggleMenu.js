const getId = (id) => document.getElementById(id);
const menuItem = document.querySelectorAll("ul li");

const burgerBtn = getId("burger-button");
const navList = getId("nav-list");
burgerBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
  burgerBtn.classList.toggle("show");
});

for (menu of menuItem) {
  menu.addEventListener("click", () => {
    navList.classList.toggle("show");
    burgerBtn.classList.toggle("show");
  });
}

document.addEventListener("click", (event) => {
  if (event.target.closest("header") === null) {
    navList.classList.remove("show");
    burgerBtn.classList.remove("show");
  }
});

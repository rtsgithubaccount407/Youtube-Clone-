const sideicon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar'); // reduce sidebar
const container = document.querySelector('.container') // menu icon
const bannerss = document.querySelector(".banner img");


sideicon.addEventListener("click", function () {
  sidebar.classList.toggle('small-sidebar')
  container.classList.toggle('large-container')
  bannerss.classList.toggle("large-img"); // add css element
});
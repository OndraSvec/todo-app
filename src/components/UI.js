export default function events() {
  const navMenu = document.getElementById("navMenu");
  navMenu.addEventListener("click", toggleSideBar);

  function toggleSideBar() {
    const sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle("slideIn");
  }
}

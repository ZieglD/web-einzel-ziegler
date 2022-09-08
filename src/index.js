import './styles/style.scss';

function toggleVerticalNav() {
  let topNavBar = document.getElementById("topNavBar");
  if (topNavBar.className === "navBar") {
    topNavBar.className += " responsive";
  } else {
    topNavBar.className = "navBar";
  }
}

window.toggleVerticalNav = toggleVerticalNav;
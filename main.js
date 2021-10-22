const hamburgerMenu = document.getElementsByClassName("hamburger-menu");
const hamburgerBars = document.getElementsByClassName("fa-bars");
const hamburgerClose = document.getElementsByClassName("fa-times");

hamburgerBars.addEventListener('click',
    function showMenu() {
        hamburgerMenu.style.display = block;
    }
);
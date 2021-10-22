const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerBars = document.querySelector(".header-right a i");
const hamburgerClose = document.querySelector(".close");


hamburgerBars.addEventListener('click', function() {
        hamburgerMenu.style.display = 'block';
    }
);

hamburgerClose.addEventListener('click', function() {
        hamburgerMenu.style.display = 'none';
    }
);

const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerBars = document.querySelector(".header-right a i");
const hamburgerClose = document.querySelector(".close");




function checkMediaQuery() {
    if (window.innerWidth > 1000) {
        hamburgerMenu.style.display = 'none';
    } else {
        hamburgerBars.addEventListener('click', function() {
            hamburgerMenu.style.display = 'block';
            }
        );
    
    hamburgerClose.addEventListener('click', function() {
            hamburgerMenu.style.display = 'none';
            }
        );
    }
}
  
 window.addEventListener('resize', checkMediaQuery);
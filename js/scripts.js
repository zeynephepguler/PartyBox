// JavaScript dosyanız

window.addEventListener('DOMContentLoaded', event => {
    
    setTimeout(function() {
        var loadingScreen = document.getElementById("loading-screen");
        loadingScreen.classList.add("hide-loading");
        loadingScreen.style.display = "none";
    }, 4000);
  
    
   
    

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Dropdown öğelerini etkinleştir
    var dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function () {
            var parent = dropdown.parentNode;
            parent.classList.toggle('show');
        });
    });

    // Sayfa üzerinde herhangi bir yere tıklandığında dropdown'ları kapat
    document.addEventListener('click', function (event) {
        var dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function (dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
    });

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    
});

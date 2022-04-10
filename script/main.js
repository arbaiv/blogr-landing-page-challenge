// Mobile responsive navbar
const menuButton = document.getElementById("hamburger");
const menuCloseButton = document.getElementById("navbar-close-icon");
const navbar = document.getElementById("navbar");
menuButton.onclick = function(){
    navbar.className = "navbar-active";
    menuButton.className = "nav-icon-inactive";
    menuCloseButton.className = "nav-icon-active";
};
menuCloseButton.onclick = function(){
    navbar.className = "navbar-inactive";
    menuButton.className = "nav-icon-active";
    menuCloseButton.className = "nav-icon-inactive";
    const subNavbarList = document.querySelectorAll(".list-sub-navbar");
    for(var i = 0; i < subNavbarList.length; i++){
        if(subNavbarList[i].classList.contains("sub-navbar-active")){
            subNavbarList[i].classList.remove("sub-navbar-active");
            subNavbarList[i].classList.add("sub-navbar-inactive");
            subNavbarList[i].previousElementSibling.lastChild.className = "list-arrow";
        }
    }
};
// Change subNavbar arrow icon color
(function (){
    if(window.innerWidth >= 900){
        var navLinkImage = document.querySelectorAll(".nav-list-link img");
        for(var i = 0; i < navLinkImage.length; i++){
            navLinkImage[i].src = "images/icon-arrow-light.svg";
        }
}
}());

// SubNavBar functionality
const subNavLink = document.querySelectorAll("a.nav-list-link");
for(var i = 0; i < subNavLink.length; i++){
    subNavLink[i].addEventListener("click", function(){
        const subNav  = this.nextElementSibling;
        const arrowIcon = this.lastChild;
        if(arrowIcon.className === "list-arrow"){
            // allSubNav functionality for closing other opened subnav
            var allSubNav = document.getElementsByClassName("list-sub-navbar");
            for(var j = 0; j < allSubNav.length; j++){
                if(allSubNav[j].classList.contains("sub-navbar-active")){            
                    allSubNav[j].classList.remove("sub-navbar-active");
                    allSubNav[j].classList.add("sub-navbar-inactive");
                    allSubNav[j].previousElementSibling.lastChild.className = "list-arrow";
                }
            }
            subNav.classList.remove("sub-navbar-inactive");
            subNav.classList.add("sub-navbar-active");
            arrowIcon.className = "arrow-up";
        } else {
            subNav.classList.remove("sub-navbar-active");
            subNav.classList.add("sub-navbar-inactive");
            arrowIcon.className = "list-arrow";
        }
    });
}
// Disable Links
var mainHeaderLinks = document.querySelectorAll("#main-header a[href=\"#\"], #footer-navbar a[href=\"#\"]");
for (var i = 0; i < mainHeaderLinks.length; i++){
    mainHeaderLinks[i].onclick = function(e){
        e.preventDefault();
    };
}

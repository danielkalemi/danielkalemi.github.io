'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * go to top on reload
 */

  if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}


/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});

// select the navbar items
const navbarItems = document.querySelectorAll("[data-navbar] li");

// loop through the navbar items
navbarItems.forEach((item) => {
  // add a click event listener to each item
  item.addEventListener("click", () => {
    // toggle the active class of the nav toggle button, the navbar, and the document body
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
    elemToggleFunc(document.body);
  });
});


/**
 * moving letters
 */

    // D
    TweenMax.to(".block-1", 2.5, {
      x: "-70%",
      y: "-130%",
      scale: "1.4",
      bezier:{
        type: "thru",
        values:[
            { left: "0%", top: "0%" }, 
            { left: "100%", top: "50%" },
            { left: "0%", top: "25%" }, 
            { left: "100%", top: "100%" }
         ],
        autoRotate: true,
      }, 
      // repeat:-1, 
      ease: Expo.easeInOut,
    });

    // A
    TweenMax.to(".block-2", 2.5, {
      x: "250%",
      y: "-175%",
      scale: "1.2",
      bezier:{
        type: "thru",
        values:[
            { left: "0%", top: "0%" }, 
            { left: "100%", top: "50%" },
            { left: "0%", top: "25%" }, 
            { left: "100%", top: "100%" }
         ],
        autoRotate: true,
      }, 
      // repeat:-1, 
      ease: Expo.easeInOut,
    });

    // N
    TweenMax.to(".block-3", 2.5, {
      x: "335%",
      y: "-38%",
      scale: "1.2",
      bezier:{
        type: "thru",
        values:[
            { left: "0%", top: "0%" }, 
            { left: "100%", top: "50%" },
            { left: "0%", top: "25%" }, 
            { left: "100%", top: "100%" }
         ],
        autoRotate: true,
      }, 
      // repeat:-1, 
      ease: Expo.easeInOut,
    });

    // I
    TweenMax.to(".block-4", 2.5, {
      x: "110%",
      y: "195%",
      scale: "1.1",
      bezier:{
        type: "thru",
        values:[
            { left: "0%", top: "0%" }, 
            { left: "100%", top: "50%" },
            { left: "0%", top: "25%" }, 
            { left: "100%", top: "100%" }
         ],
        autoRotate: true,
      }, 
      // repeat:-1, 
      ease: Expo.easeInOut,
    });

    // E
    TweenMax.to(".block-5", 2.5, {
      x: "-370%",
      y: "175%",
      scale: "1.1",
      bezier:{
        type: "thru",
        values:[
            { left: "0%", top: "0%" }, 
            { left: "100%", top: "50%" },
            { left: "0%", top: "25%" }, 
            { left: "100%", top: "100%" }
         ],
        autoRotate: true,
      }, 
      // repeat:-1, 
      ease: Expo.easeInOut,
    });

    // L
    TweenMax.to(".block-6", 2.5, {
      x: "-680%",
      y: "70%",
      scale: "1.2",
      bezier:{
        type: "thru",
        values:[
            { left: "0%", top: "0%" }, 
            { left: "100%", top: "50%" },
            { left: "0%", top: "25%" }, 
            { left: "100%", top: "100%" }
         ],
        autoRotate: true,
      }, 
      // repeat:-1, 
      ease: Expo.easeInOut,
    });

    TweenMax.to(".box", 2.9, {
      y: "100%",
      ease: Expo.easeInOut,
    });

    TweenMax.from(".circle-shape", 2.9, {
      scale: "0",
      ease: Expo.easeInOut,
    });
    TweenMax.from(".circle-shape-2", 2.9, {
      scale: "0",
      ease: Expo.easeInOut,
    });
    TweenMax.from(".circle-shape-3", 2.9, {
      x: "-685%",
      y: "10%",
      scale: "0",
      ease: Expo.easeInOut,
    });




/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}
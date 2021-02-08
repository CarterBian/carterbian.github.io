/*global $, jQuery, alert*/
$(document).ready(function() {
  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Carter Bian.", "a student at UCLA.", "a researcher for PARISlab at UCLA.",
       "a developer for the Daily Bruin."],
      typeSpeed: 100,
      loop: true,
    });
  });

  var typed2 = $(".typed2");
  $(function() {
    typed2.typed({
      strings: ["Carter Bian ..."],
      typeSpeed: 100,
      loop: true,
      showCursor: true,
      backDelay: 10000
    });
  });
});

let loadingScreen = document.querySelector(".loading-screen");
let heroText = document.getElementById("hero-text");
window.onload = transitionToMainScreen;

//waits additional 500 milliseconds after loading
function transitionToMainScreen() {
    setTimeout(animateClosingScreen, 500);
}

function animateClosingScreen() {
  loadingScreen.classList.add("hide");
}

loadingScreen.addEventListener("animationend", switchToMainScreen);

function switchToMainScreen() {
  loadingScreen.style.display = "none";
  
}
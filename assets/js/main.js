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
});

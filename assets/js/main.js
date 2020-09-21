/*global $, jQuery, alert*/
$(document).ready(function() {
  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Carter Bian.", "a student at UCLA.", "an intrepid explorer.",
       "a voracious learner."],
      typeSpeed: 100,
      loop: true,
    });
  });
});

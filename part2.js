$(document).ready(function () {

  // Task 2. Visibility methods
  $("#btnHide").click(function () {
    $("#para").hide();
  });
  $("#btnShow").click(function () {
    $("#para").show();
  });
  $("#btnToggle").click(function () {
    $("#para").toggle();
  });

  // Task 3. Fade methods
  $("#btnFadeOut").click(function () {
    $("#pic").fadeOut();
  });
  $("#btnFadeIn").click(function () {
    $("#pic").fadeIn();
  });
  $("#btnFadeToggle").click(function () {
    $("#pic").fadeToggle();
  });

  // Task 4. Slide methods
  $("#btnSlideUp").click(function () {
    $("#panel").slideUp();
  });
  $("#btnSlideDown").click(function () {
    $("#panel").slideDown();
  });
  $("#btnSlideToggle").click(function () {
    $("#panel").slideToggle();
  });
});

// Task 11. Mini project: Accordion Menu
$(document).ready(function () {

  // Click on a title: open this section, close the others
  $(".acc-header").click(function () {
    const body = $(this).next(".acc-body");      // the text under this title

    if (body.is(":visible")) {
      body.slideUp();
      $(this).removeClass("active");
    } else {
      $(".acc-body").slideUp();                  // close all sections
      $(".acc-header").removeClass("active");
      body.slideDown();                          // open this one
      $(this).addClass("active");
    }
  });

  // Extra buttons
  $("#btnOpenAll").click(function () {
    $(".acc-body").slideDown();
    $(".acc-header").addClass("active");
  });

  $("#btnCloseAll").click(function () {
    $(".acc-body").slideUp();
    $(".acc-header").removeClass("active");
  });
});

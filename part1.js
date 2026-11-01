// Task 0. Setup: this code runs when the page is ready
$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#readyMsg").text("jQuery is ready!");

  // Task 1. Selectors & CSS

  // By ID (#) and .text()
  $("#btnId").click(function () {
    $("#demoTitle").text("Title changed with the ID selector");
  });

  // By class (.) and .html()
  $("#btnClass").click(function () {
    $(".demoText").html("This text is <b>bold</b> now (changed with .html())");
  });

  // By tag (li) and .css()
  $("#btnTag").click(function () {
    $("#demoBox li").css("color", "crimson");
  });

  // .css() with several properties at once
  $("#btnCss").click(function () {
    $("#demoBox").css({
      "background-color": "#fff3bf",
      "padding": "24px",
      "border-radius": "12px"
    });
  });

  // Reload the page to return to the start
  $("#btnReset").click(function () {
    location.reload();
  });
});

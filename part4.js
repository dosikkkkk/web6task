$(document).ready(function () {

  // Task 8. Basic animation: bigger size + new position
  $("#btnAnim8").click(function () {
    $("#box8").animate({
      width: "160px",
      height: "160px",
      left: "220px",
      top: "60px"
    }, 1000);
  });
  $("#btnBack8").click(function () {
    $("#box8").animate({ width: "80px", height: "80px", left: "0px", top: "0px" }, 1000);
  });

  // Task 9. Sequential animations (jQuery runs chained animate() calls one by one)
  $("#btnAnim9").click(function () {
    if ($("#box9").is(":animated")) {
      return;                                            // do not start twice
    }
    $("#box9")
      .animate({ left: "220px" }, 800)                   // 1. move right
      .animate({ top: "150px" }, 800)                    // 2. move down
      .animate({ width: "40px", height: "40px" }, 800)   // 3. shrink
      .animate({ left: "0px", top: "0px", width: "80px", height: "80px" }, 800);  // 4. return
  });

  // Task 10. Combined animation: opacity + size + movement in ONE animate() call
  $("#btnAnim10").click(function () {
    $("#box10").animate({
      opacity: 0.4,
      width: "140px",
      height: "140px",
      left: "220px",
      top: "70px"
    }, 1200);
  });
  $("#btnBack10").click(function () {
    $("#box10").animate({ opacity: 1, width: "80px", height: "80px", left: "0px", top: "0px" }, 1200);
  });
});

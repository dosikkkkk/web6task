$(document).ready(function () {

  // Task 5. Add & remove elements
  let count = 0;

  $("#btnAppend").click(function () {
    count++;
    // append() adds the new item to the END of the list
    $("#list").append("<li class='list-group-item'>Item " + count + "</li>");
  });

  $("#btnPrepend").click(function () {
    count++;
    // prepend() adds the new item to the START of the list
    $("#list").prepend("<li class='list-group-item'>Item " + count + "</li>");
  });

  $("#btnRemove").click(function () {
    // remove() deletes the last item
    $("#list li").last().remove();
  });

  // Task 6. Modifying attributes
  let firstImage = true;
  $("#btnSrc").click(function () {
    if (firstImage) {
      $("#attrImg").attr("src", "pic2.svg");
    } else {
      $("#attrImg").attr("src", "pic1.svg");
    }
    firstImage = !firstImage;
  });

  let firstLink = true;
  $("#btnHref").click(function () {
    if (firstLink) {
      $("#myLink").attr("href", "https://api.jquery.com");
    } else {
      $("#myLink").attr("href", "https://jquery.com");
    }
    firstLink = !firstLink;
    $("#hrefShown").text($("#myLink").attr("href"));
  });

  // Task 7. Form interaction: show the input live while typing
  $("#name").keyup(function () {
    $("#outName").text($("#name").val());
  });
  $("#email").keyup(function () {
    $("#outEmail").text($("#email").val());
  });
});

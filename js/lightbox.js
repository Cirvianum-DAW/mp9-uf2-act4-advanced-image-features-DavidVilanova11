// Lightbox functionality
$(document).ready(function () {
  // Open Lightbox when clicking on an image link
  $("a[data-lightbox]").click(function (event) {
    event.preventDefault();
    var imageHref = $(this).attr("href");
    var imageTitle = $(this).attr("data-title");
    $("#lightbox").html(
      '<span class="close">&times;</span><img src="' +
        imageHref +
        '" alt="' +
        imageTitle +
        '">'
    );
    $("#lightbox").fadeIn();
  });

  // Close Lightbox when clicking on the close button or outside the image
  $(document).on("click", "#lightbox .close, #lightbox", function () {
    $("#lightbox").fadeOut();
  });
});

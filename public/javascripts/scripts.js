// JQuery to scroll down when messages reach bottom of page
$(document).ready(function() {
  $("form").on("submit", function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "fast");
    return false;
  });
});
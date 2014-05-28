$(document).ready(function() {
  
  $("form").on("submit", function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
  });
});
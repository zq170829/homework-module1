$(document).ready(function () {
  $("td")
    .not(':contains("Not Available")')
    .click(function () {
      $(this).toggleClass("highlight");
    });
});

$(document).ready(function () {
  AOS.init();
  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-nav").find(".activate").removeClass("activate");
    $(this).addClass("activate");
  });
});




$(document).ready(function () {

  $("#searchBtn").on("click", function (event) {
    
    const location = $("#location").val().trim();

    event.preventDefault();
    if (!location) {
      return;
    }
    
    $.get("/properties/" + location, function() {
      window.location.href = "/properties/" + location;
    });

  });

});

$(document).ready(function() {

  const locationInput = $("#locationInput");

  //Ajax call to database table Properties
  


  function handleFormSubmit(event) {
    event.preventDefault();
    if (!locationInput.val().trim()) {
      return;
    }
    console.log(locationInput.val());
    $.get("/properties/"+locationInput.val());

    // $.ajax({
    //   method: "GET",
    //   url: "/properties",
    //   data: locationInput.val()
    // })
    // .done(function() {
    //   window.location.href = "/properties";
    //   console.log("inside public/assets/js/property.js");
    //   console.log(locationInput.val());
    // });




  };

  $("#locationInputForm").on("click", handleFormSubmit);
});


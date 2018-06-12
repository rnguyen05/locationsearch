$(document).ready(function () {
  const location = $("#location");

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!location.val().trim()) {
      return;
    }
    $.post("/properties/" + location.val());
    console.log("get /properties/"+location.val());
  };

  $("#locationInputForm").on("click", handleFormSubmit);
});

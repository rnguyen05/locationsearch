


$("document").ready(function () {
    //when loginBtn is clicked will go to routes/users
    $("#loginBtn").on("click", function (event) {
        event.preventDefault();
        $.get("/users", function () {
            window.location.href = "/users";
        });
    });

    $("#facebookBtn").on("click", function (event) {
        event.preventDefault();
        $.get("/users/auth/facebook", function () {
            window.location.href = "/users";
        });
    });

});
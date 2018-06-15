


$("document").ready(function () {
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


    $("#userLoginForm").on("submit", function (event) {
        console.log("userLoginForm clicked");
        event.preventDefault();
        var userData = {
            username: $("#userId").val().trim(),
            password: $("#userPwd").val().trim()
        };

        if (!userData.username) {
            $("#userId").css("border", "solid 1px red");
            $("#username-feedback").text("Please enter a username");
            return;
        }

        if (!userData.password) {
            $("#userPwd").css("border", "solid 1px red");
            $("#password-feedback").text("Please enter a password");
            return;
        }

        loginUser(userData.username, userData.password);
        $("#userId").val("");
        $("#userPwd").val("");
    });


    // loginUser does a post to our "api/login" route and if successful, 
    //redirects us the the members page
    function loginUser(username, password) {
        $.post("/users/login", {
            username: username,
            password: password
        }).then(function (data) {
            console.log(data);
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(function (err) {
            $("#password-feedback").text("Incorrect Username or Password");
        });
    }
});
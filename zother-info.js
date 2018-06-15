Facebook 
App Name: Jet
App Id: 202065647087620
App Secret: 77c213b28e805272002ed465854d3cca
Client Token: 2fa336a232aa7b02a2d650fe0ca3fed5
Site Url: https://locationsearch-prj2.herokuapp.com/


Depending on the Facebook data you request from people using Facebook Login, 
you may need to submit your app for review prior to launch.








1. Setup Facebook SDK for javascript

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{latest-api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>


2. Check login status

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

response
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}

3. FB button

<fb:login-button 
scope="public_profile,email"
onlogin="checkLoginState();">
</fb:login-button>

callback

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }



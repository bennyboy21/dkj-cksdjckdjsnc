function onSignIn(googleUser) {
    const firebaseConfig = {
        apiKey: "AIzaSyCecv_m29Y4RmQCL6tFmwXBo-bAeUunFUk",
        authDomain: "text-it-now.firebaseapp.com",
        projectId: "text-it-now",
        storageBucket: "text-it-now.appspot.com",
        messagingSenderId: "290899362773",
        appId: "1:290899362773:web:54a1b0bfd3781020ebb35c",
        measurementId: "G-XYGGN37B22"
    };

    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName())
    $("#email").text(profile.getEmail())
    $("#image").text("src", profile.getImageUrl())
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");


    console.log(profile)
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // style.display = "none"
    const allowedEmailDomain = 'student.tdsb.on.ca';

    const email = profile.getEmail();

    if (email.split('@')[1] === allowedEmailDomain) {
        localStorage.setItem("Name", profile.getName())
        localStorage.setItem("Profile", profile.getName())
        localStorage.setItem("Name", profile.getName())
        window.location = "index.html"
    } else {
        window.location = "emailNotAccepted.html"
    }
}

document.querySelector(".g-signin2").textContent = "something"

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}
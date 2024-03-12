let form = document.getElementById('form');
let username = document.getElementById('uname');
let password = document.getElementById('pass');
let confirmPassword = document.getElementById('confirmPassword');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');


const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



function validateInput() {
    let userValue = username.value.trim();
    let mobileValue = mobile.value.trim();

    // user name

    if(userValue === ""){
        alert("Please enter the username");
      return false;
    }
    else if(userValue.length < 6){
        alert("Username must be at least 6 characters")
      return false;
    }
    
    // email

    if(email.value == ""){
        alert("Email is required");
      return false;
    }
    else if( !re.test(String(email.value).toLowerCase())){
        alert("Please enter a valid email address");
      return false;
    }

    // password

    if(password.value == ""){
        alert("Password is required");
      return false;
    }
    else if(password.value.length < 8){
        alert("Password must be at least 8 characters")
      return false;
    }

    if(confirmPassword.value == ""){
        alert('please enter password again');
      return false;
    }
    else if(confirmPassword.value !== password.value){
        alert("Passwords does not match");
      return false;
    }

    // mobile

    if(mobileValue.length < 10){
        alert("Mobile must be at least 10 characters")
      return false;
    }

return true
}
let email = document.getElementById('email');

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validate(){
    if(email.value == ""){
        alert("Email is required");
      return false;
    }
    else if( !re.test(String(email.value).toLowerCase())){
        alert("Please enter a valid email address");
      return false;
    }
    return true;
}
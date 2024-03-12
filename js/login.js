function validate()
{
    let username = document.getElementById("uname");
    let password = document.getElementById("pass");

    if(username.value.trim() == "" || password.value.trim() == ""){
        alert("please enter the details.")
    }
    if(username.value.length < 6){
        alert("username must be at least 6 characters")
    }
    if(password.value.length < 8){
        alert("password must be at least 8 characters")
    }

}
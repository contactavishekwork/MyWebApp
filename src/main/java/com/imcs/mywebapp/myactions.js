var username;
var password;
var cpassword;
var firstName;
var lastName;
var email;

function validate() {
    username = document.getElementById("userId").value;
    password = document.getElementById("pwd").value;
    cpassword = document.getElementById("cpwd").value;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;

    if (firstName.length < 8) {
        alert("Invalid First Name");
        return;
    }

    if (!isValid(password)) {
        alert("Invalid Password!!");
        return;
    }

    if (!(password === cpassword)) {
        alert("passwords do not match!!");
        return;
    }

    if(alphanumeric(password)){
        alert("Password is not alphanumeric!!");
    }
    document.getElementById("fullName").innerHTML = firstname + " " + lastName;
    document.getElementById("Register").submit();

}

function isValid(str) {
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

function alphanumeric(inputtxt){
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (inputtxt.value.match(letterNumber)){
        return true;
    }else{
        alert("message");
        return false;
    }
}  

function cancel(){
    document.getElementById("Cancel").submit();
}

function refresh(){
    document.getElementById("userId").innerHTML = "";
    document.getElementById("pwd").innerHTML = "";
    document.getElementById("cpwd").innerHTML = "";
    document.getElementById("firstName").innerHTML = "";
    document.getElementById("lastName").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("FullName").innerHTML = "";
}
window.addEventListener("load", bindEvent);

function bindEvent() {
    document.querySelector("#btn").addEventListener("click", addTask);
}

function addTask() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;
    let DOB = document.querySelector("#date").value;
    let gender = document.querySelector("#gender").value;
    var str = ""
    if(!checkName(name)){
        str = str+"Enter full name.";
        document.getElementById("name").style.borderColor = "red";
    }
    if(!checkEmile(email)){
        str = str+"<br/>Enter valide Email."; 
        document.getElementById("email").style.borderColor = "red";
    }
    if(!checkPhone(phone)){
        str = str+"<br/>Enter valide Phone."; 
        document.getElementById("phone").style.borderColor = "red";
    }
    if(!checkPassword(password)){
        str = str+"<br/>Enter valide Password."; 
        document.getElementById("password").style.borderColor = "red";
    }
    if(!checkConfirmPassword(password, confirmPassword)){
        str = str+"<br/>Enter valide Confirm Password."; 
        document.getElementById("confirmPassword").style.borderColor = "red";
    }
    if(!checkValidateDOB(DOB)){
        str = str+"<br/>Enter valide DOB."; 
        document.getElementById("date").style.borderColor = "red";
    }
    if(checkGender(gender)){
        str = str+"<br/>Male are not allowed."; 
        document.getElementById("gender").style.borderColor = "red";
    }

    if(str !=""){
        //document.querySelector("#err").innerHTML = str;
    }else{
        document.querySelector("#frm").submit();
    }

}

function checkName(name){
    return /\s/.test(name);
}
function checkEmile(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function checkPhone(phone){
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
}
function checkPassword(password){
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password);
}
function checkConfirmPassword(password, confirmPassword){
    if(password && confirmPassword){
        return password===confirmPassword;
    }else{
        return false;
    }
}
function checkValidateDOB(dateString) {
    var dtDOB = new Date(dateString);
    var dtCurrent = new Date();
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        return false;
    }
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
        if (dtCurrent.getMonth() < dtDOB.getMonth()) {
            return false;
        }
        if (dtCurrent.getMonth() == dtDOB.getMonth()) {
            if (dtCurrent.getDate() < dtDOB.getDate()) {
                return false;
            }
        }
    }
    return true;
}
function checkGender(gender){
    return gender.toLowerCase() === 'male';
}






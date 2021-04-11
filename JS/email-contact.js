let contactForm = document.getElementById("form");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let message = document.getElementById("message");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    let formData = {
        name:`${firstName.value} ${lastName.value}` ,
        email: email.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == "success"){
            alert("Email envoyé");
            firstName.value = " ";
            lastName.value = " ";
            email.value = " ";
            message.value = " ";
        }else {
            alert("quelque chose s'est mal passé");
        }
    }

    xhr.send(JSON.stringify(formData));
})
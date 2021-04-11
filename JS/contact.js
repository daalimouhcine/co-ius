
var firebaseConfig = {
    apiKey: "AIzaSyA_gbbX_Qfhlodj597-CjPaXCTneMhXqcM",
    authDomain: "co-ius-contact-forme.firebaseapp.com",
    projectId: "co-ius-contact-forme",
    storageBucket: "co-ius-contact-forme.appspot.com",
    messagingSenderId: "349497357633",
    appId: "1:349497357633:web:43008112bed90b30f71dc0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Start grabbing our DOM Element
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let submit = document.querySelector("#submit");

const db = firestore.collection("Contact Data | CO-IUS");

submit.addEventListener("click",function() {
    let firstNameInput = firstName.value;
    let lastNameInput = lastName.value;
    let emailInput = email.value;
    let messageInput = message.value;

    // Access the Database Collection
    db.doc().set({
        nom: firstNameInput,
        prénom: lastNameInput,
        email: emailInput,
        message: messageInput
    }).then(function() {
        console.log("Data Saved");
            firstNameInput = " ";
            lastNameInput = " ";
            emailInput = " ";
            messageInput = " ";
    }).catch(function(error) {
        console.log("error");
    });
});

const form = document.getElementById('form');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm(){
    
    //Validation using Constraint API
    isValid = form.checkValidity();
    
    if (!isValid){
        //Main Message for error
        message.textContent = 'Please Fill all the fields.';
        messageContainer.style.borderColor = "red";
        message.style.color = "red";
        return;
    }

    //Validate Password
    if(passwordEl.value === confirmPasswordEl.value){
        passwordsMatch = true;
        passwordEl.style.borderColor = 'green';
        confirmPasswordEl.style.borderColor = 'green';
    }
    else{
        passwordsMatch=false;
        message.textContent = "Passwords does not match. Please enter same passwords.";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        passwordEl.style.borderColor = 'red';
        confirmPasswordEl.style.borderColor = 'red';
        return;
    }

    //When form is valid & passwords match
    if (isValid && passwordsMatch){
        message.textContent = "Successfully Registered!";
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';

    }
}

//Store from data
function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };

    //Some actions on user data
    console.log(user);
}

//Process form data
function processFormData(e){
    e.preventDefault();
    
    //validate Form
    validateForm();

    //Submit the data if it is valid
    if (isValid && passwordsMatch){
        storeFormData();
    }

}

//Event Listener
form.addEventListener('submit', processFormData);
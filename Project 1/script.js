// Retrieving HTML elements from DOM
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirmPass')

// FUntion to Update class and message for error
function showErrors(input, message) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message 
    const small = formControl.querySelector('small');
    // Replace the text for small element using the input
    small.innerText = message;
}

// Function to update for success
function showSuccess(input) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add success
    formControl.className = 'form-control success';
}

// FUntion to check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

// Event Listeners
// Creat event listner for submit button
form.addEventListener('submit', function (e) {
    // Stop page from reloding on submit
    e.preventDefault();

    // Check to see if fields meet the required field requirement
    // check if username input is empty
    if (username.value === '') {
        // old & annoying for user percpective alert('email is required')
        showErrors(username, 'username is required')
    } else {
        showSuccess(username);
    }

    // check if email input is empty
    if (email.value === '') {
        showErrors(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showErrors(email, 'Email is invalid')
    } else {
        showSuccess(email);
    }

    // check if password input is empty
    if (password.value === '') {
        showErrors(password, 'Password is required')
    } else {
        showSuccess(password);
    }

    // check if confirm password input is empty
    if (confirmPass.value === '') {
        showErrors(confirmPass, 'Password confirmation is required')
    } else {
        showSuccess(confirmPass);
    }
});

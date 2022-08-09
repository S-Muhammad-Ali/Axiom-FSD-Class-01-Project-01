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

// function to check if required fields have data
function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value === '') {
            console.log(input.id);
            //Sir Altaf show a different method by creating a new funtion but my below testing also work for case issue
            // showErrors(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`)
            showErrors(input, `${getfieldId(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

// Function to get the id of the inout field
function getfieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
// Creat event listner for submit button
form.addEventListener('submit', function (e) {
    // Stop page from reloding on submit
    e.preventDefault();

    checkRequired([username, email, password, confirmPass]);
});


function validateName() {
    let x = document.forms["contactName"]["fullname"].value;
    if (x == "") {
        alert("Full name must be filled out.");
        return false;
    }
}

function validateEmail() {
    let y = document.forms["contactEmail"]["email"].value;
    if (y == "") {
        alert("Email must be filled out.");
        return false;
    }
}

function validatePhone() {
    let z = document.forms["contactPhone"]["phoneNumber"].value;
    if (z == "") {
        alert("Phone must be filled out.");
        return false;
    }
}

function validateMessage() {
    let a = document.forms["contactMessage"]["message"].value;
    if (a == "") {
        alert("Message must contain text.");
        return false;
    }
}
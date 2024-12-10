
function validateForm() {
    // retrieving form values
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let contactMethod = document.getElementById("contactMethod").value;
    let message= document.getElementById("message").value;

    // avoiding blank input
    if (fullname === "" || email === "" || phoneNumber==="" || message === "" || contactMethod === "") {
        alert("Please fill out all required fields");
        return false;
    }


    // validating email format using a simple regular expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    // if all validations pass
    alert("Your message was sent, thank you!");
    return true;
    
    }


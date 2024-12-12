
function validateForm() {
    // retrieving form values
    let fullname = document.getElementById("fullname").value;
    let address = document.getElementById("address").value;
    let eircode = document.getElementById("eircode").value;
    let payment = document.getElementById("payment").value;
    let terms= document.getElementById("html").value;
    let size= document.getElementById("size").value;


    // avoiding blank input
    if (fullname === "" || address === "" || eircode ==="" || payment === "" ||  size === "") {
        alert("Please fill out all required fields");
        return false;
    }

    // if all validations pass
    alert("Details submitted, thank you !!");
    return true;
  
}







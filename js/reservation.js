document.getElementById("date").setAttribute("min", getCurrentDate());
document.getElementById("submitBtn").addEventListener("click", reservation);

function reservation() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var numberOfGuests = document.getElementById("numberOfGuests").value;
 
    var reservation = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        numberOfGuests: numberOfGuests
    };

    var obj = JSON.stringify(reservation);
    console.log("reservation: " + obj);
}

function getCurrentDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}
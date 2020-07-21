function provjera() {
    return unijeto_ime_i_prezime() && broj_telefona() && ispravan_email() && broj_gostiju() && confirm('Da li ste sigurni?');
}

function unijeto_ime_i_prezime() {
    var name = document.getElementById('name').value;
    if (name.trim().length == 0) {
        alert("Unesite ime i prezime !");
        return false;
    }

    else if (!isNaN(name)) {
        alert("Vaše ime i prezime mora sadržati samo slova !");
        return false;
    }
    return true;
}

function broj_telefona() {
    var phone = document.getElementById('phoneNumber').value;
    if (phone.trim().length == 0) {
        alert("Unesite telefonski broj !");
        return false;
    }

    else if (isNaN(phone)) {
        alert("Telefonski broj mora sadržati samo cifre !");
        return false;
    }

    else if (phone.trim().length < 8) {
        alert("Telefonski broj mora sadržati bar 8 cifara !");
        return false;
    }

    return true;
}

function ispravan_email() {
    var email = document.getElementById('email').value.trim();
    if (email.indexOf('@') == -1) {
        alert("Neispravna e-mail adresa !");
        return false;
    }
    var drugi_dio = email.split('@')[1];
    if (drugi_dio.indexOf('.') == -1 || drugi_dio.indexOf('.') == 0 || drugi_dio.indexOf('.') == drugi_dio.length - 1) {
        alert("Neispravna email adresa");
        return false;
    }
    return true;
}

function broj_gostiju() {
    var guests = document.getElementById('guests').value;

    if (isNaN(guests) || guests < 1 || guests > 20) {
        alert("Neispravan broj gostiju ");
        return false;
    }

    return true;
}

function provjera() {
    return unijeto_ime() && ispravan_email() && uneseni_naslov() && unesena_poruka() && confirm('Da li ste sigurni?');
}

function unijeto_ime() {
    var korisnickoIme = document.getElementById('name').value;
    if (korisnickoIme.trim().length == 0) {
        alert("Unesite ime i prezime !");
        return false;
    }

    else if (!isNaN(korisnickoIme)) {
        alert("Vaše ime i prezime mora sadržati samo slova !");
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

function uneseni_naslov() {
    var title = document.getElementById('title').value;
    if (title.trim().length == 0) {
        alert("Unesite naslov !");
        return false;
    }
    else if (!isNaN(title)) {
        alert("Naslov mora sadržati samo slova !");
        return false;
    }
    return true;
}


function unesena_poruka() {
    var poruka = document.getElementById('poruka').value;
    if (poruka.trim().length < 10) {
        alert("Poruka mora da sadrži bar 10 karaktera !");
        return false;
    }

    return true;
}
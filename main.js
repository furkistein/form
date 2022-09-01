function validateForm(){
    var ad = document.forms["myForm"]["name"];
    var email = document.forms["myForm"]["email"];
    var mesaj = document.forms["myForm"]["message"];

    if(ad.value == ""){
        document.getElementById('errorname').innerHTML = "Lütfen Adınız Giriniz.";
        ad.focus();
        return false;
    } else{
        document.getElementById('errorname').innerHTML == "";
    }

    if(mail.value == ""){
        document.getElementById('erroremail').innerHTML = "Lütfen Mailinizi Giriniz.";
        ad.focus();
        return false;
    } else{
        document.getElementById('erroremail').innerHTML == "";
    }
    if(mail.value.İndexOf("@",0) < 0){
        document.getElementById('erroremail').innerHTML = "Lütfen Geçerli Mail Giriniz.";
        ad.focus();
        return false;
    }
    if(mail.value.İndexOf(".",0) < 0){
        document.getElementById('erroremail').innerHTML = "Lütfen Geçerli Mail Giriniz.";
        ad.focus();
        return false;
    }

    if(ad.value == ""){
        document.getElementById('errormsg').innerHTML = "Lütfen Mesajınızı Giriniz.";
        ad.focus();
        return false;
    } else{
        document.getElementById('errormsg').innerHTML == "";
    }
}
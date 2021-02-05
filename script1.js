function requiredElement() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(username == "") {
alert("Veillez insérer votre Nom");
document.getElementById("username").style.backgroundColor="red";
document.getElementById("username").focus();
//nom.focus();
return false;
}
if(password == "") {
alert("Veillez insérer votre mdp");
document.getElementById("password").style.backgroundColor="red";
document.getElementById("password").focus();
return false;
}
if(email == "") {
alert("Veillez insérer votre Email");
document.getElementById("email").style.backgroundColor="red";
document.getElementById("email").focus();
return false;
}

return true;
}

function nomValidate() { 

var letters = /^[A-Za-z]+$/;
var nom = document.getElementById("username");
if(nom.value.match(letters)) {
document.getElementById("username").style.backgroundColor="white";
return true;
} else {
alert('Le nom ne doit contenir que des lettres');
document.getElementById("username").style.backgroundColor="red";
document.getElementById("username").focus();
return false;
}
}


function passwordValidate() {
var m1 = document.getElementById("password");
var n1 = m1.value;
if( n1=="" ||isNaN(n1) ) {
alert("le mdp n'est pas valide!");
document.getElementById("password").style.backgroundColor="red";

document.getElementById("password").focus();
return false;
}else{
document.getElementById("password").style.backgroundColor="white";
return true;
}
}

function validateEmail(champsText){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(champsText.value.match(mailformat)){
document.form.email.focus();
document.getElementById("email").style.backgroundColor="white";
return true;
}else{
alert("Veuillez insérer une adresse email valide!");
document.getElementById("email").style.backgroundColor="red";
document.form.email.focus();
return false;
}
}


 function validateForm(){
if (!requiredElement()){
return false;
}
else{
confirm("Toutes les données sont validées !, Voulez-vous les envoyer au serveur?");
}
}
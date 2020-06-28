//----------------NIVEL 1 TASK 2---------------------------------


var regexPass = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"); //regex pt parola de minim 8 caractere, cu cel putin o litera mare,o litera mica,o cifra si un simbol
var regexUser = new RegExp("^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$"); //username-ul poate avea litere mari si mici, poate avea _ si - dar nu la inceput sau sfarsit
var regexEmail = new RegExp("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$"); 
var regexCountry = new RegExp("^[a-zA-Z]+$");
var regexPhone = new RegExp("^07[0-9]{8}");

function regexValidate(){
    var pass = document.getElementById("pass").value;
       if(regexPass.test(pass))
       document.getElementById("textbox1").innerHTML="Parola este acceptata";
       else 
       document.getElementById("textbox1").innerHTML="Parola NU este acceptata";

       var user = document.getElementById("user").value;
       if(regexUser.test(user))
       document.getElementById("textbox").innerHTML="Userul este acceptat";
       else 
       document.getElementById("textbox").innerHTML="Userul NU este acceptat";

       var email = document.getElementById("email").value;
       if(regexEmail.test(email))
       document.getElementById("textbox2").innerHTML="Email-ul este acceptat";
       else 
       document.getElementById("textbox2").innerHTML="Email-ul NU este acceptat";

       var country = document.getElementById("country").value;
       if(regexCountry.test(country))
       document.getElementById("textbox3").innerHTML="Tara este acceptata";
       else 
       document.getElementById("textbox3").innerHTML="Tara NU este acceptata";

       var phone = document.getElementById("phone").value;
       if(regexPhone.test(phone))
       document.getElementById("textbox4").innerHTML="Numarul este acceptat";
       else 
       document.getElementById("textbox4").innerHTML="Numarul NU este acceptat";

};



//NIVEL 2----------------------------TASK 9
//pt USER
var f=0
const input = document.getElementById('user')
input.addEventListener('focus', evt => {
    const value = input.value
    const trimmed = value.trim()
  
    if (!trimmed) 
      f++
    console.log(f);
  })

//pt PASSWORD
  var f2=0
const input2 = document.getElementById('pass')
input2.addEventListener('focus', evt => {
    const value = input2.value
    const trimmed = value.trim()
  
    if (!trimmed) 
      f2++
    console.log(f2);
  })

//pt EMAIL
  var f3=0
const input3 = document.getElementById('email')
input3.addEventListener('focus', evt => {
    const value = input3.value
    const trimmed = value.trim()
  
    if (!trimmed) 
      f3++
    console.log(f3);
  })


  function indecisFunction(){
    if(f>=f2 && f>=f3) document.getElementById("user").style.backgroundColor='red';
    else if(f2>=f && f2>=f3) document.getElementById("pass").style.backgroundColor='red';
    else document.getElementById("email").style.backgroundColor='red';
  };


//pt afisarea valorii din input-ul de tip slider

var slider = document.getElementById("vol")
var output = document.getElementById("value")
output.innerHTML = slider.value; // afiseaza valoarea default

// face update de fiecare data cand mutam slider-ul
slider.oninput = function() {
  output.innerHTML = this.value;

};



//functie pentru verificarea input-urilor din register form

//function validate(){
    //verif user sa fie nenul si apoi afisam user-ul
//    var user = document.getElementById("user").value;
 //   if(user.length==0) document.getElementById("textbox").innerHTML="Nu ati introdus nimic!";
 //   else document.getElementById("textbox").innerHTML="Ati introdus utilizatorul " + user;

    //verificare parola cu regex si spunem daca e acceptata sau nu
 //   var pass = document.getElementById("pass").value;
 //   if(regexPass.test(pass))
 //   document.getElementById("textbox1").innerHTML="Parola este acceptata";
 //   else 
 //   document.getElementById("textbox1").innerHTML="Parola NU este acceptata";

    //verificare email sa fie nenul si apoi afisam
 //   var email = document.getElementById("email").value;
 //   if(email.length==0) document.getElementById("textbox2").innerHTML = "Nu ati introdus nimic";
 //   else document.getElementById("textbox2").innerHTML = "Ati introdus emailul " + email;

    //alegem genul masculin feminin si apoi afisam ce am ales(radio)
 //   var radios = document.getElementsByName('gender');

 //   for (var i = 0, length = radios.length; i < length; i++) {
 //   if (radios[i].checked) {

 //       document.getElementById("textbox3").innerHTML = "Ati ales " + radios[i].value;
 //       break;
 //   }
//}

    //bifam daca suntem de acord cu conditiile site-ului si apoi afisam daca am bifat sau nu(checkbox)
     //   if(document.getElementById("terms").checked== true) document.getElementById("textbox4").innerHTML = "Ati bifat";
     //  else document.getElementById("textbox4").innerHTML = "Nu ati bifat";
//};



// memoram user si parola in localStorage
function store() {
    
    var name = document.getElementById('user').value;
var pw = document.getElementById('pass').value;
    localStorage.setItem('name', name);
    localStorage.setItem('pw', pw);
}

for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)))
}
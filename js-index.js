
//NIVEL 1----------TASK 7

const greetings = ["Buna ziua", "Hello", "Bonjour", "Hola", "Guten Tag", "Salve", "Konnichiwa", "Namaste", "Zdravstvuyte", "Olá"];

var span = document.getElementsByClassName("close")[0];
setTimeout(myFunction(), 1000);

function myFunction(){
    setTimeout(function(){
      const randomGreet = greetings[Math.floor(Math.random() * greetings.length)];
      document.getElementById("revase").innerHTML=randomGreet;
        document.getElementById("myModal").style.display="block";

    }, 3000);

}


//NIVEL 2-----------TASK 2

var str = "I love that my owner is home during this quarantine!!!!! ";
var str2= "Look what a cool song I found lol";
var words = str.split(" ");
var words2 = str2.split(" ");
var i=0;
var jj=0;
var postare="";
var postare2="";
function wordbyword(){
  setInterval(function(){
    postare=postare+" "+words[i];
    document.getElementById("postaretxt").innerHTML=postare;
    if(i<10) i++;
    if (jj<8) {
      postare2=postare2+" "+words2[jj];
      document.getElementById("postaretxt2").innerHTML=postare2;
      jj++;}
  },1000);

};
  span.onclick = function() {
    document.getElementById("myModal").style.display="none";
  }


//verificam daca un utilizator este logat (localStorage)

function checklogin(){
  var loginStatus = localStorage.getItem('log');
  if(loginStatus.value=='0')
  console.log("sunteti delogat")
  else 
  console.log("sunteti logat")

  for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)))
}

};

function getSignedOut(){

  localStorage.setItem('log', '0');   //cand apasam pe butonul sign out cheia log devine 0

  for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)))
}

};

//dam like apasand pe butonul heart (DOM)

var x = document.querySelectorAll('#heart');
var i;
var nr=1; //nr de likeuri date in total
Array.from(x).forEach(function(buton){
    var k=0;
    buton.addEventListener('click',function(){
        if(k==0) {  //daca k=0 inseamna ca butonul nu a fost apasat deci ii dam like
            document.getElementById("liked0").innerHTML="YOU LIKED THIS. YOU HAVE GIVEN "+ nr + " LIKES";
            document.getElementById("liked0").style.height='50px';
            document.getElementById("liked0").style.display='block';
            k=1;
            nr = nr+1;
            }
                
            else if(k==1) {  //daca k=1 inseamna ca butonul a fost deja apasat si cand il apasam vom da dislike
                document.getElementById("liked0").innerHTML="YOU DISLIKED THIS";
                nr = nr-1;
            k=0;    
            }
            })

});


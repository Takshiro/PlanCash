var btnSingin = document.querySelector("#Singin");
var btnSingup = document.querySelector("#Singup");
var body = document.querySelector("body")


btnSingin.addEventListener("click",function() {
    body.className = "SinginJs"})

    btnSingup.addEventListener("click", function(){
         body.className = "SinupJs"})

function botaoEntrar (e) {
    e.preventDefault() 
    window.location.href = 'homeLogado.html';
}    

function novousuario() {alert   
}
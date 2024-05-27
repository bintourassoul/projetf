var btn = document.querySelector('toogle-btn');
var nav = document.querySelector('.navbar');

btn.onclick = function(){
    btn.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
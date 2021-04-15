//Declarando Variáveis
var btnContact = document.querySelector('.jl-btn-contact');

//Pagina de preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.jl-preloader');
    pagePreloder.classList.add('jl-fade-out');
 
    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Abrir e fechar contato
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info')
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});
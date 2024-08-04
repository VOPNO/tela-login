document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
});

document.querySelector('body').addEventListener('click', function(e){
    if(e.target.classList.contains('sing')){
        mudarLado();
    } else if (e.target.classList.contains('login')) {
        posicaoInicial();
    }
})

function mudarLado(){
    document.querySelector('.tampa').style.marginLeft = '33.3%'
    document.querySelector('.incresva-se').classList.add('hidden');
    document.querySelector('.login').classList.remove('hidden');
}

function posicaoInicial(){
    document.querySelector('.tampa').style.marginLeft = '0';
    document.querySelector('.incresva-se').classList.remove('hidden');
    document.querySelector('.login').classList.add('hidden');
}

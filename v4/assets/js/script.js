const $ = (elm) => document.querySelector(elm);

let idUser = localStorage.getItem('idUser') ? parseInt(localStorage.getItem('idUser')) : 0;

document.addEventListener('click', function(e){
    if(e.target.classList.contains('singBtn')){
        createAccount();
    } else if(e.target.classList.contains('loginBtn')) {
        checkAccount();
    } else if(e.target.classList.contains('apagar')){
        e.target.parentNode.remove();
    }
})

function createAccount(){
    const usuario = $('#usuario');
    const email = $('#email');
    const senha = $('#password');

    usuario.parentNode.classList.remove('error');
    email.parentNode.classList.remove('error');
    senha.parentNode.classList.remove('error');

    if(usuario.value === '' || email.value === '' || senha.value === '') {
        if(usuario.value === '') usuario.parentNode.classList.add('error');
        if(email.value === '') email.parentNode.classList.add('error');
        if(senha.value === '') senha.parentNode.classList.add('error');
        return notification('Erro nas informações', 'Verifique as informações e tente novamente.');
     } else {
        idUser++
        localStorage.setItem('idUser', idUser);

        let users = localStorage.getItem('usuarios');
        users = users ? JSON.parse(users) : [];

        const user = {
            name: $('#usuario').value, 
            email: $('#email').value, 
            senha: $('#password').value,
            id: idUser
        } 

        users.push(user)

        localStorage.setItem('usuarios', JSON.stringify(users));
        
        if(users.length > 0){
            notification('Conta criada', 'Conta criada com sucesso agora realize o login.')
            mudarLado();
        }
    }
}

function checkAccount(){
    const accounts = localStorage.getItem('usuarios');
    const contas = JSON.parse(accounts);

    $('#user').parentNode.classList.remove('error');
    $('#senha').parentNode.classList.remove('error');

    let contaEncontrada = false;

    if(contas){
        for(let i of contas){
            if($('#user').value === i.name && $('#senha').value === i.senha){
                notification('Acesso permitido', 'Bem vindo novamente!');
                contaEncontrada = true;
                break
            } 
        }
    } else {
        notification('Erro', 'Não existe conta nenhuma dentro do nosso banco de dados.')
    }

    if(!contaEncontrada){
        notification('Conta não encontrada', 'Verifique o login e a senha e tente novamente.');
        $('#user').value = '';
        $('#senha').value = '';
        $('#user').parentNode.classList.add('error');
        $('#senha').parentNode.classList.add('error');
    }
}

function mudarLado(){
    if($('.login').classList.contains('hidden')){
        document.querySelector('.tampa').style.marginLeft = '33.3%'
        document.querySelector('.incresva-se').classList.add('hidden');
        document.querySelector('.login').classList.remove('hidden');
    } else if($('.incresva-se').classList.contains('hidden')){
        document.querySelector('.tampa').style.marginLeft = '0';
        document.querySelector('.incresva-se').classList.remove('hidden');
        document.querySelector('.login').classList.add('hidden');
    }
}

function notification(tittle, text){

    if($('.notification')) $('.notification').remove();
    const createElement = (elm) => document.createElement(elm);

    const div = createElement('div');
    div.classList.add('notification');

    const div2 = createElement('div');

    const h2 = createElement('h2');
    h2.innerText = tittle;

    const p = createElement('p');
    p.innerText = text;

    div.innerHTML = '<div><i class="fa-solid fa-envelope"></i></div>'
    div.innerHTML += '<i class="fa-solid fa-xmark apagar" id="deleteNotification"></i>';


    div2.appendChild(h2);
    div2.appendChild(p);
    div.appendChild(div2);
    $('.cont-all').appendChild(div);
    $('#notificationSound').play();
}


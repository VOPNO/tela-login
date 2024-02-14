const log = document.querySelector('#buttonLogar');

const user = document.querySelector('#login-check');
const senha = document.querySelector('#password-check');

let loginGeral = {};

log.addEventListener('click', login);

function login () {
    alert(user.value);
    alert(senha.value)
}

function verificarConta (usr, sen) {

}

function criarConta () {
    
}
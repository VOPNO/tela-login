const $ = (elemento) => document.querySelector(elemento);

$('.cadastro').addEventListener('click', (evt) => {
    evt.preventDefault();
    cadastro();
})


function cadastro(){
    const user = {
        login: $('#login'.value),
        email: $('#email'.value),
        senha: $('#senha'.value)
    }

    const stringUser = JSON.stringify(user);
    
    localStorage.setItem("user", stringUser)
}

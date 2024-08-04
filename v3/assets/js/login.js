const $ = (elemento) => document.querySelector(elemento);

$('#bLogin').addEventListener('click', (evt) => {
    evt.preventDefault();
    login();
});

function login(){
    const stringUser = localStorage.getItem("user");

    if(stringUser !== null && stringUser !== undefined){
        if(stringUser){

            const usuario = JSON.parse(stringUser);
    
            console.log(usuario.login)
            console.log(usuario.email)
            console.log(usuario.senha)
        } else {
            console.log('Nenhum usuario encontrado.')
        }
    } else {
        console.log('Nenhuma  chave foi encontrado')
    }

    
}
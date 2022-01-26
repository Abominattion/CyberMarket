// Mostrar Senha
let btn = document.querySelector('#seePasswd');
btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});

// Mudar Botão
function changeIcon(e) {

    var botao = document.querySelector("#changeIcon"); 

    if (botao.classList.contains("fa-eye")) { 
        botao.classList.remove("fa-eye"); 
        botao.classList.add("fa-eye-slash");
    } else { 
        botao.classList.remove("fa-eye-slash"); 
        botao.classList.add("fa-eye");
    }

}
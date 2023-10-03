const form = document.querySelector('.login-form');

const usernameImput = form.querySelector('input[type="text"]');

const senhaInput = form.querySelector('input[type="password"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuario = usernameImput.value.trim();
    const senha = senhaInput.value.trim();

    if (usuario === '' || senha === '') {
        alert('Por favor, preencha os campos.')
    } else if (usuario === 'usuario' && senha === 'senha') {
        alert('Bem-vindo!')

        location.replace("/Tarefa/index.html", "_self");
    } else {
        alert('usuário ou senha incorretos, tente novamente');
    }
})
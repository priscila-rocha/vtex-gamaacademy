const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome, 
        email
    }
   
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);
   
    let content = document.getElementById('content');
    let cadastrando = `<p>Aguarde cadastrando e-mail...</p>`;
    let cadastrado  = `<p> ${nome}, o seu e-mail ${email}, foi cadastrado com sucesso!</p>`;

    content.innerHTML = cadastrando;

    setTimeout(() => {
    content.innerHTML = cadastrado;

        setTimeout(() =>{
            window.location.reload();

        }, 1000);

    }, 1000);
} );
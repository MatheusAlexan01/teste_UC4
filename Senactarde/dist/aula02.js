"use strict";
//adicionando a variavel formulario o id dele
const formulario = document.getElementById("formulario");
//recebendo dados do input
//const nome = (document.getElementById('nome') as HTMLInputElement).value
//const  telefone = (document.getElementById('telefone') as HTMLInputElement).value
//const data = (document.getElementById('dataNascimento') as HTMLInputElement).value
//const cpf = (document.getElementById('cpf') as HTMLInputElement).value
//const email = (document.getElementById('email') as HTMLInputElement).value
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const dados = `
    Dados coletados:<br>
    Nome: ${nome}<br>
    telefone: ${telefone}<br>
    Data de Nascimento: ${data}<br>
    CPF: ${cpf}<br>
    Email: ${email}
    `;
    const exibir = document.getElementById('Resposta');
    if (exibir) {
        exibir.innerHTML = dados;
    }
});

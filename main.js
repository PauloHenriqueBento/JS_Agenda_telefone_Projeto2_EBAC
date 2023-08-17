const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';
const nome = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', e => {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome');
    const notaAtividade = document.getElementById('telefone');

    nome.push(inputNomeAtividade.value);
    notas.push(parseFloat(notaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    inputNomeAtividade.value = '';
    notaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}



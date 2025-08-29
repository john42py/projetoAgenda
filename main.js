const formul = document.getElementById('agenda-tel');
const nomeCont = [];
const numeroCont = [];
let linhatr = '';
let  quantContato;
formul.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarContato();
    atualizarAgenda();

})

function adicionarContato() {
    const nomeContato = document.getElementById('nomeAgenda');
    const numeroContato = document.getElementById('numeroAgenda');
    console.log((nomeContato.value).length < 2);

    if(numeroCont.includes(numeroContato.value)) {
        alert(`Número de telefone ${numeroContato.value} já cadastrado. `);
    } else {
        nomeCont.push(nomeContato.value);
        numeroCont.push(numeroContato.value);

        let linha = '<tr>';
        linha += `<td> ${nomeContato.value}</td>`;
        linha += `<td> ${numeroContato.value}</td>`;
        linha += `</tr>`;

        linhatr += linha;

    }

    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizarAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhatr;
    quantContato = nomeCont.length
    document.getElementById('quantCont').innerHTML = quantContato;
}
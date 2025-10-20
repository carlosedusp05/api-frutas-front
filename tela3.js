'use strict'

async function frutaInfo (fruta) {
    const url = `https://www.fruityvice.com/api/fruit/${fruta}`;

    const response = await fetch(url);
    const imagem = await response.json();

    
        return imagem
    
}

async function pegarInfos() {
    const valorPesquisa = localStorage.getItem('valorDaTela1').toLowerCase
    let infoCep = await frutaInfo(valorPesquisa.value)
    
    document.getElementById('endereco').value = infoCep.logradouro
    document.getElementById('bairro').value = infoCep.bairro
    document.getElementById('cidade').value = infoCep.localidade
    document.getElementById('estado').value = infoCep.estado

console.log(infoCep)

}
'use strict'

async function frutaUrl (fruta) {
    const url = `https://pixabay.com/api/?key=52528618-4626e693f82bda42876eaaacf&q=${fruta}`;

    const response = await fetch(url);
    const imagem = await response.json();

    
        return imagem.hits[10].previewURL;
    
}

const fruta = document.getElementById('fruta');

if (fruta) {
    (async () => {
        const valorPesquisa = localStorage.getItem('valorDaTela1')

        if (valorPesquisa) {
            const h1Tela2 = document.createElement('h1')
            const imgFruta = document.createElement('img')

            fruta.appendChild(h1Tela2)
            fruta.appendChild(imgFruta)

            h1Tela2.textContent = valorPesquisa

            const urlImagemFruta = await frutaUrl(valorPesquisa)

            imgFruta.src = urlImagemFruta
            imgFruta.alt = valorPesquisa
        } else {
            alert('Nenhum valor encontrado.')
        }
    })();
}

// async function frutaDados (fruta) {
//     const url = `https://www.fruityvice.com/api/fruit/${fruta}`;

//     const response = await fetch(url);
//     const infos = await response.json();

//     return infos
    
// }

// async function pegarInfos() {
//     const valorPesquisa = localStorage.getItem('valorDaTela1').toLowerCase()
//     let frutaInfo = await frutaDados(valorPesquisa)

//     document.getElementById('ordem').value = frutaInfo.order
//     document.getElementById('familia').value = frutaInfo.family
//     document.getElementById('genero').value = frutaInfo.genus
// }

async function frutaDados(fruta) {
    const url = `https://www.fruityvice.com/api/fruit/${fruta}`;
    const response = await fetch(url);
    const infos = await response.json();

    return infos;
}

async function pegarInfos() {
        const valorPesquisa = localStorage.getItem('valorDaTela1').toLowerCase();
        const frutaInfo = await frutaDados(valorPesquisa);

        document.getElementById('ordem').value = frutaInfo.order 
        document.getElementById('familia').value = frutaInfo.family 
        document.getElementById('genero').value = frutaInfo.genus
}

document.addEventListener('DOMContentLoaded', pegarInfos)


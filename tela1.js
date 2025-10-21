'use strict'

const container = document.getElementById('containerT1');

async function frutaUrl (fruta) {
    const url = `https://pixabay.com/api/?key=52528618-4626e693f82bda42876eaaacf&q=${fruta}`;

    const response = await fetch(url);
    const imagem = await response.json();

    
        return imagem.hits[4].previewURL;
    
}

async function sugestao(nomeFruta) {

    const urlImagem = await frutaUrl(nomeFruta)

  
    const frutaBox = document.createElement('div')
    frutaBox.classList.add(`box-${nomeFruta.toLowerCase()}`)

    const btnFruta = document.createElement('button')
    btnFruta.classList.add(`btn-${nomeFruta.toLowerCase()}`)

    const imgFruta = document.createElement('img')

    imgFruta.src = urlImagem
    imgFruta.alt = nomeFruta

    const h2Fruta = document.createElement('h2')
    h2Fruta.textContent = nomeFruta

    btnFruta.addEventListener('click', () => {
        localStorage.setItem('valorDaTela1', nomeFruta.toLowerCase())
        window.location.href = 'tela2.html'
      })
   
    container.appendChild(frutaBox)
    frutaBox.appendChild(btnFruta)
    btnFruta.appendChild(imgFruta)
    frutaBox.appendChild(h2Fruta) 
}

sugestao('strawberry')
sugestao('blueberry')
sugestao('lemon')
sugestao('banana')
sugestao('pineapple')
sugestao('apple')

const pesquisa = document.getElementById('pesquisa')
const campo = document.createElement('input')
const btnLupa = document.createElement('button')
const lupa = document.createElement('img')

pesquisa.appendChild(campo)
campo.placeholder = 'Pesquise sua fruta(em inglês)...'

pesquisa.appendChild(btnLupa)
btnLupa.classList.add('btn-lupa')
btnLupa.appendChild(lupa)
    
lupa.src = "./img/Search.png"
lupa.alt = 'lupa'

let carregamento = () => {

    let pesquisaFruta = campo.value.trim().toLowerCase() 

    if (pesquisaFruta) {
        localStorage.setItem('valorDaTela1', pesquisaFruta)
        window.location.href = 'tela2.html'
    } else {
        alert('Por favor, digite o nome de uma fruta para pesquisar.'); 
    }
}

function buscar () {
    btnLupa.addEventListener('click', carregamento)

    campo.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            carregamento()
        }
    })
}

buscar()
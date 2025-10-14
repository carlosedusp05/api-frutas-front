'use strict'

const container = document.getElementById('container')
const campo = document.getElementById('input')
const imagemFruta = document.getElementById('fruta')
const botaoBuscar = document.getElementById('buscar')

async function buscarImagens (fruta) {
    const url = `https://pixabay.com/api/?key=52528618-4626e693f82bda42876eaaacf&q=${fruta}&image_type=foto`

    const response = await fetch(url)
    const imagens = await response.json()

    console.log(imagens.message)
    return imagens.message
}

function carregarImagens(urlDaImagem, fruta){
    imagemFruta.textContent = ''

    urlDaImagem.forEach(url => {
        const nomeFruta = document.createElement('h1')
        const imagem = document.createElement('img')

        imagem.src = url
        ligacao.href = url
        ligacao.target = '_blank'
        
        imagemFruta.classList.add('fruta')
        imagemFruta.appendChild(nomeFruta)
        imagemFruta.appendChild(imagem)

        nomeFruta = fruta

    })
}

    let carregamento = async() => {
        let pesquisa = campo.value
    
        let link = await buscarImagens(pesquisa)
    
        carregarImagens(link, pesquisa)
    }

function buscar (){
    botaoBuscar.addEventListener('click', carregamento)

    campo.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            carregamento()
        }
    })
}

buscar()






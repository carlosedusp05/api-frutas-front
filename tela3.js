'use strict'

async function frutaUrl(fruta) {
  const url = `https://pixabay.com/api/?key=52528618-4626e693f82bda42876eaaacf&q=${fruta}`
  const response = await fetch(url)
  const imagem = await response.json()

  return imagem.hits[0].previewURL 
}

async function frutaDados(fruta) {
  const url = `https://www.fruityvice.com/api/fruit/${fruta}`
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`

  const response = await fetch(proxyUrl)
  const data = await response.json()

  const infos = JSON.parse(data.contents)

  return infos
}

async function carregarTela3 () {
  const fruta = document.getElementById('fruta')
  const infos = document.getElementById('informacoes')

  const valorPesquisa = localStorage.getItem('valorDaTela1')

  if (!valorPesquisa) {
    alert('Nenhum valor encontrado.')
    return
  }


  if (fruta) {
    const h1Tela2 = document.createElement('h1')
    const imgFruta = document.createElement('img')

    fruta.appendChild(h1Tela2)
    fruta.appendChild(imgFruta)

    h1Tela2.textContent = valorPesquisa

    const urlImagemFruta = await frutaUrl(valorPesquisa)
    imgFruta.src = urlImagemFruta
    imgFruta.alt = valorPesquisa
  }


  if (infos) {
      const frutaInfo = await frutaDados(valorPesquisa)

      document.getElementById('calorias').value = frutaInfo.nutritions.calories
      document.getElementById('proteinas').value = frutaInfo.nutritions.protein 
      document.getElementById('acucar').value = frutaInfo.nutritions.sugar 
      document.getElementById('gordura').value = frutaInfo.nutritions.fat
      document.getElementById('carboidrato').value = frutaInfo.nutritions.carbohydrates 
    } else{
      alert('Não foi possível carregar as informações da fruta.')
    }
  }

carregarTela3()


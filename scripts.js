
let inputTexto = document.querySelector(".input-texto")
let traducao = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")

async function traduzir() {
  let endereco =
    "https://api.mymemory.translated.net/get?q="
    + encodeURIComponent(inputTexto.value)
    + "&langpair=pt-BR|" + idioma.value

  let resposta = await fetch(endereco)
  let dados = await resposta.json()

  traducao.innerText = dados.responseData.translatedText
}

aq

function ouvir() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition

  if (!SpeechRecognition) {
    alert("Seu navegador não suporta microfone 😢")
    return
  }

  const recognition = new SpeechRecognition()
  recognition.lang = "pt-BR"
  recognition.interimResults = false
  recognition.maxAlternatives = 1

  recognition.start()

  recognition.onresult = function (event) {
    const textoFalado = event.results[0][0].transcript
    inputTexto.value = textoFalado
    traduzir()
  }

  recognition.onerror = function (event) {
    alert("Erro no microfone: " + event.error)
  }
}

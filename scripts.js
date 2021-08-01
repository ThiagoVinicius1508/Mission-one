let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")






async function converterMoedas() {
    
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
       return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high  
 

    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoreal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {

        let ValorEmDolares = inputValorReais / dolar
        inputMoedas.innerHTML = ValorEmDolares.toLocaleString("en-us", { style: "currency", currency: "USD" });
    }

    if (select.value === "€ Euro") {
        let valorEmEuro = inputValorReais / euro
        inputMoedas.innerHTML = valorEmEuro.toLocaleString("de-DE", { style: "currency", currency: "EUR" })

    }

    textoreal.innerHTML = inputValorReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function trocaDeMoedas() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/estados-unidos (1) 1.png"

    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"

    }

    converterMoedas()


}


botao.addEventListener("click", converterMoedas)

select.addEventListener("change", trocaDeMoedas)
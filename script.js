const convertButton = document.querySelector(".converter")
const converterPara = document.querySelector(".Coin-selected")
const converterDe = document.querySelector(".Coin-selected-to-convert")


function converter() {
    const inputValue = document.querySelector(".input-valor").value
    const toconvert = document.querySelector(".to-convert")
    const converted = document.querySelector(".converted")



    /* Real Coin Converted  */

    const priceDolarForReal = 0.1841
    const priceEuroForReal = 0.1575
    const princeLibraForReal = 0.1363
    const priceBitCoinForReal = 0.0000020

    /* Dolar Coin Converted  */

    const priceRealforDolar = 5.4324
    const priceEuroForDolar = 1.1686
    const priceBitCoinForDolar = 0.0000092
    const priceLibraForDolar = 0.7405

    /* Euro Coin Converted  */

    const priceLibraForEuro = 0.8656
    const priceBitcoinForEuro = 0.000011
    const priceDolarForEuro = 0.8558
    const priceRealForEuro = 6.3492

    /* Libra Coin Converted  */

    const priceRealForLibra = 7.3365
    const priceDolarForLibra = 1.3505
    const priceEuroForLibra = 1.1557
    const priceBitcoinForLibra = 0.000012

    /* Bitcoin Coin Converted  */

    const priceRealforBitcoin = 589.444
    const priceDolarforBitcoin = 108.711
    const priceEuroforBitcoin = 92.858
    const priceLibraforBitcoin = 80.241



    /* Conversão de Reais para outras moedas  */



    if (converterDe.value == "real" & converterPara.value == "dolar") {
        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * priceDolarForReal)

        toconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }
    if (converterDe.value == "real" & converterPara.value == "euro") {
        converted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * priceEuroForReal)

        toconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

    }
    if (converterDe.value == "real" & converterPara.value == "real") {
        converted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        toconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }
    if (converterDe.value == "real" & converterPara.value == "libra") {
        converted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * princeLibraForReal)

        toconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }
    if (converterDe.value == "real" & converterPara.value == "bitcoin") {
        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputValue * priceBitCoinForReal)

        toconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValue)
    }



    /* Conversão de Dolar para outras moedas  */



    if (converterDe.value == "dolar" & converterPara.value == "real") {
        converted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * priceRealforDolar)

        toconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }
    if (converterDe.value == "dolar" & converterPara.value == "euro") {
        converted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * priceDolarForEuro)

        toconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }
    if (converterDe.value == "dolar" & converterPara.value == "dolar") {
        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        toconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }
    if (converterDe.value == "dolar" & converterPara.value == "libra") {
        converted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * priceLibraForDolar)

        toconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }
    if (converterDe.value == "dolar" & converterPara.value == "bitcoin") {
        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputValue * priceBitCoinForDolar)

        toconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue)
    }



    /* Conversão de Euro para outras moedas  */



    if (converterDe.value == "euro" & converterPara.value == "dolar") {
        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * priceEuroForDolar)

        toconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }
    if (converterDe.value == "euro" & converterPara.value == "real") {
        converted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * priceRealForEuro)

        toconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }
    if (converterDe.value == "euro" & converterPara.value == "euro") {
        converted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

        toconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }
    if (converterDe.value == "euro" & converterPara.value == "libra") {
        converted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * priceLibraForEuro)

        toconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }
    if (converterDe.value == "euro" & converterPara.value == "bitcoin") {
        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputValue * priceBitcoinForEuro)

        toconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue)
    }



    /* Conversão de libra para outras moedas  */



    if (converterDe.value == "libra" & converterPara.value == "dolar") {
        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * priceDolarForLibra)

        toconvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
    }
    if (converterDe.value == "libra" & converterPara.value == "real") {
        converted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * priceRealForLibra)

        toconvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
    }
    if (converterDe.value == "libra" & converterPara.value == "euro") {
        converted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * priceEuroForLibra)

        toconvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
    }
    if (converterDe.value == "libra" & converterPara.value == "libra") {
        converted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        toconvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
    }
    if (converterDe.value == "libra" & converterPara.value == "bitcoin") {
        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputValue * priceBitcoinForLibra)

        toconvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue)
    }



    /* Conversão de BitCoin para outras moedas  */



    if (converterDe.value == "bitcoin" & converterPara.value == "dolar") {
        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * priceDolarforBitcoin)

        toconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputValue)
    }
    if (converterDe.value == "bitcoin" & converterPara.value == "real") {
        converted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * priceRealforBitcoin)

        toconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputValue)
    }
    if (converterDe.value == "bitcoin" & converterPara.value == "euro") {
        converted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * priceEuroforBitcoin)

        toconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputValue)
    }
    if (converterDe.value == "bitcoin" & converterPara.value == "bitcoin") {
        converted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputValue)

        toconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputValue)
    }
    if (converterDe.value == "bitcoin" & converterPara.value == "libra") {
        converted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue * priceLibraforBitcoin)

        toconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputValue)
    }

}

function changeflagcoin() {
    const coinToConverted = document.querySelector(".coin-to-converted")
    const pConverter = document.querySelector(".p-to-convert")
    const imgconverted = document.querySelector(".image-convert")
    const imgToConvert = document.querySelector(".img-to-convert")

    if (converterPara.value == "dolar") {
        coinToConverted.innerHTML = "Dólar Americano"
        imgconverted.src = "assets/estados-unidos.png"
    }
    if (converterPara.value == "euro") {
        coinToConverted.innerHTML = "Euro"
        imgconverted.src = "assets/Euro.png"
    }
    if (converterPara.value == "real") {
        coinToConverted.innerHTML = "Real"
        imgconverted.src = "assets/real.png"
    }
    if (converterPara.value == "libra") {
        coinToConverted.innerHTML = "Libra"
        imgconverted.src = "assets/libra.png"
    }
    if (converterPara.value == "bitcoin") {
        coinToConverted.innerHTML = "BitCoin"
        imgconverted.src = "assets/bitcoin.png"
    }
    if (converterDe.value == "real") {
        pConverter.innerHTML = "Real"
        imgToConvert.src = "assets/real.png"
    }
    if (converterDe.value == "dolar") {
        pConverter.innerHTML = "Dólar Americano"
        imgToConvert.src = "assets/estados-unidos.png"
    }
    if (converterDe.value == "euro") {
        pConverter.innerHTML = "Euro"
        imgToConvert.src = "assets/Euro.png"
    }
    if (converterDe.value == "libra") {
        pConverter.innerHTML = "Libra"
        imgToConvert.src = "assets/libra.png"
    }
    if (converterDe.value == "bitcoin") {
        pConverter.innerHTML = "BitCoin"
        imgToConvert.src = "assets/bitcoin.png"
    }

    converter()
}


converterDe.addEventListener('change', changeflagcoin)
converterPara.addEventListener('change', changeflagcoin)
convertButton.addEventListener('click', converter)
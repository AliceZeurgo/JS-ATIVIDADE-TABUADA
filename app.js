var calculosTabuadas = require('./modulo/calculosTabuadas')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Qual o valor da primeira tabuada? ', function (tabuadaInicial){

    let tabInicio = tabuadaInicial

    entradaDados.question('Qual o valor da segunda tabuada? ', function(tabuadaFinal){

        let tabFinal = tabuadaFinal

        entradaDados.question('Número inicial do contador: ', function(contadorInicial){

            let contInicial = contadorInicial

            entradaDados.question('Qual o número final do contador? ', function(contadorFinal){

                let contFinal = contadorFinal
                let resultadoPTabuada
                let resultadoSTabuada

                console.log('----------PRIMIERA TABUADA----------')
                resultadoPTabuada = calculosTabuadas.primeiraTabuada(tabInicio, contInicial, contFinal)
                console.log('----------SEGUNDA TABUADA-----------')
                resultadoSTabuada = calculosTabuadas.segundaTabuada(tabFinal, contInicial, contFinal)
            })
        })
    })
})
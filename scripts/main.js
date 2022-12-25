//PEsquisa através do seletor css

const screen1 = document.querySelector('.screen1')
const screen2 =  document.querySelector('.screen2')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//função callback
function handleTryClick(event){
    event.preventDefault() // não faça o padrão

    const inputNumber = document.querySelector('#inputNumber')

    // Se a variável inputNumber for igual a variável randomNumber

    if(Number(inputNumber.value) == randomNumber){
        //então se adiciona a classe screen1  a classe hide
        screen1.classList.add('hide')        

        // e se remove a classe hide da classe screen2
        screen2.classList.remove('hide')

        // no h2 se insere o texto a seguir (fazendo a pesquisa dentro do elemento)
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }
    
    // a variável xAttempts é iterada e a variavel inputNuber é zerada
    inputNumber.value = ''
    xAttempts++
    console.log(inputNumber.value)
    console.log(randomNumber)
}

//Eventos

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

//Adiciona o evento que escuta o click e chama a função handleTryClick

btnTry.addEventListener('click', handleTryClick)
//Adiciona o evento que escuta o click e executa a função anonima que remove a classe hide da classe screen1 e adiciona a classe screen2
btnReset.addEventListener('click', function () {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    //Reinicia a contagem da variavel xAttempts
    xAttempts = 1
});
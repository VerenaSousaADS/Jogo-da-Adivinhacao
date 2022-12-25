//Variáveis
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
//PEsquisa através do seletor css
const screen1 = document.querySelector('.screen1')
const screen2 =  document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos


//Adiciona o evento que escuta o click e chama a função handleTryClick

btnTry.addEventListener('click', handleTryClick)
//Adiciona o evento que escuta o click e executa a função anonima que remove a classe hide da classe screen1 e adiciona a classe screen2
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})


//FUNÇÕES
//função callback
function handleTryClick(event){
    event.preventDefault() // não faça o padrão

    const inputNumber = document.querySelector('#inputNumber')

    // Se a variável inputNumber for igual a variável randomNumber

    if(Number(inputNumber.value) == randomNumber){

        toggleScreen()

        // no h2 se insere o texto a seguir (fazendo a pesquisa dentro do elemento)
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }
    
    // a variável xAttempts é iterada e a variavel inputNuber é zerada
    inputNumber.value = ''
    xAttempts++
    console.log(inputNumber.value)
    console.log(randomNumber)
}


function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

};
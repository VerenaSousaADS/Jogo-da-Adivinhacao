const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


function handleClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')

    // Se a variável inputNumber for igual a variável randomNumber

    if(Number(inputNumber.value) == randomNumber){
        //então se adiciona a classe screen1  a classe hide

        document.querySelector('.screen1').classList.add('hide')

        // e se remove a classe hide da classe screen2
        document.querySelector('.screen2').classList.remove('hide')

        // no h2 se insere o texto a seguir
        document.querySelector(
            '.screen2 h2'
        ).innerText = `Acertou em ${xAttempts} tentativas`
    }
    
    // a variável xAttempts é iterada
    xAttempts++
    console.log(inputNumber.value)
    console.log(randomNumber)
}
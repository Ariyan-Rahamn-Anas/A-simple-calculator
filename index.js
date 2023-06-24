// this is for calculation of "%" operator
const displayInput = document.querySelector('.display-input')
const percentageBtn = document.querySelector('.percentageBtn')
const resultBtn = document.querySelector('.result-btn')

percentageBtn.addEventListener('click',(event) => {
    const displayValue = displayInput.value
    let result = eval(displayValue)
    displayInput.value = result
})



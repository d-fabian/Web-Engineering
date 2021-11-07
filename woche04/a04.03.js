const fieldOne = document.getElementById('fieldOne')
const fieldTwo = document.getElementById('fieldTwo')
const fieldResult = document.getElementById('resultField')
let fieldResultTemp = ''

fieldResult.addEventListener('focusout', () => computeSolution())
fieldResult.addEventListener('focusin', () => d())

function computeSolution() {
    const numberOne = parseInt(fieldOne.innerText)
    const numberTwo = parseInt(fieldTwo.innerText)
    fieldResultTemp = fieldResult.innerText
    if (!(numberOne) || !(numberTwo)) {
        fieldResultTemp = fieldResult.innerText
        fieldResult.innerText = 'Error'
    }

    //Operations
    if (fieldResult.innerText.toLowerCase() === '=sum(a2,b2)') {
        fieldResultTemp = fieldResult.innerText
        const result = numberOne + numberTwo
        fieldResult.innerText = result.toString()
    }
}

function d() {
    fieldResult.innerText = fieldResultTemp
}
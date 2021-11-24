const number = process.argv.slice(2, 3).toString()

if (isNaN(parseInt(number))) {
    console.log('Please enter a valid number!')
} else {
    let i = 1
    let char = 'A'
    let overflow = 0
    let prefixCounterA = 0
    while (i <= number) {
        console.log(computePrefix(prefixCounterA) + char)
        char = String.fromCharCode(char.charCodeAt(0) + 1)

        i++
        overflow++
        if (overflow === 26) {
            char = 'A'
            overflow = 0
            prefixCounterA++
        }
    }
}

function computePrefix(prefixCounterA) {
    let prefix = ''
    for (let i = 0; i < prefixCounterA; i++) {
        prefix += 'A'
    }
    return prefix
}
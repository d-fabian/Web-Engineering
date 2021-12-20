const number = process.argv.slice(2, 3).toString()

if (isNaN(parseInt(number))) {
    console.log('Please enter a valid number!')
} else {
    let i = 1
    while (i <= number) {
        console.log(i + '.')
        i++
    }
}
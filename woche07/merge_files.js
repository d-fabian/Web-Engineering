const fs = require('fs').promises;

(async () => {
    const timeStart = Date.now()
    const input = process.argv.slice(2, 4)
    const [text1, text2] = await Promise.all([
        fs.readFile(input[0], 'utf-8'),
        fs.readFile(input[1], 'utf-8')
    ])

    const lines1 = text1.split("\r\n")
    const lines2 = text2.split("\r\n")

    let count = 0
    for (const line of lines1) {
        await console.log(line + lines2[count++])
    }
    await console.log(`Time needed: ${Date.now() - timeStart} ms for ${text1.replaceAll('\r\n', ' ').length} chars in every file`)
})()
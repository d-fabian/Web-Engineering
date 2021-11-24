const fs = require('fs');
const {pipeline} = require('stream/promises')

const timeStart = Date.now()
const input = process.argv.slice(2, 4)
let text1 = []
let text2 = []

async function read1() {
    await pipeline(
        fs.createReadStream(input[0], 'utf-8'),
        async function (source) {
            source.setEncoding('utf-8')
            for await (const chunk of source) {
                text1.push(chunk)
            }
        }
    )
}

async function read2() {
    await pipeline(
        fs.createReadStream(input[1], 'utf-8'),
        async function (source) {
            source.setEncoding('utf-8')
            for await (const chunk of source) {
                text2.push(chunk)
            }
        }
    )
}

(async () => {
    await Promise.all([
        read1().catch(console.error),
        read2().catch(console.error)
    ])

    text1 = text1.toString().split('\r\n')
    text2 = text2.toString().split('\r\n')

    let i = 0
    for await (const line of text1) {
        console.log(line + ' ' + text2[i++])
    }
    console.log(`Time needed: ${Date.now() - timeStart} ms for ${text1.toString().replaceAll('\r\n', ' ').length} chars in every file`)
})()

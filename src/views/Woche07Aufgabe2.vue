<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie in Node.js zwei Programme merge_files.js und merge_streams.js, um große Dateien zu zeilenweise
      zusammenzuführen, merge_files.js mit fs.readFile und merge_streams.js mit Streams, also createReadFileStream und
      pipeline.<br><br>
      <ul class="exerciseList">
        <li>node merge_files.js big_file1.txt big_file2.txt</li>
        <li>node merge_streams.js big_file1.txt big_file2.txt</li>
      </ul>
      <br>Messen Sie anschließend die Performanz beider Programme.
    </template>
    <template v-slot:solution>
      <div class="container">

        <p>merge_files.js</p>
        <pre><highlight-code lang="javascript">
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
        </highlight-code></pre>

        <p>merge_streams.js</p>
        <pre><highlight-code lang="javascript">
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
        </highlight-code></pre>

        <p>Ergebnisse der Performanz-Messungen</p>
        <ul class="performanceList">
          <li>Textdatei jeweils 14813 chars</li>
          <ul>
            <li>merge_files: 26ms</li>
            <li>merge_streams: 30ms</li>
          </ul>
          <li>Textdatei jeweils 29627 chars</li>
          <ul>
            <li>merge_files: 40ms</li>
            <li>merge_streams: 50ms</li>
          </ul>
        </ul>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche07Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 7.2',
  components: {
    SolutionWithOverlay
  },
}
</script>

<style scoped>
.container {
  margin: 0 20px 20px 20px;
  height: calc(100vh - 61px - 40px - 20px);
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px - 20px);
}

.exerciseList {
  border: 1px solid black;
  border-radius: 8px;
  list-style: none;
  padding: 5px 0;
}

pre {
  text-align: left;
  margin-top: 10px;
  margin-bottom: 20px;
}

p {
  font-weight: bold;
}

.performanceList {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
</style>
<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie in Node.js zwei Kommandozeilen-Tools, um große Dateien zu erzeugen. <code>node number_file_gen.js
      20_000</code>
      soll eine Datei mit 20.000 Zeilen erzeugen. In jeder Zeile soll die Zeilennummer und ein Punkt stehen. 20.000 ist
      dabei ein Parameter des Tools. Jede andere Zahl soll ebenfalls erlaubt sein. <code>node alpha_file_gen.js
      123456</code> soll
      eine Datei mit 123456 Zeilen erzeugen. In jeder Zeile soll eine Variation mit Wiederholung aller Großbuchstaben
      (ohne Umlaute) in folgender Reihenfolge stehen:
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>...</li>
        <li>Z</li>
        <li>AA</li>
        <li>AB</li>
        <li>AC</li>
        <li>AD</li>
        <li>...</li>
      </ul>
      usw.
    </template>
    <template v-slot:solution>
      <div class="container">

        <p class="numberFileGen">number_file_gen.js</p>
        <pre class="numberFileGen"><highlight-code lang="javascript">
          const number = process.argv.slice(2, 3).toString();

          if (isNaN(parseInt(number))) {
            console.log('Please enter a valid number!')
          } else {
            let i = 1
            while (i &lt;= number) {
              console.log(i + '.')
              i++
            }
          }
        </highlight-code></pre>

        <p class="alphaFileGen">alpha_file_gen.js</p>
        <pre class="alphaFileGen"><highlight-code lang="javascript">
          const number = process.argv.slice(2, 3).toString();

          if (isNaN(parseInt(number))) {
            console.log('Please enter a valid number!')
          } else {
            let i = 1
            let char = 'A'
            let overflow = 0
            let prefixCounterA = 0
            while (i &lt;= number) {
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
            for (let i = 0; i &lt; prefixCounterA; i++) {
              prefix += 'A'
            }
            return prefix
          }
        </highlight-code></pre>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche07Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 7.1',
  components: {
    SolutionWithOverlay,
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

code {
  padding: 0 5px;
  background-color: #009ee0;
  border: black 1px solid;
  border-radius: 5px;
}

ul {
  list-style: none;
}

pre {
  text-align: left;
  margin-top: 10px;
  margin-bottom: 20px;
}

p {
  font-weight: bold;
}
</style>
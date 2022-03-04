<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Berechnen Sie, wie viele Primzahlen es bis 100.000 gibt. Implementieren Sie Ihren Algorithmus sowohl in JavaScript
      als auch in WebAssembly. Vergleichen Sie die Performanz beider Implementierungen.
    </template>
    <template v-slot:solution>
      <div class="container">
        <div id="wrapper">
          <div id="containerJS">
            <h1>Primzahlen mit JavaScript</h1>
            <div>Anzahl der Durchläufe zum Berechnen von Primzahlen (jeweils von 2 bis 100.000)</div>
            <input v-model="inputNumberJS" type="number" placeholder="Zahl eingeben" id="numberFieldJS">
            <input type="button" :disabled="!inputNumberJS" value="Berechnen" id="computeButtonJS">
            <div id="resultDivJS"></div>
          </div>
          <div id="containerWA">
            <h1>Primzahlen mit WebAssembly</h1>
            <div>Anzahl der Durchläufe zum Berechnen von Primzahlen (jeweils von 2 bis 100.000)</div>
            <input v-model="inputNumberWA" type="number" placeholder="Zahl eingeben" id="numberFieldWA">
            <input type="button" :disabled="!inputNumberWA" value="Berechnen" id="computeButtonWA">
            <div id="resultDivWA"></div>
          </div>
        </div>
        <button @click="showModuleCode = !showModuleCode">{{showModuleCode ? 'Verstecke' : 'Zeige'}} WebAssembly Modul</button>
        <div v-if="showModuleCode">
          <pre><highlight-code lang="armasm"> {{ moduleCode }} </highlight-code></pre>
        </div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import primModuleCode from 'raw-loader!../sourceCodeForWebsite/prim.wat';

export default {
  name: "Woche11Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 11.2',
  components: {
    SolutionWithOverlay
  },
  data() {
    return {
      numberFieldJS: undefined,
      computeButtonJS: undefined,
      resultDivJS: undefined,
      inputNumberJS: undefined,

      numberFieldWA: undefined,
      computeButtonWA: undefined,
      resultDivWA: undefined,
      inputNumberWA: undefined,

      isPrimeNumberWA: undefined,
      showModuleCode: false,
      moduleCode: undefined,
    }
  },
  mounted() {
    this.numberFieldJS = document.getElementById('numberFieldJS')
    this.computeButtonJS = document.getElementById('computeButtonJS')
    this.resultDivJS = document.getElementById('resultDivJS')
    this.computeButtonJS.addEventListener('click', this.computeJS)

    this.numberFieldWA = document.getElementById('numberFieldWA')
    this.computeButtonWA = document.getElementById('computeButtonWA')
    this.resultDivWA = document.getElementById('resultDivWA')
    this.computeButtonWA.addEventListener('click', this.computeWA)

    this.moduleCode = primModuleCode
    this.loadWebAssemblyModule()
  },
  methods: {
    async loadWebAssemblyModule() {
      const response = await fetch('prim.wasm')
      const buffer = await response.arrayBuffer()
      const wasm = await WebAssembly.instantiate(buffer)
      this.isPrimeNumberWA = wasm.instance.exports.isPrime
    },
    computeJS() {
      const times = []
      // do the performance test n times
      for (let i = 1; i <= this.inputNumberJS; i++) {
        const startTime = performance.now()
        for (let j = 2; j <= 100000; j++) {
          this.isPrimeNumberJS(j)
        }
        const endTime = performance.now()
        times.push((endTime - startTime))
      }

      this.resultDivJS.innerHTML = ''
      const gesTime = document.createElement('div')
      const minTime = document.createElement('div')
      const maxTime = document.createElement('div')
      const avgTime = document.createElement('div')
      gesTime.innerText = `Gesamte Zeit für ${this.inputNumberJS} Durchläufe: ${times.reduce((a, b) => a + b, 0).toFixed(2)}ms`
      minTime.innerText = `Minimum: ${Math.min(...times).toFixed(2)}ms`
      maxTime.innerText = `Maximum: ${Math.max(...times).toFixed(2)}ms`
      avgTime.innerText = `Durchschnitt: ${(times.reduce((a, b) => a + b, 0) / times.length).toFixed(2)}ms`
      this.resultDivJS.append(gesTime, minTime, maxTime, avgTime)
    },
    computeWA() {
      const times = []
      // do the performance test n times
      for (let i = 1; i <= this.inputNumberWA; i++) {
        const startTime = performance.now()
        for (let j = 2; j <= 100000; j++) {
          this.isPrimeNumberWA(j)
        }
        const endTime = performance.now()
        times.push((endTime - startTime))
      }

      this.resultDivWA.innerHTML = ''
      const gesTime = document.createElement('div')
      const minTime = document.createElement('div')
      const maxTime = document.createElement('div')
      const avgTime = document.createElement('div')
      gesTime.innerText = `Gesamte Zeit für ${this.inputNumberWA} Durchläufe: ${times.reduce((a, b) => a + b, 0).toFixed(2)}ms`
      minTime.innerText = `Minimum: ${Math.min(...times).toFixed(2)}ms`
      maxTime.innerText = `Maximum: ${Math.max(...times).toFixed(2)}ms`
      avgTime.innerText = `Durchschnitt: ${(times.reduce((a, b) => a + b, 0) / times.length).toFixed(2)}ms`
      this.resultDivWA.append(gesTime, minTime, maxTime, avgTime)
    },
    isPrimeNumberJS(n) {
      let start = 2;
      const limit = Math.sqrt(n);
      while (start <= limit) {
        if (n % start++ < 1) return false;
      }
      return n > 1;
    },
  },
}
</script>

<style scoped>
.container {
  height: calc(100vh - 61px - 40px);
  width: 100vw;
  transition: 0.5s linear;
  overflow-x: hidden;
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}

#wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#containerJS, #containerWA {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

#resultDivJS, #resultDivWA {
  text-align: center;
}

button {
  padding: 0 10px;
}

pre {
  text-align: left;
  margin: 20px;
}
</style>
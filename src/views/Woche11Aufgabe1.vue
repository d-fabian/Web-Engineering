<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Erstellen Sie ein WebAssembly-Modul für den <a
        href="https://de.wikipedia.org/wiki/Gr%C3%B6%C3%9Fter_gemeinsamer_Teiler" target="_blank">größten gemeinsamen
      Teiler</a> von Hand in <a href="https://webassembly.github.io/spec/core/text/index.html" target="_blank">WAT</a>,
      kompilieren Sie diesen mit wat2wasm nach WASM und testen Sie Ihr Modul durch Aufruf mit Parametern aus dem Bereich
      von 1 bis 100.
    </template>
    <template v-slot:solution>
      <div class="container">
        <div>
          <button @click="printGGT">Berechne Primzahlen</button>
          <button @click="showModuleSourceCode">Zeige WebAssembly Modul</button>
        </div>
        <div id="primContainer"></div>
        <div id="wasmCode">
          <pre><highlight-code lang="armasm"> {{ moduleCode }} </highlight-code></pre>
        </div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import ggtModuleCode from 'raw-loader!../sourceCodeForWebsite/ggt.wat';

export default {
  name: "Woche11Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 11.1',
  components: {
    SolutionWithOverlay
  },
  data() {
    return {
      container: undefined,
      showModuleCode: false,
      ggt: undefined,
      moduleCode: undefined,
    }
  },
  mounted() {
    this.container = document.getElementById('primContainer')
    this.loadWebAssemblyModule()
    this.moduleCode = ggtModuleCode
  },
  methods: {
    async loadWebAssemblyModule() {
      const response = await fetch('ggt.wasm')
      const buffer = await response.arrayBuffer()
      const wasm = await WebAssembly.instantiate(buffer)
      this.ggt = wasm.instance.exports.ggt

    },
    printGGT() {
      this.showModuleCode = false
      this.container.innerHTML = ''
      this.container.style.display = 'inline'
      document.getElementById('wasmCode').style.display = 'none'
      for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 100; j++) {
          const newChild = document.createElement('div')
          newChild.innerText = `ggT von ${i} und ${j} ist ${this.ggt(i, j)}`
          setTimeout(() => {
            this.container.appendChild(newChild)
            newChild.scrollIntoView()
          }, 1)
        }
      }
    },
    showModuleSourceCode() {
      if (this.showModuleCode) {
        document.getElementById('primContainer').style.display = 'inline'
        document.getElementById('wasmCode').style.display = 'none'

      } else {
        document.getElementById('primContainer').style.display = 'none'
        document.getElementById('wasmCode').style.display = 'inline'
      }
      this.showModuleCode = !this.showModuleCode
    }
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

button {
  margin: 10px 20px;
  padding: 0 10px;
}

pre {
  text-align: left;
  margin: 20px;
}

#wasmCode {
  display: none;
}
</style>
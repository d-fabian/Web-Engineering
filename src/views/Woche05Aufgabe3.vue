<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie eine Webseite, die Primzahlen berechnet und fortlaufend neu berechnete Primzahlen hinzufügt.
      Verwenden Sie dabei die BigNum-Arithmetik. Auf der Webseite soll außerdem ein Ladebalken ständig hin- und
      herlaufen, damit man feststellen kann, ob die Anzeige ruckelfrei abläuft. Stellen Sie fest, ab welcher Zahl der
      Ladebalken anfängt zu ruckeln.<br><br>
      Schreiben Sie dann einen Web Worker, der Primzahlen berechnet und diese mittels
      postMessage an die EventLoop in der Webseite sendet, damit diese dort angezeigt werden können.
    </template>
    <template v-slot:solution>
      <div class="container">
        <div id="animateContainer">
          <div id="animate">

          </div>
        </div>
        <div id="buttonContainer">
          <button disabled id="startBtn">Start Worker</button>
          <button id="stopBtn">Stopp Worker</button>
          <button disabled id="clear">Clear Output</button>
        </div>
        <div id="primContainer">

        </div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche05Aufgabe3",
  title: 'Web Engineering WS21/22 - Woche 5.3',
  components: {
    SolutionWithOverlay
  },
  data() {
    return {
      animate: undefined,
      width: 1,
      animation: undefined,
      primContainer: undefined,
      worker: undefined,
      startBtn: undefined,
      stopBtn: undefined,
      clearBtn: undefined,
    }
  },
  mounted() {
    this.animate = document.getElementById('animate')
    this.animation = requestAnimationFrame(() => this.step(1))
    this.primContainer = document.getElementById('primContainer')
    this.startBtn = document.getElementById('startBtn')
    this.stopBtn = document.getElementById('stopBtn')
    this.clearBtn = document.getElementById('clear')
    this.startBtn.addEventListener('click', () => this.startComputation())
    this.stopBtn.addEventListener('click', () => this.stopComputation())
    this.clearBtn.addEventListener('click', () => this.resetComputation())
    this.worker = new Worker('a05.03Worker.js')
    this.worker.postMessage('')
    this.worker.addEventListener('message', (e) => this.insertNewPrim(e))

  },
  methods: {
    step(dir) {
      let direction = dir
      if (dir) {
        this.width += 1
      } else {
        this.width -= 1
      }
      this.animate.style.width = this.width + '%'
      if (this.width === 100) {
        direction = 0
      } else if (this.width === 0) {
        direction = 1
      }
      this.animation = requestAnimationFrame(() => this.step(direction))
    },

    insertNewPrim(event) {
      const primEntry = document.createElement('div')
      primEntry.textContent = event.data
      primEntry.className = 'primEntry'
      this.primContainer.insertBefore(primEntry, this.primContainer.firstChild)
    },

    startComputation() {
      this.startBtn.toggleAttribute('disabled')
      this.startBtn.style.background = 'lightgray'
      this.stopBtn.toggleAttribute('disabled')
      this.stopBtn.style.background = 'deepskyblue'

      this.worker = new Worker('a05.03Worker.js')
      this.worker.postMessage('')
      this.worker.addEventListener('message', (e) => this.insertNewPrim(e))
    },

    stopComputation() {
      this.worker.terminate()
      this.stopBtn.toggleAttribute('disabled')
      this.stopBtn.style.background = 'lightgray'
      this.clearBtn.toggleAttribute('disabled')
      this.clearBtn.style.background = 'deepskyblue'
    },

    resetComputation() {
      this.primContainer.innerHTML = ''
      this.clearBtn.toggleAttribute('disabled')
      this.clearBtn.style.background = 'lightgray'
      this.startBtn.toggleAttribute('disabled')
      this.startBtn.style.background = 'deepskyblue'
    },
  },
}
</script>

<style scoped>
.container {
  height: calc(100vh - 61px - 40px);
  width: calc(100vw - 40px);
  transition: 0.5s linear;
  margin: 0 20px;
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px - 40px);
}

#animateContainer {
  background: lightgray;
  width: 100%;
  height: 4em;
  border-radius: 8px;
}

#animate {
  background: #009ee0;
  width: 100%;
  height: 4em;
  border-radius: 8px;
}

#buttonContainer {
  display: flex;
  justify-content: center;
}

button {
  padding: 10px;
  margin: 20px;
  background: lightgray;
  border: 1px black solid;
  border-radius: 8px;
  font-weight: bold;
}

#stopBtn {
  background: deepskyblue;
}

#primContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  font-size: 20pt;
}

.primEntry {
  padding: 10px 0;
}
</style>
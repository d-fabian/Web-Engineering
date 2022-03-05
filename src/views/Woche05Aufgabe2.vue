<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Erstellen Sie auf Ihrem Server www2.inf.h-brs.de (oder localhost) zwei Text-Dateien A.txt und B.txt mit ungefähr
      gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer
      Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus A.txt und das Ende aus B.txt
      stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. Geschwindigkeit
      durch maximale Parallelität. Achten Sie gleichzeitig auf Korrektheit. Verwenden Sie dabei ausschließlich async /
      await.
    </template>
    <template v-slot:solution>
      <div class="container" id="textField">
        <div class="header">
          <button id="startBtn">Start</button>
          <div>
            Der geladene Text aus der Datei <code>A.txt</code> wird <span id="green">grün</span> und der aus
            <code>B.txt</code> <span id="blue">blau</span> angezeigt.
          </div>
        </div>
        <br>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche05Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 5.2',
  components: {
    SolutionWithOverlay
  },
  data: function () {
    return {
      textA: undefined,
      textB: undefined,
      textField: undefined,
      startBtn: undefined,
    }
  },
  mounted() {
    this.textField = document.getElementById('textField')
    this.startBtn = document.getElementById('startBtn')

    this.startBtn.addEventListener('click', async () => {
      await this.getTextA()
      await this.getTextB()
      await this.showText()
    })
  },
  methods: {
    async getTextA() {
      const response = await fetch('A.txt')
      const text = await response.text()
      this.textA = text.split('\r\n')
    },
    async getTextB() {
      const response = await fetch('B.txt')
      const text = await response.text()
      this.textB = text.split('\r\n')
    },
    async showText() {
      for (let index = 0; index < Math.max((this.textA ? this.textA.length : 0), (this.textB ? this.textB.length : 0)); index++) {
        const lineA = this.textA ? this.textA[index] : ''
        const lineB = this.textB ? this.textB[index] : ''
        const newLineA = document.createElement('span')
        newLineA.textContent = lineA + ' '
        newLineA.style.color = 'green'
        const newLineB = document.createElement('span')
        newLineB.textContent = lineB
        newLineB.style.color = 'blue'
        const wholeLine = document.createElement('div')
        wholeLine.style.margin = '0 20px'
        wholeLine.append(newLineA, newLineB)
        this.textField.appendChild(wholeLine)
      }
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 61px - 40px);
  width: 100vw;
  transition: 0.5s linear;
  overflow-x: hidden;
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}

.header {
  display: flex;
  flex-direction: row;
  gap: 50px;
}

code {
  background: lightgray;
  border-radius: 5px;
  padding: 2px;
}

#green {
  color: green;
}

#blue {
  color: blue;
}
</style>
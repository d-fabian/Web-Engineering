<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      <!-- todo add exercise -->
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
  name: "Woche05Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 5.1',
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

    this.startBtn.addEventListener('click', () => {
      Promise.all([
        fetch('A.txt')
            .then(response => response.text())
            .then(text => text.split('\r\n'))
            .then(textArray => this.textA = textArray),
        fetch('B.txt')
            .then(response => response.text())
            .then(text => text.split('\r\n'))
            .then(textArray => this.textB = textArray),
      ])
          .then(() => {
            for (let index = 0; index < Math.max(this.textA.length, this.textB.length); index++) {
              const lineA = this.textA[index] || ''
              const lineB = this.textB[index] || ''
              const newLineA = document.createElement('span')
              newLineA.textContent = lineA + ' '
              newLineA.style.color = 'green'
              const newLineB = document.createElement('span')
              newLineB.textContent = lineB
              newLineB.style.color = 'blue'
              const wholeLine = document.createElement('div')
              wholeLine.append(newLineA, newLineB)
              this.textField.appendChild(wholeLine)
            }
          })
    })
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  height: calc(100vh - 61px - 40px);
  width: calc(100vw - 20px);
  transition: 0.5s linear;
  overflow-x: hidden;
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px - 20px);
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
<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie eine Tabellenkalkulation mit den Bordmitteln des Webs. In die Tabelle soll man Zahlen und Formeln
      eintragen können. Die Formeln sollen berechnet werden, sobald sie fertig eingegeben sind, aber auch immer wieder
      editiert werden können. Beginnen Sie mit einfachen Summenformeln wie <code>=SUM(A2:D2)</code>.<br><br>
      Wenn man das Formel-Feld verlässt, soll das berechnete Ergebnis angezeigt werden.<br><br>
      Wenn man an den Summanden etwas ändert, soll die Summe automatisch neu berechnet und neu angezeigt werden, wie man
      es von den üblichen Tabellenkalkulationsprogrammen wie Excel gewohnt ist. (Die Tabelle soll natürlich beliebig
      groß sein können. Die Größe dürfen Sie durch Parameter festgelegen. Die dynamische Vergrößerung kann erst einmal
      vernachlässigt werden.)
    </template>
    <template v-slot:solution>
      <div class="container">
        <h1>Tabellenkalkulation mit contentEditable</h1>
        <table>
          <tr>
            <th></th>
            <th scope="col">2</th>
          </tr>
          <tr>
            <th scope="row">A</th>
            <td contenteditable id="fieldOne"></td>
          </tr>
          <tr>
            <th scope="row">B</th>
            <td contenteditable id="fieldTwo"></td>
          </tr>
          <tr>
            <th scope="row">Ergebnis</th>
            <td contenteditable id="resultField"></td>
          </tr>
        </table>
        <div class="supportedOperations">
          <div><b>Unterstützte Operationen:</b></div>
          <ul>
            <li><b>Summe</b> =SUM(A2,B2)</li>
          </ul>
        </div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche04Aufgabe3",
  title: 'Web Engineering WS21/22 - Woche 4.3',
  components: {
    SolutionWithOverlay
  },
  data: function () {
    return {
      fieldOne: undefined,
      fieldTwo: undefined,
      fieldResult: undefined,
      fieldResultTemp: '',
      currentOperation: '',
    }
  },
  mounted: function () {
    this.fieldOne = document.getElementById('fieldOne')
    this.fieldTwo = document.getElementById('fieldTwo')
    this.fieldResult = document.getElementById('resultField')
    this.fieldOne.addEventListener('focusout', () => this.updateSolution(this.currentOperation))
    this.fieldTwo.addEventListener('focusout', () => this.updateSolution(this.currentOperation))
    this.fieldResult.addEventListener('focusout', () => this.computeSolution())
    this.fieldResult.addEventListener('focusin', () => this.updateResultField())
  },
  methods: {
    computeSolution() {
      const numberOne = parseInt(this.fieldOne.innerText)
      const numberTwo = parseInt(this.fieldTwo.innerText)
      this.currentOperation = this.fieldResult.innerText
      this.fieldResultTemp = this.fieldResult.innerText
      if (!(numberOne) || !(numberTwo)) {
        this.fieldResultTemp = this.fieldResult.innerText
        this.fieldResult.innerText = 'Error'
      }

      //Operations
      if (this.fieldResult.innerText.toLowerCase() === '=sum(a2,b2)') {
        this.fieldResultTemp = this.fieldResult.innerText
        const result = numberOne + numberTwo
        this.fieldResult.innerText = result.toString()
      }
    },
    updateResultField() {
      this.fieldResult.innerText = this.fieldResultTemp
    },
    updateSolution(currentOperation) {
      if(this.fieldResult.innerText === '') return
      const numberOne = parseInt(this.fieldOne.innerText)
      const numberTwo = parseInt(this.fieldTwo.innerText)

      if (!(numberOne) || !(numberTwo)) {
        this.fieldResultTemp = this.fieldResult.innerText
        this.fieldResult.innerText = 'Error'
      }
      //Operations
      if (currentOperation.toLowerCase() === '=sum(a2,b2)') {
        this.fieldResultTemp = this.fieldResult.innerText
        const result = numberOne + numberTwo
        this.fieldResult.innerText = result.toString()
      }
      this.fieldResultTemp = currentOperation
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  height: calc(100vh - 61px - 40px);
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px);
}

h1 {
  font-weight: bold;
}

table {
  border-collapse: collapse;
}

td,
th {
  border: 1px solid black;
  padding: 10px;
  width: 200px;
  text-align: right;
}

.supportedOperations {
  margin: 20px;
  font-size: 20px;
}

ul {
  margin-left: 20px;
}
</style>
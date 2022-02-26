<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      <div style="margin: 15px">
        Schreiben Sie mit SVG einen Kalligraphie-Editor mit folgenden Features:<br><br>
        <ul>
          <li>Im Zeichenbereich kann man mit der Maus Linien erzeugen.</li>
          <li>Eine durchgehende Linie wird nur erzeugt, solange man die Maus gedrückt hält.</li>
          <li>Je langsamer man den Cursor bewegt, desto dicker wird die Linie (so als ob das Papier an der Stelle die
            Tinte schneller aufsaugt).
          </li>
        </ul>
      </div>
    </template>
    <template v-slot:solution>
      <div class="container">
        <h1>SVG-Kalligrafie</h1>
        <div class="buttons">
          <button id="reset">Reset</button>
          <button id="replay">Replay</button>
          <button id="stopp">Stopp</button>
        </div>
        <svg class="drawArea" id="drawArea"></svg>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche06Aufgabe3",
  title: 'Web Engineering WS21/22 - Woche 6.3',
  components: {
    SolutionWithOverlay
  },
  data() {
    return {
      isMouseDown: false,
      counterLines: 1,
      counterPoints: 1,
      points: undefined,
      line: undefined,
      nrLines: undefined,
      nrPointInLine: undefined,
      redraw: undefined,
      drawArea: undefined,
      resetBtn: undefined,
      replayBtn: undefined,
      stoppBtn: undefined,
    }
  },
  mounted() {
    this.drawArea = document.getElementById('drawArea')
    this.resetBtn = document.getElementById('reset')
    this.replayBtn = document.getElementById('replay')
    this.stoppBtn = document.getElementById('stopp')

    this.drawArea.addEventListener('mousedown', () => {
      this.isMouseDown = true
      this.line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
      this.line.style = 'fill:none;stroke:black;stroke-width:3'
    })
    this.drawArea.addEventListener('mouseup', () => {
      this.isMouseDown = false
      this.points = null
    })
    this.drawArea.addEventListener('mousemove', this.draw)
    this.resetBtn.addEventListener('click', () => {
      this.drawArea.innerHTML = ''
      this.counterPoints = 1
      this.counterLines = 1
    })
    this.replayBtn.addEventListener('click', this.replayDrawing)
    this.stoppBtn.addEventListener('click', () => clearInterval(this.redraw))
  },
  methods: {
    draw(event) {
      if (this.isMouseDown) {
        const svgPoint = this.getCoordinatesForSVG(event.x, event.y, this.drawArea)

        // create new line
        if (this.points) {
          this.line.setAttribute('points', `${this.points},${svgPoint.x},${svgPoint.y}`)
        } else {
          this.line.setAttribute('points', `${svgPoint.x},${svgPoint.y}`)
        }
        this.points = this.line.getAttribute('points')

        this.drawArea.appendChild(this.line)
      }
    },

    getCoordinatesForSVG(domX, domY, element) {
      let svgPoint = element.createSVGPoint();
      svgPoint.x = domX
      svgPoint.y = domY
      return svgPoint.matrixTransform(element.getScreenCTM().inverse())
    },

    replayDrawing() {
      let id = 1
      const newLines = []
      const allPoints = []
      this.nrLines = 0
      this.nrPointInLine = []
      const allLines = this.drawArea.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'polyline')
      for (let line of allLines) {
        const points = line.getAttribute('points')
        allPoints.push(points)
        this.nrLines++
        this.nrPointInLine.push(points.length)

        const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
        newLine.id = 'l' + id
        newLine.style = 'fill:none;stroke:black;stroke-width:3'
        newLines.push(newLine)
        id++
      }
      this.drawArea.innerHTML = ''
      newLines.forEach(line => this.drawArea.appendChild(line))
      this.redraw = setInterval(() => {
        let points = allPoints[this.counterLines - 1].split(',')
        const newPoint = points[this.counterPoints * 2 - 2] + ',' + points[this.counterPoints * 2 - 1]
        const line = document.getElementById(`l${this.counterLines}`)
        const oldPoints = line.getAttribute('points')
        if (oldPoints) {
          line.setAttribute('points', oldPoints + ',' + newPoint)
        } else {
          line.setAttribute('points', newPoint)
        }
        this.drawArea.appendChild(line)
        this.counterPoints++
        if (this.counterPoints > points.length / 2) {
          this.counterLines++
          this.counterPoints = 1
        }
        if (this.counterLines > this.nrLines) {
          clearInterval(this.redraw)
        }
      }, 10)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 61px - 40px);
  width: 100vw;
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}

h1 {
  height: 40px;
}

.buttons {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 20px;
  height: 30px;
}

button {
  padding: 5px 10px;
}

.drawArea {
  margin: 0 20px 20px 20px;
  height: 100%;
  border: 2px solid black;
}
</style>
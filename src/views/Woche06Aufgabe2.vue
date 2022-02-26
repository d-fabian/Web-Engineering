<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie mit SVG ein Animationswerkzeug für Bezierkurven, wie unter <a
        href="https://pomax.github.io/bezierinfo/#introduction" target="_blank">§1 - A lightning introduction</a>
      vorgegeben.
    </template>
    <template v-slot:solution>
      <div class="container">
        <h1>SVG Bezier-Animation</h1>
        <h4>Punkte lassen sich per Drag&Drop bewegen</h4>
        <svg id="svgArea">
          <path d="M400 200 Q900 300 ,800 1000" fill="none" id="bezLine" stroke="black"></path>
          <circle cx="400" cy="200" fill="red" id="circle1" r="20"></circle>
          <circle cx="800" cy="1000" fill="blue" id="circle2" r="20"></circle>
          <circle cx="900" cy="300" fill="black" id="circle3" r="20"></circle>
        </svg>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche06Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 6.2',
  components: {
    SolutionWithOverlay
  },
  data() {
    return {
      isMouseDown: false,
      svgPoint: undefined,
      svgArea: undefined,
      circle1: undefined,
      circle2: undefined,
      circle3: undefined,
      bezLine: undefined,
    }
  },
  mounted() {
    this.svgArea = document.getElementById('svgArea')
    this.circle1 = document.getElementById('circle1')
    this.circle2 = document.getElementById('circle2')
    this.circle3 = document.getElementById('circle3')
    this.bezLine = document.getElementById('bezLine')

    this.circle1.addEventListener('mousedown', () => this.isMouseDown = true)
    this.circle1.addEventListener('mouseup', () => this.isMouseDown = false)
    this.circle1.addEventListener('mouseout', () => this.isMouseDown = false)
    this.circle1.addEventListener('mousemove', () => this.move(this.circle1))

    this.circle2.addEventListener('mousedown', () => this.isMouseDown = true)
    this.circle2.addEventListener('mouseup', () => this.isMouseDown = false)
    this.circle2.addEventListener('mouseout', () => this.isMouseDown = false)
    this.circle2.addEventListener('mousemove', () => this.move(this.circle2))

    this.circle3.addEventListener('mousedown', () => this.isMouseDown = true)
    this.circle3.addEventListener('mouseup', () => this.isMouseDown = false)
    this.circle3.addEventListener('mouseout', () => this.isMouseDown = false)
    this.circle3.addEventListener('mousemove', () => this.move(this.circle3))
  },
  methods: {
    move(circle) {
      if (this.isMouseDown) {
        this.svgPoint = this.getCoordinatesForSVG(event.x, event.y, this.svgArea)
        circle.setAttribute('cx', this.svgPoint.x)
        circle.setAttribute('cy', this.svgPoint.y)

        const lineStats = this.bezLine.getAttribute('d').split(' ')
        if (circle.id.includes('1')) {
          const newLineStats = 'M' + this.svgPoint.x + ' ' + this.svgPoint.y + ' ' + lineStats[2] + ' ' + lineStats[3] + ' ' + lineStats[4] + ' ' + lineStats[5]
          this.bezLine.setAttribute('d', newLineStats)
        } else if (circle.id.includes('2')) {
          const newLineStats = lineStats[0] + ' ' + lineStats[1] + ' ' + lineStats[2] + ' ' + lineStats[3] + ' ' + this.svgPoint.x + ' ' + this.svgPoint.y
          this.bezLine.setAttribute('d', newLineStats)
        } else if (circle.id.includes('3')) {
          const newLineStats = lineStats[0] + ' ' + lineStats[1] + ' Q' + this.svgPoint.x + ' ' + this.svgPoint.y + ' ' + lineStats[4] + ' ' + lineStats[5]
          this.bezLine.setAttribute('d', newLineStats)
        }
      }
    },

    getCoordinatesForSVG(domX, domY, element) {
      let svgPoint = element.createSVGPoint();
      svgPoint.x = domX
      svgPoint.y = domY
      return svgPoint.matrixTransform(element.getScreenCTM().inverse())
    },
  },
}
</script>

<style scoped>
.container {
  height: calc(100vh - 61px - 40px);
  width: 100vw;
  transition: 0.5s linear;
  overflow: hidden;
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}

svg {
  width: 100%;
  height: calc(100vh - 40px - 37px - 22px);
}
</style>
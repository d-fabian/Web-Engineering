<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Implementieren Sie ein Balkendiagramm mit Inline SVG. Geben Sie die Daten für das Balkendiagramm im JSON-Format
      vor. Nehmen Sie als Beispieldaten die <a href="https://www.bundestag.de/parlament/plenum/sitzverteilung_20wp"
                                               target="_blank">Sitzverteilung im Deutschen Bundestag</a>. Animieren Sie
      die Grafik ähnlich wie
      im <a href="https://www.highcharts.com/demo/bar-basic" target="_blank">Highchart Bar Chart</a>.
    </template>
    <template v-slot:solution>
      <div class="container">
        <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap">
          <span>Sitze SPD: {{sitzeSPD}}<input id="spdPercentInput" type="range" min="0" max="300" :value="sitzeSPD" @input="updateDiagramm"></span>
          <span>Sitze CDU: {{sitzeCDU}}<input id="cduPercentInput" type="range" min="0" max="300" :value="sitzeCDU" @input="updateDiagramm"></span>
          <span>Sitze Bündnis 90: {{sitzeBgruen}}<input id="bGruenPercentInput" type="range" min="0" max="300" :value="sitzeBgruen" @input="updateDiagramm"></span>
          <span>Sitze FDP: {{sitzeFDP}}<input id="fdpPercentInput" type="range" min="0" max="300" :value="sitzeFDP" @input="updateDiagramm"></span>
          <span>Sitze AFD: {{sitzeADF}}<input id="afdPercentInput" type="range" min="0" max="300" :value="sitzeADF" @input="updateDiagramm"></span>
          <span>Sitze Die Linke: {{sitzeLinke}}<input id="linkePercentInput" type="range" min="0" max="300" :value="sitzeLinke" @input="updateDiagramm"></span>
          <span>Sitze Fraktionslos: {{sitzeFraklos}}<input id="fraklosPercentInput" type="range" min="0" max="300" :value="sitzeFraklos" @input="updateDiagramm"></span>
        </div>
        <h1>Sitzverteilung des 20. Deutschen Bundestages</h1>
        <h2>Bundestagswahl vom 26.09.2021</h2>
        <svg id="balkendiagramm" viewBox="0 0 135 100">
          <!-- Parteinamen Labels -->
          <text font-size="2.5px" x="0" y="12.5">SPD</text>
          <text font-size="2.5px" x="0" y="25">CDU/CSU</text>
          <text font-size="2.5px" x="0" y="37.5">Bündnis 90/Die Grünen</text>
          <text font-size="2.5px" x="0" y="50">FDP</text>
          <text font-size="2.5px" x="0" y="62.5">ADF</text>
          <text font-size="2.5px" x="0" y="75">Die Linke</text>
          <text font-size="2.5px" x="0" y="87.5">Fraktionslos</text>

          <!-- Vertikale Linien für Orientierung -->
          <line id="line50Sitze" stroke="black" stroke-width=".1" x1="54" x2="54" y1="0" y2="97"></line>
          <line id="line100Sitze" stroke="black" stroke-width=".1" x1="79" x2="79" y1="0" y2="97"></line>
          <line id="line150Sitze" stroke="black" stroke-width=".1" x1="103" x2="103" y1="0" y2="97"></line>
          <line id="line200Sitze" stroke="black" stroke-width=".1" x1="127" x2="127" y1="0" y2="97"></line>
          <line id="line250Sitze" stroke="black" stroke-width=".1" x1="500" x2="500" y1="0" y2="97"></line>
          <line id="line300Sitze" stroke="black" stroke-width=".1" x1="500" x2="500" y1="0" y2="97"></line>

          <!-- Beschriftung an vertikalen Linien -->
          <text id="text50Sitze" font-size="3px" x="52" y="100">50</text>
          <text id="text100Sitze" font-size="3px" x="76" y="100">100</text>
          <text id="text150Sitze" font-size="3px" x="100" y="100">150</text>
          <text id="text200Sitze" font-size="3px" x="124" y="100">200</text>
          <text id="text250Sitze" font-size="3px" x="500" y="100">250</text>
          <text id="text300Sitze" font-size="3px" x="500" y="100">300</text>

          <!-- Balken für Parteien -->
          <rect fill="red" height="10" id="spd" v-on:mouseover="showTooltip(sitzeSPD, 12.5)" v-on:mouseout="removeTooltip"
                width="100"
                x="30" y="6.5"></rect>
          <rect fill="black" height="10" id="cdu" v-on:mouseover="showTooltip(sitzeCDU, 25, true)"
                v-on:mouseout="removeTooltip"
                width="96"
                x="30" y="19"></rect>
          <rect fill="green" height="10" id="bgrün" v-on:mouseover="showTooltip(sitzeBgruen, 37.5)"
                v-on:mouseout="removeTooltip"
                width="57"
                x="30" y="31.5"></rect>
          <rect fill="yellow" height="10" id="fdp" v-on:mouseover="showTooltip(sitzeFDP, 50)" v-on:mouseout="removeTooltip"
                width="45"
                x="30" y="44"></rect>
          <rect fill="blue" height="10" id="afd" v-on:mouseover="showTooltip(sitzeADF, 62.5)" v-on:mouseout="removeTooltip"
                width="39"
                x="30" y="56.5"></rect>
          <rect fill="magenta" height="10" id="linke" v-on:mouseover="showTooltip(sitzeLinke, 75)" v-on:mouseout="removeTooltip"
                width="19"
                x="30" y="69"></rect>
          <rect fill="grey" height="10" id="fraktionslos" v-on:mouseover="showTooltip(sitzeFraklos, 87.5)"
                v-on:mouseout="removeTooltip"
                width="2"
                x="30" y="81.5"></rect>


          <!-- Vertikale Linie für Start -->
          <line stroke="black" stroke-width=".1" x1="30" x2="30" y1="0" y2="97"></line>
        </svg>
        <div></div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche06Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 6.1',
  components: {
    SolutionWithOverlay
  },
  data() {
    return {
      sitzeTooltip: undefined,
      balkendiagramm: undefined,
      rectSPD: undefined,
      rectCDU: undefined,
      rectB90: undefined,
      rectFDP: undefined,
      rectAFD: undefined,
      rectLINKE: undefined,
      rectFRK: undefined,
      sitzeSPD: 206,
      sitzeCDU: 197,
      sitzeBgruen: 118,
      sitzeFDP: 92,
      sitzeADF: 80,
      sitzeLinke: 39,
      sitzeFraklos: 4,
    }
  },
  mounted() {
    this.balkendiagramm = document.getElementById('balkendiagramm')
    this.rectSPD = document.getElementById('spd')
    this.rectCDU = document.getElementById('cdu')
    this.rectB90 = document.getElementById('bgrün')
    this.rectFDP = document.getElementById('fdp')
    this.rectAFD = document.getElementById('afd')
    this.rectLINKE = document.getElementById('linke')
    this.rectFRK = document.getElementById('fraktionslos')

    this.rectSPD.animate(
        [
          {width: 0},
          {scaleX: 100}
        ], {
          duration: 1000,
          easing: 'ease-out'
        }
    )
    this.rectCDU.animate(
        [
          {width: 0},
          {scaleX: 100}
        ], {
          duration: 1000,
          easing: 'ease-out'
        }
    )
    this.rectB90.animate(
        [
          {width: 0},
          {scaleX: 100}
        ], {
          duration: 1000,
          easing: 'ease-out'
        }
    )
    this.rectFDP.animate(
        [
          {width: 0},
          {scaleX: 100}
        ], {
          duration: 1000,
          easing: 'ease-out'
        }
    )
    this.rectAFD.animate(
        [
          {width: 0},
          {scaleX: 100}
        ], {
          duration: 1000,
          easing: 'ease-out'
        }
    )
    this.rectLINKE.animate(
        [
          {width: 0},
          {scaleX: 100}
        ], {
          duration: 1000,
          easing: 'ease-out'
        }
    )
    this.rectFRK.animate(
        [
          {width: 0},
          {scaleX: 100}
        ], {
          duration: 1000,
          easing: 'ease-out'
        }
    )
  },
  methods: {
    showTooltip(sitze, yPoint, isCDU) {
      this.sitzeTooltip = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      this.sitzeTooltip.setAttribute('font-size', '3px')
      this.sitzeTooltip.setAttribute('font-weight', 'bold')
      this.sitzeTooltip.setAttribute('x', '30')
      this.sitzeTooltip.setAttribute('y', yPoint)
      this.sitzeTooltip.textContent = sitze
      if (isCDU) {
        this.sitzeTooltip.setAttribute('fill', 'white')
      }
      this.balkendiagramm.appendChild(this.sitzeTooltip)
    },

    removeTooltip() {
      this.balkendiagramm.removeChild(this.balkendiagramm.lastChild)
    },

    updateDiagramm() {
      this.sitzeSPD = document.getElementById('spdPercentInput').value
      this.sitzeCDU = document.getElementById('cduPercentInput').value
      this.sitzeBgruen = document.getElementById('bGruenPercentInput').value
      this.sitzeFDP = document.getElementById('fdpPercentInput').value
      this.sitzeADF = document.getElementById('afdPercentInput').value
      this.sitzeLinke = document.getElementById('linkePercentInput').value
      this.sitzeFraklos = document.getElementById('fraklosPercentInput').value
      const maxSitze = Math.max(this.sitzeSPD, this.sitzeCDU, this.sitzeBgruen, this.sitzeFDP, this.sitzeADF, this.sitzeLinke, this.sitzeFraklos)

      // update SPD
      let percent = (this.sitzeSPD/maxSitze) * 100
      this.rectSPD.setAttribute('width', percent.toString())
      // update CDU
      percent = (this.sitzeCDU/maxSitze) * 100
      this.rectCDU.setAttribute('width', percent.toString())
      // update Bündnis90
      percent = (this.sitzeBgruen/maxSitze) * 100
      this.rectB90.setAttribute('width', percent.toString())
      // update FDP
      percent = (this.sitzeFDP/maxSitze) * 100
      this.rectFDP.setAttribute('width', percent.toString())
      // update ADF
      percent = (this.sitzeADF/maxSitze) * 100
      this.rectAFD.setAttribute('width', percent.toString())
      // update Linke
      percent = (this.sitzeLinke/maxSitze) * 100
      this.rectLINKE.setAttribute('width', percent.toString())
      // update Fraktionslos
      percent = (this.sitzeFraklos/maxSitze) * 100
      this.rectFRK.setAttribute('width', percent.toString())

      const line50Sitze = document.getElementById('line50Sitze')
      const line100Sitze = document.getElementById('line100Sitze')
      const line150Sitze = document.getElementById('line150Sitze')
      const line200Sitze = document.getElementById('line200Sitze')
      const line250Sitze = document.getElementById('line250Sitze')
      const line300Sitze = document.getElementById('line300Sitze')
      const xPoint50Sitze = ((100/maxSitze) * 50) + 30
      const xPoint100Sitze = ((100/maxSitze) * 100) + 30
      const xPoint150Sitze = ((100/maxSitze) * 150) + 30
      const xPoint200Sitze = ((100/maxSitze) * 200) + 30
      const xPoint250Sitze = ((100/maxSitze) * 250) + 30
      const xPoint300Sitze = ((100/maxSitze) * 300) + 30
      line50Sitze.setAttribute('x1', xPoint50Sitze)
      line50Sitze.setAttribute('x2', xPoint50Sitze)
      line100Sitze.setAttribute('x1', xPoint100Sitze)
      line100Sitze.setAttribute('x2', xPoint100Sitze)
      line150Sitze.setAttribute('x1', xPoint150Sitze)
      line150Sitze.setAttribute('x2', xPoint150Sitze)
      line200Sitze.setAttribute('x1', xPoint200Sitze)
      line200Sitze.setAttribute('x2', xPoint200Sitze)
      line250Sitze.setAttribute('x1', xPoint250Sitze)
      line250Sitze.setAttribute('x2', xPoint250Sitze)
      line300Sitze.setAttribute('x1', xPoint300Sitze)
      line300Sitze.setAttribute('x2', xPoint300Sitze)

      const text50Sitze = document.getElementById('text50Sitze')
      const text100Sitze = document.getElementById('text100Sitze')
      const text150Sitze = document.getElementById('text150Sitze')
      const text200Sitze = document.getElementById('text200Sitze')
      const text250Sitze = document.getElementById('text250Sitze')
      const text300Sitze = document.getElementById('text300Sitze')
      text50Sitze.setAttribute('x', xPoint50Sitze - 2)
      text100Sitze.setAttribute('x', xPoint100Sitze - 3)
      text150Sitze.setAttribute('x', xPoint150Sitze - 3)
      text200Sitze.setAttribute('x', xPoint200Sitze - 3)
      text250Sitze.setAttribute('x', xPoint250Sitze - 3)
      text300Sitze.setAttribute('x', xPoint300Sitze - 3)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px 20px 20px;
  gap: 20px;
  height: calc(100vh - 61px - 40px - 20px);
  width: calc(100vw - 40px);
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px - 20px);
  width: calc(100vw - 378px - 40px);
}

span {
  width: 380px;
  margin: 10px;
}
input[type="range"] {
  width: 200px;
  margin-left: 10px;
}
</style>
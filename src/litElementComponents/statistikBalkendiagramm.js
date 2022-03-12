import {css, html, LitElement} from 'lit'

export class StatistikBalkendiagramm extends LitElement {
    static styles = css`
    * {
        margin: 0;
        padding: 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 20px;
        gap: 10px;
        height: calc(100vh - 40px - 61px);
    }
    span {
        margin: 10px;
    }
    input[type="range"] {
        width: 200px;
        margin: 0 10px;
        min: '0';
        max: '300';
    }`

    constructor() {
        super();
        this.sitzeSPD = 206
        this.sitzeCDU = 197
        this.sitzeBgruen = 118
        this.sitzeFDP = 92
        this.sitzeADF = 80
        this.sitzeLinke = 39
        this.sitzeFraklos = 4

        this.rectSPD = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        this.rectSPD.id = 'spd'
        this.rectSPD.setAttribute('fill', 'red')
        this.rectSPD.setAttribute('height', '10')
        this.rectSPD.setAttribute('width', '206')
        this.rectSPD.setAttribute('x', '30')
        this.rectSPD.setAttribute('y', '6.5')
        this.rectSPD.onmouseover = () => this._showTooltip(this.spdInput, 12.5)
        this.rectSPD.onmouseout = this._removeTooltip
        this.rectSPD.animate(
            [
                {width: 0},
                {scaleX: 100}
            ], {
                duration: 1000,
                easing: 'linear'
            }
        )

        this.rectCDU = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        this.rectCDU.id = 'cdu'
        this.rectCDU.setAttribute('fill', 'black')
        this.rectCDU.setAttribute('height', '10')
        this.rectCDU.setAttribute('width', '96')
        this.rectCDU.setAttribute('x', '30')
        this.rectCDU.setAttribute('y', '19')
        this.rectCDU.onmouseover = () => this._showTooltip(this.cduInput, 25, true)
        this.rectCDU.onmouseout = this._removeTooltip
        this.rectCDU.animate(
            [
                {width: 0},
                {scaleX: 100}
            ], {
                duration: 1000,
                easing: 'linear'
            }
        )

        this.rectBgruen = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        this.rectBgruen.id = 'bgrün'
        this.rectBgruen.setAttribute('fill', 'green')
        this.rectBgruen.setAttribute('height', '10')
        this.rectBgruen.setAttribute('width', '57')
        this.rectBgruen.setAttribute('x', '30')
        this.rectBgruen.setAttribute('y', '31.5')
        this.rectBgruen.onmouseover = () => this._showTooltip(this.bGruenInput, 37.5)
        this.rectBgruen.onmouseout = this._removeTooltip
        this.rectBgruen.animate(
            [
                {width: 0},
                {scaleX: 100}
            ], {
                duration: 1000,
                easing: 'linear'
            }
        )

        this.rectFDP = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        this.rectFDP.id = 'fdp'
        this.rectFDP.setAttribute('fill', 'yellow')
        this.rectFDP.setAttribute('height', '10')
        this.rectFDP.setAttribute('width', '45')
        this.rectFDP.setAttribute('x', '30')
        this.rectFDP.setAttribute('y', '44')
        this.rectFDP.onmouseover = () => this._showTooltip(this.fdpInput, 50)
        this.rectFDP.onmouseout = this._removeTooltip
        this.rectFDP.animate(
            [
                {width: 0},
                {scaleX: 100}
            ], {
                duration: 1000,
                easing: 'linear'
            }
        )

        this.rectAFD = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        this.rectAFD.id = 'afd'
        this.rectAFD.setAttribute('fill', 'blue')
        this.rectAFD.setAttribute('height', '10')
        this.rectAFD.setAttribute('width', '39')
        this.rectAFD.setAttribute('x', '30')
        this.rectAFD.setAttribute('y', '56.5')
        this.rectAFD.onmouseover = () => this._showTooltip(this.afdInput, 62.5)
        this.rectAFD.onmouseout = this._removeTooltip
        this.rectAFD.animate(
            [
                {width: 0},
                {scaleX: 100}
            ], {
                duration: 1000,
                easing: 'linear'
            }
        )

        this.rectLinke = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        this.rectLinke.id = 'linke'
        this.rectLinke.setAttribute('fill', 'magenta')
        this.rectLinke.setAttribute('height', '10')
        this.rectLinke.setAttribute('width', '19')
        this.rectLinke.setAttribute('x', '30')
        this.rectLinke.setAttribute('y', '69')
        this.rectLinke.onmouseover = () => this._showTooltip(this.linkeInput, 75)
        this.rectLinke.onmouseout = this._removeTooltip
        this.rectLinke.animate(
            [
                {width: 0},
                {scaleX: 100}
            ], {
                duration: 1000,
                easing: 'linear'
            }
        )

        this.rectFraklos = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        this.rectFraklos.id = 'fraktionslos'
        this.rectFraklos.setAttribute('fill', 'grey')
        this.rectFraklos.setAttribute('height', '10')
        this.rectFraklos.setAttribute('width', '2')
        this.rectFraklos.setAttribute('x', '30')
        this.rectFraklos.setAttribute('y', '81.5')
        this.rectFraklos.onmouseover = () => this._showTooltip(this.fraklosInput, 87.5)
        this.rectFraklos.onmouseout = this._removeTooltip
        this.rectFraklos.animate(
            [
                {width: 0},
                {scaleX: 100}
            ], {
                duration: 1000,
                easing: 'linear'
            }
        )

        this.spdInput = document.createElement('input')
        this.spdInput.id = 'spdPercentInput'
        this.spdInput.type = 'range'
        this.spdInput.min = '0'
        this.spdInput.max = '300'
        this.spdInput.value = this.sitzeSPD
        this.spdInput.oninput = () => this._updateDiagramm()

        this.cduInput = document.createElement('input')
        this.cduInput.id = 'cduPercentInput'
        this.cduInput.type = 'range'
        this.cduInput.min = '0'
        this.cduInput.max = '300'
        this.cduInput.value = this.sitzeCDU
        this.cduInput.oninput = () => this._updateDiagramm()

        this.bGruenInput = document.createElement('input')
        this.bGruenInput.id = 'bGruenPercentInput'
        this.bGruenInput.type = 'range'
        this.bGruenInput.min = '0'
        this.bGruenInput.max = '300'
        this.bGruenInput.value = this.sitzeBgruen
        this.bGruenInput.oninput = () => this._updateDiagramm()

        this.fdpInput = document.createElement('input')
        this.fdpInput.id = 'fdpPercentInput'
        this.fdpInput.type = 'range'
        this.fdpInput.min = '0'
        this.fdpInput.max = '300'
        this.fdpInput.value = this.sitzeFDP
        this.fdpInput.oninput = () => this._updateDiagramm()

        this.afdInput = document.createElement('input')
        this.afdInput.id = 'afdPercentInput'
        this.afdInput.type = 'range'
        this.afdInput.min = '0'
        this.afdInput.max = '300'
        this.afdInput.value = this.sitzeADF
        this.afdInput.oninput = () => this._updateDiagramm()

        this.linkeInput = document.createElement('input')
        this.linkeInput.id = 'linkePercentInput'
        this.linkeInput.type = 'range'
        this.linkeInput.min = '0'
        this.linkeInput.max = '300'
        this.linkeInput.value = this.sitzeLinke
        this.linkeInput.oninput = () => this._updateDiagramm()

        this.fraklosInput = document.createElement('input')
        this.fraklosInput.id = 'fraklosPercentInput'
        this.fraklosInput.type = 'range'
        this.fraklosInput.min = '0'
        this.fraklosInput.max = '300'
        this.fraklosInput.value = this.sitzeFraklos
        this.fraklosInput.oninput = () => this._updateDiagramm()
    }

    static get properties() {
        return {
            rectSPD: {type: String},
            rectCDU: {type: String},
            rectBgruen: {type: String},
            rectFDP: {type: String},
            rectAFD: {type: String},
            rectLinke: {type: String},
            rectFraklos: {type: String},
            spdInput: {type: Number},
            cduInput: {type: Number},
            bGruenInput: {type: Number},
            fdpInput: {type: Number},
            afdInput: {type: Number},
            linkeInput: {type: Number},
            fraklosInput: {type: Number},
            sitzeSPD: {type: Number},
            sitzeCDU: {type: Number},
            sitzeBgruen: {type: Number},
            sitzeFDP: {type: Number},
            sitzeADF: {type: Number},
            sitzeLinke: {type: Number},
            sitzeFraklos: {type: Number},
        }
    }

    render() {
        return html`
            <div class="container">
                <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap">
                    <span>Sitze SPD: ${this.sitzeSPD}${this.spdInput}</span>
                    <span>Sitze CDU: ${this.sitzeCDU}${this.cduInput}</span>
                    <span>Sitze Bündnis 90: ${this.sitzeBgruen}${this.bGruenInput}</span>
                    <span>Sitze FDP: ${this.sitzeFDP}${this.fdpInput}</span>
                    <span>Sitze AFD: ${this.sitzeADF}${this.afdInput}</span>
                    <span>Sitze Die Linke: ${this.sitzeLinke}${this.linkeInput}</span>
                    <span>Sitze Fraktionslos: ${this.sitzeFraklos}${this.fraklosInput}</span>
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
                    ${this.rectSPD}
                    ${this.rectCDU}
                    ${this.rectBgruen}
                    ${this.rectFDP}
                    ${this.rectAFD}
                    ${this.rectLinke}
                    ${this.rectFraklos}

                    <!-- Vertikale Linie für Start -->
                    <line stroke="black" stroke-width=".1" x1="30" x2="30" y1="0" y2="97"></line>
                </svg>
                <div></div>
            </div>`
    }

    _showTooltip(sitze, yPoint, isCDU) {
        const sitzeTooltip = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        sitzeTooltip.setAttribute('font-size', '3px')
        sitzeTooltip.setAttribute('font-weight', 'bold')
        sitzeTooltip.setAttribute('x', '30')
        sitzeTooltip.setAttribute('y', yPoint)
        sitzeTooltip.textContent = sitze.value
        if (isCDU) {
            sitzeTooltip.setAttribute('fill', 'white')
        }
        this.shadowRoot.querySelector('#balkendiagramm').appendChild(sitzeTooltip)
    }

    _removeTooltip() {
        // get shadowRoot in event listener
        // https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
        const shadowRoot = document.querySelector('statistik-balkendiagramm').shadowRoot

        shadowRoot.querySelector('#balkendiagramm').removeChild(shadowRoot.querySelector('#balkendiagramm').lastChild)
    }

    _updateDiagramm() {
        const sitzeSPD = Number.parseInt(this.spdInput.value) || 0
        const sitzeCDU = Number.parseInt(this.cduInput.value) || 0
        const sitzeBGruen = Number.parseInt(this.bGruenInput.value) || 0
        const sitzeFDP = Number.parseInt(this.fdpInput.value) || 0
        const sitzeADF = Number.parseInt(this.afdInput.value) || 0
        const sitzeLinke = Number.parseInt(this.linkeInput.value) || 0
        const sitzeFraktionslos = Number.parseInt(this.fraklosInput.value) || 0
        const maxSitze = Math.max(sitzeSPD, sitzeCDU, sitzeBGruen, sitzeFDP, sitzeADF, sitzeLinke, sitzeFraktionslos)

        // update SPD
        this.sitzeSPD = sitzeSPD
        let percent = (sitzeSPD/maxSitze) * 100
        this.rectSPD.setAttribute('width', percent.toString())
        // update CDU
        this.sitzeCDU = sitzeCDU
        percent = (sitzeCDU/maxSitze) * 100
        this.rectCDU.setAttribute('width', percent.toString())
        // update Bündnis90
        this.sitzeBgruen = sitzeBGruen
        percent = (sitzeBGruen/maxSitze) * 100
        this.rectBgruen.setAttribute('width', percent.toString())
        // update FDP
        this.sitzeFDP = sitzeFDP
        percent = (sitzeFDP/maxSitze) * 100
        this.rectFDP.setAttribute('width', percent.toString())
        // update ADF
        this.sitzeADF = sitzeADF
        percent = (sitzeADF/maxSitze) * 100
        this.rectAFD.setAttribute('width', percent.toString())
        // update Linke
        this.sitzeLinke = sitzeLinke
        percent = (sitzeLinke/maxSitze) * 100
        this.rectLinke.setAttribute('width', percent.toString())
        // update Fraktionslos
        this.sitzeFraklos = sitzeFraktionslos
        percent = (sitzeFraktionslos/maxSitze) * 100
        this.rectFraklos.setAttribute('width', percent.toString())

        // get shadowRoot in event listener
        // https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
        const shadowRoot = document.querySelector('statistik-balkendiagramm').shadowRoot
        const line50Sitze = shadowRoot.querySelector('#line50Sitze')
        const line100Sitze = shadowRoot.querySelector('#line100Sitze')
        const line150Sitze = shadowRoot.querySelector('#line150Sitze')
        const line200Sitze = shadowRoot.querySelector('#line200Sitze')
        const line250Sitze = shadowRoot.querySelector('#line250Sitze')
        const line300Sitze = shadowRoot.querySelector('#line300Sitze')
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

        const text50Sitze = shadowRoot.querySelector('#text50Sitze')
        const text100Sitze = shadowRoot.querySelector('#text100Sitze')
        const text150Sitze = shadowRoot.querySelector('#text150Sitze')
        const text200Sitze = shadowRoot.querySelector('#text200Sitze')
        const text250Sitze = shadowRoot.querySelector('#text250Sitze')
        const text300Sitze = shadowRoot.querySelector('#text300Sitze')
        text50Sitze.setAttribute('x', xPoint50Sitze - 2)
        text100Sitze.setAttribute('x', xPoint100Sitze - 3)
        text150Sitze.setAttribute('x', xPoint150Sitze - 3)
        text200Sitze.setAttribute('x', xPoint200Sitze - 3)
        text250Sitze.setAttribute('x', xPoint250Sitze - 3)
        text300Sitze.setAttribute('x', xPoint300Sitze - 3)
    }
}

customElements.define('statistik-balkendiagramm', StatistikBalkendiagramm)

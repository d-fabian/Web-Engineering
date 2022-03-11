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
    }`

    constructor() {
        super();
        this.spdSitze = 206
        this.cduSitze = 197
        this.bGruenSitze = 118
        this.fdpSitze = 92
        this.afdSitze = 80
        this.linkeSitze = 39
        this.fraklosSitze = 4

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
                easing: 'ease-out'
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
                easing: 'ease-out'
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
                easing: 'ease-out'
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
                easing: 'ease-out'
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
                easing: 'ease-out'
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
                easing: 'ease-out'
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
                easing: 'ease-out'
            }
        )

        this.spdInput = document.createElement('input')
        this.spdInput.id = 'spdPercentInput'
        this.spdInput.type = 'number'
        this.spdInput.value = this.spdSitze
        this.spdInput.style.width = '40px'
        this.spdInput.style.marginRight = '20px'
        this.spdInput.style.marginLeft = '10px'
        this.spdInput.oninput = () => this._test(this.rectSPD, this.spdInput.value)

        this.cduInput = document.createElement('input')
        this.cduInput.id = 'cduPercentInput'
        this.cduInput.type = 'number'
        this.cduInput.value = this.cduSitze
        this.cduInput.style.width = '40px'
        this.cduInput.style.marginRight = '20px'
        this.cduInput.style.marginLeft = '10px'
        this.cduInput.oninput = () => this._test(this.rectCDU, this.cduInput.value)

        this.bGruenInput = document.createElement('input')
        this.bGruenInput.id = 'bGruenPercentInput'
        this.bGruenInput.type = 'number'
        this.bGruenInput.value = this.bGruenSitze
        this.bGruenInput.style.width = '40px'
        this.bGruenInput.style.marginRight = '20px'
        this.bGruenInput.style.marginLeft = '10px'
        this.bGruenInput.oninput = () => this._test(this.rectBgruen, this.bGruenInput.value)

        this.fdpInput = document.createElement('input')
        this.fdpInput.id = 'fdpPercentInput'
        this.fdpInput.type = 'number'
        this.fdpInput.value = this.fdpSitze
        this.fdpInput.style.width = '40px'
        this.fdpInput.style.marginRight = '20px'
        this.fdpInput.style.marginLeft = '10px'
        this.fdpInput.oninput = () => this._test(this.rectFDP, this.fdpInput.value)

        this.afdInput = document.createElement('input')
        this.afdInput.id = 'afdPercentInput'
        this.afdInput.type = 'number'
        this.afdInput.value = this.afdSitze
        this.afdInput.style.width = '40px'
        this.afdInput.style.marginRight = '20px'
        this.afdInput.style.marginLeft = '10px'
        this.afdInput.oninput = () => this._test(this.rectAFD, this.afdInput.value)

        this.linkeInput = document.createElement('input')
        this.linkeInput.id = 'linkePercentInput'
        this.linkeInput.type = 'number'
        this.linkeInput.value = this.linkeSitze
        this.linkeInput.style.width = '40px'
        this.linkeInput.style.marginRight = '20px'
        this.linkeInput.style.marginLeft = '10px'
        this.linkeInput.oninput = () => this._test(this.rectLinke, this.linkeInput.value)

        this.fraklosInput = document.createElement('input')
        this.fraklosInput.id = 'fraklosPercentInput'
        this.fraklosInput.type = 'number'
        this.fraklosInput.value = this.fraklosSitze
        this.fraklosInput.style.width = '40px'
        this.fraklosInput.style.marginRight = '20px'
        this.fraklosInput.style.marginLeft = '10px'
        this.fraklosInput.oninput = () => this._test(this.rectFraklos, this.fraklosInput.value)
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
            spdSitze: {type: Number},
            cduInput: {type: Number},
            cduSitze: {type: Number},
            bGruenInput: {type: Number},
            bGruenSitze: {type: Number},
            fdpInput: {type: Number},
            fdpSitze: {type: Number},
            afdInput: {type: Number},
            afdSitze: {type: Number},
            linkeInput: {type: Number},
            linkeSitze: {type: Number},
            fraklosInput: {type: Number},
            fraklosSitze: {type: Number},
        }
    }

    render() {
        return html`
            <div class="container">
                <div style="display: flex; justify-content: center; align-items: center">
                    Sitze SPD:${this.spdInput}
                    Sitze CDU:${this.cduInput}
                    Sitze Bündnis 90:${this.bGruenInput}
                    Sitze FDP:${this.fdpInput}
                    Sitze AFD:${this.afdInput}
                    Sitze Die Linke:${this.linkeInput}
                    Sitze Fraktionslos:${this.fraklosInput}
                </div>
                <h1>Sitzverteilung des 20. Deutschen Bundestages</h1>
                <h2>Bundestagswahl vom 26.09.2021</h2>
                <svg id="balkendiagramm" viewBox="0 0 130 100">
                    <!-- Parteinamen Labels -->
                    <text font-size="2.5px" x="0" y="12.5">SPD</text>
                    <text font-size="2.5px" x="0" y="25">CDU/CSU</text>
                    <text font-size="2.5px" x="0" y="37.5">Bündnis 90/Die Grünen</text>
                    <text font-size="2.5px" x="0" y="50">FDP</text>
                    <text font-size="2.5px" x="0" y="62.5">ADF</text>
                    <text font-size="2.5px" x="0" y="75">Die Linke</text>
                    <text font-size="2.5px" x="0" y="87.5">Fraktionslos</text>

                    <!-- Vertikale Linien für Orientierung -->
                    <line stroke="black" stroke-width=".1" x1="54" x2="54" y1="0" y2="97"></line>
                    <line stroke="black" stroke-width=".1" x1="79" x2="79" y1="0" y2="97"></line>
                    <line stroke="black" stroke-width=".1" x1="103" x2="103" y1="0" y2="97"></line>
                    <line stroke="black" stroke-width=".1" x1="127" x2="127" y1="0" y2="97"></line>

                    <!-- Beschriftung an vertikalen Linien -->
                    <text font-size="3px" x="52" y="100">50</text>
                    <text font-size="3px" x="76" y="100">100</text>
                    <text font-size="3px" x="100" y="100">150</text>
                    <text font-size="3px" x="124" y="100">200</text>

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

    _test(rect, sitze) {
        const maxSitze = Math.max(this.spdSitze, this.cduSitze, this.bGruenSitze, this.fdpSitze, this.afdSitze, this.linkeSitze, this.fraklosSitze)
        const percent = (sitze/maxSitze) * 100
        rect.setAttribute('width', percent)
    }
}

customElements.define('statistik-balkendiagramm', StatistikBalkendiagramm)

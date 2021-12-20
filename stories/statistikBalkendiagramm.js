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
        margin: 20px;
        gap: 20px;
        height: calc(100vh - 40px);
    }`

    constructor() {
        super();
        this.rectSPD = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        this.rectSPD.id = 'spd'
        this.rectSPD.setAttribute('fill', 'red')
        this.rectSPD.setAttribute('height', '10')
        this.rectSPD.setAttribute('width', '100')
        this.rectSPD.setAttribute('x', '30')
        this.rectSPD.setAttribute('y', '6.5')
        this.rectSPD.onmouseover = () => this._showTooltip(206, 12.5)
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
        this.rectCDU.onmouseover = () => this._showTooltip(197, 25, true)
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
        this.rectBgruen.onmouseover = () => this._showTooltip(118, 37.5)
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
        this.rectFDP.onmouseover = () => this._showTooltip(92, 50)
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
        this.rectAFD.setAttribute('width', '40')
        this.rectAFD.setAttribute('x', '30')
        this.rectAFD.setAttribute('y', '56.5')
        this.rectAFD.onmouseover = () => this._showTooltip(82, 62.5)
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
        this.rectLinke.onmouseover = () => this._showTooltip(39, 75)
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
        this.rectFraklos.setAttribute('width', '1')
        this.rectFraklos.setAttribute('x', '30')
        this.rectFraklos.setAttribute('y', '81.5')
        this.rectFraklos.onmouseover = () => this._showTooltip(2, 87.5)
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
    }

    static get properties() {
        return {
            rectSPD: {type: String},
            rectCDU: {type: String},
            rectBgruen: {type: String},
            rectFDP: {type: String},
            rectAFD: {type: String},
            rectLinke: {type: String},
            rectFraklos: {type: String}
        }
    }

    render() {
        return html`
            <div class="container">
                <h1>Sitzverteilung des 20. Deutschen Bundestages</h1>
                <h2>Bundestagswahl vom 26.09.2021</h2>
                <svg id="balkendiagramm" viewBox="0 0 130 100">
                    <!-- Parteinamen Labels -->
                    <text font-size="3px" x="0" y="12.5">SPD</text>
                    <text font-size="3px" x="0" y="25">CDU/CSU</text>
                    <text font-size="3px" x="0" y="37.5">Bündnis 90/Die Grünen</text>
                    <text font-size="3px" x="0" y="50">FDP</text>
                    <text font-size="3px" x="0" y="62.5">ADF</text>
                    <text font-size="3px" x="0" y="75">Die Linke</text>
                    <text font-size="3px" x="0" y="87.5">fraktionslos</text>

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
        sitzeTooltip.textContent = sitze
        if (isCDU) {
            sitzeTooltip.setAttribute('fill', 'white')
        }
        this.shadowRoot.querySelector('#balkendiagramm').appendChild(sitzeTooltip)
    }

    _removeTooltip() {
        // get shadowRoot in event listener
        // https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
        const shadowRoot = document.querySelector('statistik-balkendiagramm-module').shadowRoot

        shadowRoot.querySelector('#balkendiagramm').removeChild(shadowRoot.querySelector('#balkendiagramm').lastChild)
    }
}

customElements.define('statistik-balkendiagramm-module', StatistikBalkendiagramm)

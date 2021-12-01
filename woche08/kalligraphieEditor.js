import {css, html, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js';

let isMouseDown = false, line, points, counterPoints = 1, counterLines = 1, nrLines, nrPointInLine, redraw

export class KalligraphieEditor extends LitElement {
    static styles = css`
    * {
        margin: 0;
        padding: 0;
    }
    .container {
        margin: 20px;
        display: flex;
        flex-direction: column;
    }
    h1 {
        height: 40px;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        height: 30px;
    }
    button {
        padding: 5px 10px;
    }
    .drawArea {
        width: 100%;
        height: calc(100vh - 40px - 40px - 20px - 30px - 4px); /* minus margin(top and bottom) minus h1 minus margin between h1 and buttons minus buttons minus border */
        border: 2px solid black;
    }`

    constructor() {
        super();
        this.drawArea = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.drawArea.classList.add('drawArea')
        this.drawArea.id = 'drawArea'

        this.drawArea.addEventListener('mousedown', () => {
            isMouseDown = true
            line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
            line.style = 'fill:none;stroke:black;stroke-width:3'
        })
        this.drawArea.addEventListener('mouseup', () => {
            isMouseDown = false
            points = null
        })
        this.drawArea.addEventListener('mousemove', this._draw)

        this.resetBtn = document.createElement('button')
        this.resetBtn.id = 'reset'
        this.resetBtn.innerText = 'Reset'
        this.resetBtn.addEventListener('click', () => {
            this.drawArea.innerHTML = ''
            counterPoints = 1
            counterLines = 1
        })

        this.replayBtn = document.createElement('button')
        this.replayBtn.id = 'replay'
        this.replayBtn.innerText = 'Replay'
        this.replayBtn.addEventListener('click', this._replayDrawing)

        this.stoppBtn = document.createElement('button')
        this.stoppBtn.id = 'stopp'
        this.stoppBtn.innerText = 'Stopp'
        this.stoppBtn.addEventListener('click', () => clearInterval(redraw))
    }

    static get properties() {
        return {
            resetBtn: {type: String},
            replayBtn: {type: String},
            stoppBtn: {type: String},
            drawArea: {type: String},
        }
    }

    render() {
        return html`
            <div class="container">
                <h1>SVG-Kalligraphie</h1>
                <div class="buttons">
                    ${this.resetBtn}
                    ${this.replayBtn}
                    ${this.stoppBtn}
                </div>
                ${this.drawArea}
            </div>`
    }

    _draw(event) {
        if (isMouseDown) {
            // get shadowRoot in event listener
            // https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
            const shadowRoot = document.querySelector('kalligraphie-editor-module').shadowRoot

            const svgPoint = _getCoordinatesForSVG(event.x, event.y)

            // create new line
            if (points) {
                line.setAttribute('points', `${points},${svgPoint.x},${svgPoint.y}`)
            } else {
                line.setAttribute('points', `${svgPoint.x},${svgPoint.y}`)
            }
            points = line.getAttribute('points')
            shadowRoot.querySelector('#drawArea').appendChild(line)
        }
    }

    _replayDrawing() {
        // get shadowRoot in event listener
        // https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
        const shadowRoot = document.querySelector('kalligraphie-editor-module').shadowRoot

        let id = 1
        const newLines = []
        const allPoints = []
        nrLines = 0
        nrPointInLine = []
        const allLines = shadowRoot.querySelector('#drawArea').children

        for (let line of allLines) {
            const points = line.getAttribute('points')
            allPoints.push(points)
            nrLines++
            nrPointInLine.push(points.length)

            const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
            newLine.id = 'l' + id
            newLine.style = 'fill:none;stroke:black;stroke-width:3'
            newLines.push(newLine)
            id++
        }
        shadowRoot.querySelector('#drawArea').innerHTML = ''
        newLines.forEach(line => shadowRoot.querySelector('#drawArea').appendChild(line))
        redraw = setInterval(() => drawAgain(allPoints), 10)
    }
}

customElements.define('kalligraphie-editor-module', KalligraphieEditor)

function _getCoordinatesForSVG(domX, domY) {
    // get shadowRoot in event listener
    // https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
    const shadowRoot = document.querySelector('kalligraphie-editor-module').shadowRoot

    let svgPoint = shadowRoot.querySelector('#drawArea').createSVGPoint()
    svgPoint.x = domX
    svgPoint.y = domY
    return svgPoint.matrixTransform(shadowRoot.querySelector('#drawArea').getScreenCTM().inverse())
}

function drawAgain(allPoints) {
    // get shadowRoot in event listener
    // https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
    const shadowRoot = document.querySelector('kalligraphie-editor-module').shadowRoot

    let points = allPoints[counterLines - 1].split(',')
    const newPoint = points[counterPoints * 2 - 2] + ',' + points[counterPoints * 2 - 1]
    const line = shadowRoot.querySelector('#drawArea').getElementById(`l${counterLines}`)
    const oldPoints = line.getAttribute('points')
    if (oldPoints) {
        line.setAttribute('points', oldPoints + ',' + newPoint)
    } else {
        line.setAttribute('points', newPoint)
    }
    shadowRoot.querySelector('#drawArea').appendChild(line)
    counterPoints++
    if (counterPoints > points.length / 2) {
        counterLines++
        counterPoints = 1
    }
    if (counterLines > nrLines) {
        clearInterval(redraw)
    }
}
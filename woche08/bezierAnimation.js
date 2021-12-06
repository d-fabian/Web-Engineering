import {css, LitElement, svg} from 'https://mkaul.github.io/lit/lib/lit.js';

let isMouseDown = false

export class BezierAnimation extends LitElement {
    static styles = css`
    * {
        margin: 0;
        padding: 0;
    }
    .container {
        margin: 20px;
    }
    svg {
        width: 100%;
        height: calc(100vh - 40px - 37px - 22px);
    }`

    constructor() {
        super();
        this.c1x = 400
        this.c1y = 200
        this.c2x = 800
        this.c2y = 1000
        this.c3x = 900
        this.c3y = 300

        this.l1a = 400
        this.l1b = 200
        this.l2a = 800
        this.l2b = 1000
        this.l3a = 900
        this.l3b = 300

    }

    static get properties() {
        return {
            c1x: {type: Number},
            c1y: {type: Number},
            c2x: {type: Number},
            c2y: {type: Number},
            c3x: {type: Number},
            c3y: {type: Number},
            l1a: {type: Number},
            l1b: {type: Number},
            l2a: {type: Number},
            l2b: {type: Number},
            l3a: {type: Number},
            l3b: {type: Number},
        }
    }

    updated() {
        super.updated()
        this.shadowRoot.querySelector('#svgArea').addEventListener('mousedown', () => isMouseDown = true)
        this.shadowRoot.querySelector('#svgArea').addEventListener('mouseup', () => isMouseDown = false)

        this.shadowRoot.querySelector('#circle1').addEventListener('mousemove', event => {
            this._moveCircleAndLine(event)
        })
        this.shadowRoot.querySelector('#circle2').addEventListener('mousemove', event => {
            this._moveCircleAndLine(event)
        })
        this.shadowRoot.querySelector('#circle3').addEventListener('mousemove', event => {
            this._moveCircleAndLine(event)
        })
    }

    render() {
        return svg`
            <div class="container">
                <h1>SVG Bezier-Animation</h1>
                <h4>Punkte lassen sich per Drag&Drop bewegen</h4>
                <svg id="svgArea">
                    <path d="M${this.l1a} ${this.l1b} Q${this.l3a} ${this.l3b} ,${this.l2a} ${this.l2b}" fill="none" id="bezLine" stroke="black"></path>
                    <circle cx="${this.c1x}" cy="${this.c1y}" fill="red" id="circle1" r="20"></circle>
                    <circle cx="${this.c2x}" cy="${this.c2y}" fill="blue" id="circle2" r="20"></circle>
                    <circle cx="${this.c3x}" cy="${this.c3y}" fill="black" id="circle3" r="20"></circle>
                </svg>
            </div>`
    }

    _moveCircleAndLine(event) {
        if (isMouseDown) {
            const svgPoint = getCoordinatesForSVG(event.x, event.y, this.shadowRoot.querySelector('#svgArea'))
            if (event.currentTarget.id === 'circle1') {
                this.c1x = svgPoint.x
                this.c1y = svgPoint.y
                this.l1a = svgPoint.x
                this.l1b = svgPoint.y
            } else if (event.currentTarget.id === 'circle2') {
                this.c2x = svgPoint.x
                this.c2y = svgPoint.y
                this.l2a = svgPoint.x
                this.l2b = svgPoint.y
            } else if (event.currentTarget.id === 'circle3') {
                this.c3x = svgPoint.x
                this.c3y = svgPoint.y
                this.l3a = svgPoint.x
                this.l3b = svgPoint.y
            }
        }
    }
}

customElements.define('bezier-animation-module', BezierAnimation)

function getCoordinatesForSVG(domX, domY, element) {
    let svgPoint = element.createSVGPoint();
    svgPoint.x = domX
    svgPoint.y = domY
    return svgPoint.matrixTransform(element.getScreenCTM().inverse())
}
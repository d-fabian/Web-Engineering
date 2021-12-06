import {css, html, LitElement} from 'lit'

let fieldResultTemp

export class Tabellenkalkulation extends LitElement {
    static styles = css`
    * {
        padding: 0;
        margin: 0;
    }
    .container {
        margin: 20px 10px;
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
    }`

    constructor() {
        super();
        this.fieldOne = document.createElement('td')
        this.fieldOne.id = 'fieldOne'
        this.fieldOne.toggleAttribute('contenteditable')

        this.fieldTwo = document.createElement('td')
        this.fieldTwo.id = 'fieldTwo'
        this.fieldTwo.toggleAttribute('contenteditable')

        this.resultField = document.createElement('td')
        this.resultField.id = 'resultField'
        this.resultField.toggleAttribute('contenteditable')
        this.resultField.addEventListener('focusout', this._computeSolution)
        this.resultField.addEventListener('focusin', this._toggleResultField)
    }

    static get properties() {
        return {
            fieldOne: {type: String},
            fieldTwo: {type: Number},
            resultField: {type: Number}
        }
    }

    render() {
        return html`
            <div class="container">
                <h1>Tabellenkalkulation mit contentEditable</h1>
                <table>
                    <tr>
                        <th></th>
                        <th scope="col">2</th>
                    </tr>
                    <tr>
                        <th scope="row">A</th>
                        ${this.fieldOne}
                    </tr>
                    <tr>
                        <th scope="row">B</th>
                        ${this.fieldTwo}
                    </tr>
                    <tr>
                        <th scope="row">Ergebnis</th>
                        ${this.resultField}
                    </tr>
                </table>
                <div class="supportedOperations">
                    <div><b>Unterstützte Operationen:</b></div>
                    <ul>
                        <li><b>Summe</b> =SUM(A2,B2)</li>
                    </ul>
                </div>
            </div>
        `
    }

    _computeSolution() {
        // get shadowRoot in event listener
        // https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
        const shadowRoot = document.querySelector('tabellenkalkulation-module').shadowRoot

        const fieldOne = shadowRoot.querySelector('#fieldOne')
        const fieldTwo = shadowRoot.querySelector('#fieldTwo')

        const numberOne = parseInt(fieldOne.textContent)
        const numberTwo = parseInt(fieldTwo.textContent)

        fieldResultTemp = this.textContent

        if (!(numberOne) || !(numberTwo)) {
            fieldResultTemp = this.textContent
            this.textContent = 'Error'
        }

        // Operations
        if (this.textContent.toLowerCase() === '=sum(a2,b2)') {
            fieldResultTemp = this.textContent
            this.textContent = numberOne + numberTwo
        }
    }

    _toggleResultField() {
        this.textContent = fieldResultTemp
    }
}

customElements.define('tabellenkalkulation-module', Tabellenkalkulation)

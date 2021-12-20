import {css, html, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'

let timer, currentPerson

export class Rednerliste extends LitElement {
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
    #inputArea {
        padding: 20px 0;
    }
    #saveBtn {
        padding: 0 10px;
    }
    #listArea {
        margin-left: 30px;
    }
    li {
        margin: 5px 0;
    }
    button {
        margin-left: 10px;
        padding: 0 10px;
    }`

    constructor() {
        super();
        this.listArea = document.createElement('div')
        this.listArea.id = 'listArea'
    }

    static get properties() {
        return {
            listArea: {type: String}
        }
    }

    render() {
        return html`
            <div class="container">
                <h1>Rednerliste</h1>
                <div id="inputArea">
                    <span>Neuer Redner: </span>
                    <input type="text" placeholder="Name..." id="nameTextField">
                    <input type="button" value="Hinzufügen" id="saveBtn" @click="${this._addPerson}">
                </div>
                ${this.listArea}
            </div>
        `
    }

    _addPerson() {
        const person = this.shadowRoot.getElementById('nameTextField')
        if (person.value === '') {
            return
        }
        const newLine = document.createElement('li')
        const newPerson = document.createElement('span')
        newPerson.textContent = person.value

        const time = document.createElement('span')
        time.textContent = ' 00:00:00'
        time.id = person.value + '-times'
        time.className = 'time'

        const btn = document.createElement('button')
        btn.textContent = 'Start!'
        btn.id = person.value + '-button'
        btn.className = 'startStopBtn'

        newLine.append(newPerson, time, btn)
        this.listArea.appendChild(newLine)
        newLine.querySelector('.startStopBtn').addEventListener('click', startStopTime)
        newLine.querySelector('.startStopBtn').personName = person.value
        person.value = ''
    }
}

customElements.define('rednerliste-module', Rednerliste)


function startStopTime(event) {
    // get shadowRoot in event listener
    // https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
    const shadowRoot = document.querySelector('rednerliste-module').shadowRoot

    if (timer == null) {
        const personName = event.currentTarget.personName
        shadowRoot.querySelector(`#${personName}-button`).textContent = 'Stopp!'
        currentPerson = personName
        timer = setInterval(function () {
            const time = shadowRoot.querySelector(`#${personName}-times`)
            const times = time.textContent.trim().split(':')
            ++times[0]
            --times[0]
            ++times[1]
            --times[1]
            if (++times[2] >= 60) {
                times[2] = '00'
                if (++times[1] >= 60) {
                    times[1] = '00'
                    times[0]++
                }
            }
            time.textContent = ' ' +
                (times[0] < 10 ? '0' + times[0] : times[0]) + ':' +
                (times[1] < 10 ? '0' + times[1] : times[1]) + ':' +
                (times[2] < 10 ? '0' + times[2] : times[2])
        }, 1000)
    } else {
        shadowRoot.querySelector(`#${currentPerson}-button`).textContent = 'Start!'

        clearInterval(timer)
        timer = null

        if (currentPerson !== event.currentTarget.personName) {
            startStopTime(event)
        }
    }

}
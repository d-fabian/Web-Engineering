import {css, html, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js';

let contentAsJSON

export class MenuKomponente extends LitElement {
    static styles = css`
    * {
        padding: 0;
        margin: 0;
    }
    .container {
        margin: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    #headerNavBar, #headerSubNavBar {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }`

    constructor() {
        super();

        (async () => {
            this.headerNavBar = document.createElement('div')
            this.headerNavBar.id = 'headerNavBar'

            this.headerSubNavBar = document.createElement('div')
            this.headerSubNavBar.id = 'headerSubNavBar'

            const content = await fetch('wwwNavigatorContent.json')
            contentAsJSON = await content.json()
            const topics = Object.keys(contentAsJSON)

            topics.forEach(topic => {
                const btn = document.createElement('button')
                btn.className = 'topicBtn'
                btn.textContent = topic
                btn.style.background = 'deepskyblue'
                btn.style.fontStyle = '20pt'
                btn.style.borderRadius = '8px'
                btn.style.padding = '5px 20px'
                btn.addEventListener('click', () => this._setSubTopics(topic))
                this.headerNavBar.appendChild(btn)
            })
        })()
    }

    static get properties() {
        return {
            headerNavBar: {type: String},
            headerSubNavBar: {type: String},
        }
    }

    render() {
        return html`
            <div class="container" id="container">
                ${this.headerNavBar}
                ${this.headerSubNavBar}
            </div>`
    }

    _setSubTopics(topic) {
        this.headerSubNavBar.innerHTML = ''
        const subTopics = contentAsJSON[topic]
        Object.keys(subTopics).forEach(subTopic => {
            const btn = document.createElement('button')
            btn.className = 'subTopicBtn'
            btn.textContent = subTopic
            btn.style.background = '#008ec9'
            btn.style.fontStyle = '15pt'
            btn.style.borderRadius = '8px'
            btn.style.padding = '5px 20px'
            this.headerSubNavBar.appendChild(btn)
        })
    }
}

customElements.define('menu-komponente', MenuKomponente)
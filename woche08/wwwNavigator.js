import {css, html, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js';
import './menuKomponente.js'

let contentAsJSON

export class WwwNavigator extends LitElement {
    static styles = css`
    * {
        padding: 0;
        margin: 0;
        color: white;
    }
    .header {
        margin: 20px;
        text-align: center;
        font-size: 25pt;
    }
    .container {
        height: calc(100vh - 40px);
        margin: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: #00698b;
        border-radius: 8px;
    }
    #headerNavBar, #headerSubNavBar {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        font-size: 25px;
    }
    #content {
        margin: 20px;
        flex-grow: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
    }
    #references {
        margin: 20px;
        text-align: center;
        font-size: 25px;
    }`

    constructor() {
        super();

        (async () => {
            this.headerNavBar = document.createElement('div')
            this.headerNavBar.id = 'headerNavBar'

            this.headerSubNavBar = document.createElement('div')
            this.headerSubNavBar.id = 'headerSubNavBar'

            this.content = document.createElement('div')
            this.content.id = 'content'

            this.references = document.createElement('a')
            this.references.id = 'references'

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
            content: {type: String},
            references: {type: String},
        }
    }

    render() {
        return html`
            <div class="container" id="container">
                <div class="header">
                    <h1>WWW-Navigator</h1>
                </div>
                ${this.headerNavBar}
                ${this.headerSubNavBar}
                ${this.content}
                ${this.references}
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
            btn.addEventListener('click', () => this._showText(topic, subTopic))
            this.headerSubNavBar.appendChild(btn)
        })
    }

    _showText(topic, subTopic) {
        const content = contentAsJSON[topic][subTopic]
        this.content.textContent = content.content
        this.references.innerHTML = `<a href="${content.references}" target="_blank">${content.references}</a>`
    }

}

customElements.define('www-navigator', WwwNavigator)
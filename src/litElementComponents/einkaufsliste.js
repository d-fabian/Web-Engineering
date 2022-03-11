import {css, html, LitElement} from 'lit';

export class EinkaufslisteModule extends LitElement {
    static styles = css`
    * {
        margin: 0;
        padding: 0;
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
                <h1>Einkaufsliste</h1>
                <div id="inputArea">
                    <span>Enter a new item: </span>
                    <input type="text" placeholder="item..." id="itemTextField">
                    <input type="button" value="Add item" id="saveBtn" @click="${this._addItem}">
                </div>
                ${this.listArea}
            </div>
        `
    }

    _addItem() {
        const item = this.shadowRoot.getElementById('itemTextField')
        if (item.value === '') {
            return
        }
        const newItem = document.createElement('li')
        const button = document.createElement('button')
        button.textContent = 'Delete'
        button.className = 'deleteBtn'
        button.id = item.value

        newItem.innerHTML = `${item.value} ${button.outerHTML}`
        this.listArea.appendChild(newItem)

        newItem.querySelector(`#${item.value}`).addEventListener('click', this._removeItem)
        newItem.querySelector(`#${item.value}`).itemToRemove = newItem

        item.value = ''
    }

    _removeItem(event) {
        // get shadowRoot in event listener
        // https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
        const shadowRoot = document.querySelector('einkaufsliste-module').shadowRoot
        shadowRoot.querySelector('#listArea').removeChild(event.currentTarget.itemToRemove)
    }
}

customElements.define('einkaufsliste-module', EinkaufslisteModule);
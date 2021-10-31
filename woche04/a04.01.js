function addItem() {
    const item = document.getElementById('itemTextField')
    if (item.value === '') {
        return
    }
    const list = document.getElementById('listArea')
    const newItem = document.createElement('li')
    const btn = document.createElement('button')
    btn.textContent = 'Delete'
    btn.className = 'deleteBtn'
    btn.onclick = function () {
        removeItem(item.value)
    }
    newItem.textContent = item.value
    newItem.appendChild(btn)
    list.appendChild(newItem)

    item.value = ''

    addDeleteEventListeners()
}

function removeItem(item) {
    const entryList = document.getElementsByTagName('li')
    let entry;
    let newList = ''
    for (entry of entryList) {
        if (entry.textContent !== item + 'Delete') {
            newList += entry.outerHTML
        }
    }
    const list = document.getElementById('listArea')
    list.innerHTML = newList

    addDeleteEventListeners()
}

function addDeleteEventListeners() {
    const allBtn = document.getElementsByClassName('deleteBtn')
    const allItems = document.getElementsByTagName('li')
    let deleteBtn
    let i = 0
    for (deleteBtn of allBtn) {
        const itemName = allItems[i++].textContent.slice(0, -6)
        deleteBtn.onclick = function () {
            removeItem(itemName)
        }
    }
}

const addBtn = document.getElementById('saveBtn')
addBtn.onclick = function () {
    addItem()
}

const textField = document.getElementById('itemTextField')
textField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addItem()
    }
})
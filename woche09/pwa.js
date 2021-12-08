let contentAsJSON, myWorker
const headerSubNavBar = document.getElementById('headerSubNavBar');
const content = document.getElementById('content');
const references = document.getElementById('references');

(async () => {
    await fetch('wwwNavigatorContent.json').then(async result => contentAsJSON = await result.json())
    const topics = Object.keys(contentAsJSON)
    topics.forEach(topic => {
        const btn = document.createElement('button')
        btn.className = 'topicBtn'
        btn.textContent = topic
        btn.style.background = 'deepskyblue'
        btn.style.fontStyle = '20pt'
        btn.style.borderRadius = '8px'
        btn.style.padding = '5px 20px'
        btn.addEventListener('click', () => setSubTopics(topic))
        document.getElementById('headerNavBar').appendChild(btn)
    })

    if (window.Worker) {
        myWorker = new Worker('sw.js')
        myWorker.onmessage = e => {
            [type, topic, data] = e.data
            if (type === 'subTopics') {
                this.headerSubNavBar.innerHTML = ''
                data.forEach(x => {
                    const button = document.createRange().createContextualFragment(x)
                    const subTopic = button.textContent
                    button.firstChild.addEventListener('click', () => showContent(topic, subTopic))
                    this.headerSubNavBar.appendChild(button)
                })
            } else if (type === 'references') {
                this.references.innerHTML = ''
                this.references.appendChild(document.createRange().createContextualFragment(data))
            }
        }
    }
})()

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('Successful registration with scope: ', registration.scope)
            })
            .catch(err => {
                console.log('ERROR: ', err)
            })
    })
}

function setSubTopics(topic) {
    myWorker.postMessage(['subTopics', topic, Object.keys(contentAsJSON[topic])])
}

function showContent(topic, subTopic) {
    this.content.textContent = contentAsJSON[topic][subTopic].content
    myWorker.postMessage(['content', topic, contentAsJSON[topic][subTopic]])
}
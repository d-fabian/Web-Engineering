let contentAsJson
const headerNavBar = document.getElementById('headerNavBar')
const headerSubNavBar = document.getElementById('headerSubNavBar')
const mainContent = document.getElementById('mainContent')
const references = document.getElementById('references')

async function getContent() {
    const content = await fetch('wwwNavigatorContent.json')
    return await content.json()
}

function setTopics(topics) {
    topics.forEach(topic => {
        const btn = document.createElement('button')
        btn.className = 'topicBtn'
        btn.textContent = topic
        btn.style.background = 'deepskyblue'
        btn.style.fontStyle = '20pt'
        btn.style.borderRadius = '8px'
        btn.style.padding = '5px 20px'
        btn.addEventListener('click', () => setSubTopics(topic))
        headerNavBar.appendChild(btn)
    })

}

function setSubTopics(topic) {
    headerSubNavBar.innerHTML = ''
    const subTopics = contentAsJson[topic]
    Object.keys(subTopics).forEach(subTopic => {
        const btn = document.createElement('button')
        btn.className = 'subTopicBtn'
        btn.textContent = subTopic
        btn.style.background = '#008ec9'
        btn.style.fontStyle = '15pt'
        btn.style.borderRadius = '8px'
        btn.style.padding = '5px 20px'
        btn.addEventListener('click', () => setContent(subTopics[subTopic]))
        headerSubNavBar.appendChild(btn)
    })
}

function setContent(content) {
    const infos = content['content']
    const refURL = content['references']
    mainContent.textContent = infos
    references.innerHTML = `<a href="${refURL}" target="_blank">${refURL}</a><i class="fa-solid fa-up-right-from-square"></i>`
}

(async () => {
    contentAsJson = await getContent()
    const topics = Object.keys(contentAsJson)
    setTopics(topics)
})()
// to work offline
self.addEventListener("fetch", function (event) {
});

self.onmessage = function (event) {
    [type, topic, data] = event.data
    const result = []
    if (type === 'subTopics') {
        data.forEach(subTopic => {
            const button = `<button class="subTopicBtn" style="background: #008ec9; font-size: 15px; border-radius: 8px; padding: 5px 20px">${subTopic}</button>`
            result.push(button)
        })
        postMessage(['subTopics', topic, result])
    } else if (type === 'content') {
        const references = `<a href="${data.references}" target="_blank" style="color: white">${data.references}</a>`
        postMessage(['references', topic, references])
    }
}
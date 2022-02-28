<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Wandeln Sie Ihren LitElement WWW-Navigator aus Aufgabe 8.3 in eine Progressive Web App um.
    </template>
    <template v-slot:solution>
      <div class="container">
        <div class="header">
          <h1>WWW-Navigator</h1>
        </div>
        <div id="headerNavBar"></div>
        <div id="headerSubNavBar"></div>
        <div id="content"></div>
        <div id="references"></div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche09Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 9.1',
  components: {
    SolutionWithOverlay
  },
  data() {
    return {
      contentAsJSON: undefined,
      myWorker: undefined,
      headerSubNavBar: undefined,
      content: undefined,
      references: undefined,
      type: undefined,
      topic: undefined,
      data: undefined,
    }
  },
  mounted() {
    this.headerSubNavBar = document.getElementById('headerSubNavBar')
    this.content = document.getElementById('content')
    this.references = document.getElementById('references')

    this.startUp()

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
  },
  methods: {
    async startUp() {
      await fetch('wwwNavigatorContent.json').then(async result => this.contentAsJSON = await result.json())
      const topics = Object.keys(this.contentAsJSON)
      topics.forEach(topic => {
        const btn = document.createElement('button')
        btn.className = 'topicBtn'
        btn.textContent = topic
        btn.style.background = 'deepskyblue'
        btn.style.fontStyle = '20pt'
        btn.style.borderRadius = '8px'
        btn.style.padding = '5px 20px'
        btn.addEventListener('click', () => this.setSubTopics(topic))
        document.getElementById('headerNavBar').appendChild(btn)
      })

      if (window.Worker) {
        this.myWorker = new Worker('sw.js')
        this.myWorker.onmessage = e => {
          [this.type, this.topic, this.data] = e.data
          if (this.type === 'subTopics') {
            this.headerSubNavBar.innerHTML = ''
            this.data.forEach(x => {
              const button = document.createRange().createContextualFragment(x)
              const subTopic = button.textContent
              button.firstChild.addEventListener('click', () => this.showContent(this.topic, subTopic))
              this.headerSubNavBar.appendChild(button)
            })
          } else if (this.type === 'references') {
            this.references.innerHTML = ''
            this.references.appendChild(document.createRange().createContextualFragment(this.data))
          }
        }
      }
    },
    setSubTopics(topic) {
      this.myWorker.postMessage(['subTopics', topic, Object.keys(this.contentAsJSON[topic])])
    },
    showContent(topic, subTopic) {
      this.content.textContent = this.contentAsJSON[topic][subTopic].content
      this.myWorker.postMessage(['content', topic, this.contentAsJSON[topic][subTopic]])
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: white;
}

.header {
  margin: 20px;
  text-align: center;
  font-size: 25pt;
}

.container {
  height: calc(100vh - 61px - 40px - 20px);
  margin: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #00698b;
  border-radius: 8px;
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px - 20px);
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
}
</style>
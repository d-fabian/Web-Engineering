<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie einen Navigator für die Fachbegriffe des WWW zu den Oberthemen HTML, CSS und JavaScript. Im
      Hauptmenü sollen diese 3 Oberthemen zur Auswahl stehen. Im Untermenü soll eine zugehörige Liste von Fachbegriffen
      zum jeweiligen ausgewählten Oberthema stehen. In der Mitte soll eine Dokumentation zum ausgewählten Fachbegriff
      erscheinen mit Hyperlinks zu den anderen Fachbegriffen. Wird auf einen solchen Hyperlink geklickt, so sollen sich
      auch die beiden Menüs anpassen. Mit dem Back-Button des Browsers soll ein Zurücksprung möglich sein.<br><br>
      Schreiben Sie in HTML und CSS nur den responsiven Rahmen für einen solchen WWW-Navigator. Dabei können Sie auch
      ein schöneres Layout als das hier gezeigte erstellen. Die Inhalte sollen in einer JSON-Datei extern gelagert
      werden. Mit der fetch-API soll die JSON-Datei asynchron nicht-blockierend geladen werden. Sobald die Inhalte
      angekommen sind, sollen sie im Browser auch angezeigt werden.<br><br>
      Fügen Sie selbst in die JSON-Datei zusätzliche Inhalte zu Themen der Vorlesung als Strings beispielhaft ein. Wenn
      Sie Inhalte aus fremden Quellen kopieren, so schreiben Sie bitte stets die Quelle als externe Ressource hinzu.
      Diese soll dann auf der rechten Seite im WWW-Navigator erscheinen.
    </template>
    <template v-slot:solution>
      <div id="container">
        <div id="header">
          <h1>WWW-Navigator</h1>
        </div>
        <div id="headerNavBar"></div>
        <div id="headerSubNavBar"></div>
        <div id="mainContent"></div>
        <div id="references"></div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche05Aufgabe4",
  title: 'Web Engineering WS21/22 - Woche 5.4',
  components: {
    SolutionWithOverlay
  },
  data() {
    return {
      contentAsJson: undefined,
      headerNavBar: undefined,
      headerSubNavBar: undefined,
      mainContent: undefined,
      references: undefined,
    }
  },
  async mounted() {
    this.headerNavBar = document.getElementById('headerNavBar')
    this.headerSubNavBar = document.getElementById('headerSubNavBar')
    this.mainContent = document.getElementById('mainContent')
    this.references = document.getElementById('references')

    this.contentAsJson = await this.getContent()
    const topics = Object.keys(this.contentAsJson)
    this.setTopics(topics)
  },
  methods: {
    async getContent() {
      const content = await fetch('wwwNavigatorContent.json')
      return content.json();
    },

    setTopics(topics) {
      topics.forEach(topic => {
        const btn = document.createElement('button')
        btn.className = 'topicBtn'
        btn.textContent = topic
        btn.style.background = 'deepskyblue'
        btn.style.fontStyle = '20pt'
        btn.style.borderRadius = '8px'
        btn.style.padding = '5px 20px'
        btn.addEventListener('click', () => this.setSubTopics(topic))
        this.headerNavBar.appendChild(btn)
      })
    },

    setSubTopics(topic) {
      this.headerSubNavBar.innerHTML = ''
      const subTopics = this.contentAsJson[topic]
      Object.keys(subTopics).forEach(subTopic => {
        const btn = document.createElement('button')
        btn.className = 'subTopicBtn'
        btn.textContent = subTopic
        btn.style.background = '#008ec9'
        btn.style.fontStyle = '15pt'
        btn.style.borderRadius = '8px'
        btn.style.padding = '5px 20px'
        btn.addEventListener('click', () => this.setContent(subTopics[subTopic]))
        this.headerSubNavBar.appendChild(btn)
      })
    },

    setContent(content) {
      const infos = content['content']
      const refURL = content['references']
      this.mainContent.textContent = infos
      this.references.innerHTML = `<a href="${refURL}" target="_blank">${refURL}</a><i class="fa-solid fa-up-right-from-square"></i>`
    },
  }
}
</script>

<style scoped>
#container {
  display: grid;
  grid-template-rows: auto auto auto 10fr auto;
  grid-template-areas:
                    "header"
                    "headerNavBar"
                    "headerSubNavBar"
                    "mainContent"
                    "references";
  margin: 0 20px 20px 20px;
  height: calc(100vh - 61px - 40px - 20px);
  width: calc(100vw - 40px);
  background: #00698b;
  border-radius: 8px;
  transition: 0.5s linear;
}

.active #container {
  height: calc(100vh - 40px - 20px);
  width: calc(100vw - 378px - 40px);
}

#header {
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 25pt;
  margin: 30px 0;
}

#headerNavBar {
  grid-area: headerNavBar;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 0;
}

#headerSubNavBar {
  grid-area: headerSubNavBar;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 30px 0;
}

#mainContent {
  grid-area: mainContent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20pt;
  margin: 10px 20px;
}

#references {
  grid-area: references;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 15pt;
  margin: 15px 0;
}

i {
  margin-left: 5px;
  color: deepskyblue;
}
</style>
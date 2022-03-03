<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie einen lokalen Express.js-HTTP-Server für den Merge-Dienst, d.h. auf der lokal angezeigten Webseite
      kann man zwei Dateien auswählen, um diese zeilenweise zu mergen. Das Ergebnis soll dann in der Webseite erscheinen
      und zum Download angeboten werden.
    </template>
    <template v-slot:solution>
      <div class="container">
        <div class="uploadArea">
          <form>
            <input accept="text/plain" id="leftFile" type="file">
          </form>
          <button disabled id="mergeBtn">Merge Files</button>
          <form>
            <input accept="text/plain" id="rightFile" type="file">
          </form>
        </div>
        <div class="textArea">
          <div id="contentLeft"></div>
          <div id="contentRight"></div>
        </div>
        <div id="textAreaMerged"></div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche07Aufgabe3",
  title: 'Web Engineering WS21/22 - Woche 7.3',
  components: {
    SolutionWithOverlay
  },
  data() {
    return {
      leftFile: undefined,
      leftContent: undefined,
      readerLeft: undefined,
      rightFile: undefined,
      rightContent: undefined,
      readerRight: undefined,
      mergeBtn: undefined,
      textAreaMerged: undefined,
    }
  },
  mounted() {
    this.leftFile = document.getElementById('leftFile')
    this.leftContent = document.querySelector('#contentLeft')
    this.readerLeft = new FileReader()
    this.rightFile = document.getElementById('rightFile')
    this.rightContent = document.querySelector('#contentRight')
    this.readerRight = new FileReader()
    this.mergeBtn = document.getElementById('mergeBtn')
    this.textAreaMerged = document.getElementById('textAreaMerged')

    this.leftFile.addEventListener('change', (ev) => {
      this.readerLeft.readAsText(ev.target.files[0])
    })

    this.readerLeft.addEventListener('load', () => {
      this.leftContent.innerText = this.readerLeft.result
      this.allFilesGiven()
    })

    this.rightFile.addEventListener('change', (ev) => {
      this.readerRight.readAsText(ev.target.files[0])
    })

    this.readerRight.addEventListener('load', () => {
      this.rightContent.innerText = this.readerRight.result
      this.allFilesGiven()
    })

    this.mergeBtn.addEventListener('click', () => {
      if (this.mergeBtn.innerText === 'Merge Files') {
        const leftSplit = this.leftContent.innerText.split('\n')
        const rightSplit = this.rightContent.innerText.split('\n')
        this.leftContent.innerHTML = ''
        this.rightContent.innerHTML = ''
        let mergedText = ''
        let i = 0
        for (const line of leftSplit) {
          const newLine = line + ' ' + rightSplit[i++]
          mergedText += newLine + '\n'
        }
        this.textAreaMerged.innerText = mergedText
        this.mergeBtn.innerText = 'Download'
      } else {
        const content = this.textAreaMerged.innerText
        const filename = "mergedFiles.txt"

        this.download(filename, content)
      }
    })
  },
  methods: {
    allFilesGiven() {
      if (this.leftContent.innerText && this.rightContent.innerText) {
        this.mergeBtn.disabled = false
      }
    },
    download(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);

      element.style.display = 'none';

      element.click();
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 20px 20px 20px;
  height: calc(100vh - 61px - 40px - 20px);
  width: 100vw;
  transition: 0.5s linear;
  overflow-x: hidden;
}

.active .container {
  height: calc(100vh - 40px - 20px);
  width: calc(100vw - 378px - 20px);
}

.uploadArea {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
}

.textArea {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
}

#contentLeft {
  width: 40vw;
}

#contentRight {
  width: 40vw;
}

#textAreaMerged {
  text-align: center;
}
</style>
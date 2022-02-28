<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie eine <a href="https://v2.vuejs.org/v2/guide/single-file-components.html?redirect=true"
                            target="_blank">Vue.js Single File Component</a> mit einem Text-Eingabefeld und 3
      Ausgabefeldern, in denen man während des Tippens sehen kann,<br>(a) wie viele Buchstaben<br>(b) wie viele
      Leerzeichen
      und<br>(c) wie viele Worte man in das Text-Eingabefeld bereits eingegeben hat.<br><br>
      Betten Sie Ihre Komponente in eine Webseite zweimal ein und testen Sie, ob beide Komponenten unabhängig
      voneinander sind.
    </template>
    <template v-slot:solution>
      <div class="container">
        <word-count></word-count>
        <word-count></word-count>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import WordCount from "@/components/WordCount";

export default {
  name: "Woche10Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 10.1',
  components: {
    WordCount,
    SolutionWithOverlay
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 61px - 40px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px);
}
</style>
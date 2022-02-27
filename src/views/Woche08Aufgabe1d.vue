<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Verpacken Sie Ihre Lösungen aus LE04 in wiederverwendbare Web-Komponenten. Dabei können Sie alle Hilfsmittel aus
      <a href="https://lit.dev/" target="_blank">Lit</a> verwenden.
    </template>
    <template v-slot:solution>
      <div class="container">
        <statistik-balkendiagramm></statistik-balkendiagramm>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import StatistikBalkendiagramm from "../../stories/statistikBalkendiagramm";

export default {
  name: "Woche08Aufgabe1d",
  title: 'Web Engineering WS21/22 - Woche 8.1',
  components: {
    StatistikBalkendiagramm,
    SolutionWithOverlay
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 61px - 40px);
  width: 100vw;
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}
</style>
<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Verpacken Sie Ihre Lösungen aus LE04 in wiederverwendbare Web-Komponenten. Dabei können Sie alle Hilfsmittel aus
      <a href="https://lit.dev/" target="_blank">Lit</a> verwenden.
    </template>
    <template v-slot:solution>
      <div class="container">
        <tabellenkalkulation-module></tabellenkalkulation-module>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import TabellenkalkulationModule from "../litElementComponents/tabellenkalkulation";

export default {
  name: "Woche08Aufgabe1c",
  title: 'Web Engineering WS21/22 - Woche 8.1',
  components: {
    TabellenkalkulationModule,
    SolutionWithOverlay
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 61px - 40px);
  width: 100vw;
  transition: 0.5s linear;
  overflow: hidden;
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}
</style>
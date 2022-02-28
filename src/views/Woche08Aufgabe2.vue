<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie mit <a href="https://lit.dev/docs/api/LitElement/" target="_blank">LitElement</a> eine flexible
      Menü-Komponente, die sich sowohl für horizontale als auch für vertikale Menüs eignet, wie sie sie in Ihrem
      WWW-Navigator gebrauchen könnten.
    </template>
    <template v-slot:solution>
      <div class="container">
        <button @click="toggleDirection">Toggle horizontal/vertical</button>
        <menu-komponente id="menuKomponente"></menu-komponente>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import MenuKomponente from "../../stories/menuKomponente";

export default {
  name: "Woche08Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 8.2',
  components: {
    MenuKomponente,
    SolutionWithOverlay
  },
  methods: {
    toggleDirection() {
      document.getElementById('menuKomponente').toggleAttribute('vertical')
    }
  },
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
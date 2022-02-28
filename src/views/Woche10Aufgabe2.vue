<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie eine möglichst flexible <a href="https://v2.vuejs.org/v2/guide/components.html?redirect=true"
                                               target="_blank">Vue.js Single File Component</a> für Menüs und wenden Sie
      diese in derselben Webseite zweimal an, einmal horizontal, das andere Mal vertikal.
    </template>
    <template v-slot:solution>
      <div class="container">
        <MenuKomponente :button-labels="['HTML', 'CSS', 'JavaScript']"></MenuKomponente>
        <MenuKomponente :button-labels="['HTML', 'CSS', 'JavaScript']" is-vertical></MenuKomponente>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import MenuKomponente from "@/components/MenuKomponente";

export default {
  name: "Woche10Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 10.2',
  components: {MenuKomponente, SolutionWithOverlay}
}
</script>

<style scoped>
.container {
  height: calc(100vh - 61px - 40px);
  transition: 0.5s linear;
}
.active .container {
  height: calc(100vh - 40px);
}
</style>
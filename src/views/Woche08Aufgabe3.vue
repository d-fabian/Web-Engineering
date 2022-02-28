<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Zerlegen Sie Ihren WWW-Navigator (aus Ü5.4) in wiederverwendbare Web-Komponenten. Implementieren Sie diese mit <a
        href="https://lit.dev/docs/api/LitElement/" target="_blank">LitElement</a>.
    </template>
    <template v-slot:solution>
      <div class="container">
        <www-navigator></www-navigator>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import WwwNavigator from "@/litElementComponents/wwwNavigator";

export default {
  name: "Woche08Aufgabe3",
  title: 'Web Engineering WS21/22 - Woche 8.3',
  components: {
    SolutionWithOverlay,
    WwwNavigator
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 61px - 40px - 20px);
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px - 20px);
}
</style>
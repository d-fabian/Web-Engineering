<template>
  <exercise-solution class="active">
    <template v-slot:exercise>
      Mit welchem HTML- und CSS-Code kann man <a href="https://kaul.inf.h-brs.de/wem/assets/img/tribute.png" target="_blank">diesen</a> Wireframe möglichst exakt nachbilden?
      Schreiben Sie Ihren CSS-Code direkt in die HTML-Datei. Für das Bild dürfen Sie die URL
      <a href="https://kaul.inf.h-brs.de/wem/assets/img/tribute-img.png" target="_blank">/wem/assets/img/tribute-img.png</a> verwenden.
    </template>
    <template v-slot:solution>
      <div id="solution">
        <div>
          <h1>Dr. Norman Borlaug</h1>
          <p>The man who saves a billion lives</p>
        </div>
        <img src="../assets/tribute-img.png" alt="tribute image"/>
      </div>
    </template>
  </exercise-solution>
</template>

<script>
import ExerciseSolution from "@/components/ExerciseSolution";

export default {
  name: "Woche03Aufgabe3",
  title: 'Web Engineering WS21/22 - Woche 1.3',
  components: {
    ExerciseSolution
  },
}
</script>

<style scoped>
* {
  margin: 0;
}
#solution {
  background: lightgrey;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 40px;
}

p {
  font-size: 20px;
}

img {
  display: block;
  max-width: calc(100vw - 40px);
  transition: .5s linear;
}
.active img {
  max-width: calc(100vw - 418px);
}
</style>
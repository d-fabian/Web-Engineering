<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Mit welchem HTML- und CSS-Code kann man <a href="https://kaul.inf.h-brs.de/wem/assets/img/tribute.png"
                                                 target="_blank">diesen</a> Wireframe möglichst exakt nachbilden?
      Schreiben Sie Ihren CSS-Code direkt in die HTML-Datei. Für das Bild dürfen Sie die URL <a
        href="https://kaul.inf.h-brs.de/wem/assets/img/tribute-img.png"
        target="_blank">/wem/assets/img/tribute-img.png</a> verwenden.
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
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche01Aufgabe3",
  title: 'Web Engineering WS21/22 - Woche 1.3',
  components: {
    SolutionWithOverlay,
  },
}
</script>

<style scoped>
#solution {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 61px - 40px);
  width: 100vw;
  background: lightgrey;
  text-align: center;
  transition: 0.5s linear;
}

.active #solution {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}

h1 {
  font-size: 40px;
}

p {
  font-size: 20px;
}

img {
  display: block;
  margin: 20px;
  max-width: calc(100vw - 40px);
  transition: .5s linear;
}

.active img {
  max-width: calc(100vw - 418px);
}
</style>
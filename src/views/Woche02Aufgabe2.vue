<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Implementieren Sie das gleiche responsive Webdesign wie in Aufgabe 2.1 allerdings mit Grid und der
      Mobile-First-Strategie! Vermeiden Sie diesmal außerdem das Erscheinen von Scrollbars.
    </template>
    <template v-slot:solution>
      <div class="container">
        <div class="red"></div>
        <div class="green"></div>
        <div class="blue"></div>
        <div class="purple"></div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import overlayMixin from "@/mixins/overlayMixin";
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche02Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 2.2',
  components: {
    SolutionWithOverlay,
  },
  methods: {
    open: () => overlayMixin.open(),
    close: () => overlayMixin.close(),
  }
}
</script>

<style scoped>
.container {
  display: grid;
  height: calc(100vh - 40px - 61px);
  padding: 0;
  margin: 0;
  grid-template: 1fr 1fr 8fr 1fr / 1fr;
  grid-template-areas:
                "redPart"
                "greenPart"
                "bluePart"
                "purplePart";
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}

.red {
  background-color: #ff2500;
  grid-area: redPart;
}

.green {
  background-color: #2cee27;
  grid-area: greenPart;
}

.blue {
  background-color: #0533ff;
  grid-area: bluePart;
}

.purple {
  background-color: #ea3efe;
  grid-area: purplePart;
}

@media all and (min-width: 400px) {
  .container {
    grid-template: 1fr 6fr 1fr / 1fr 2fr;
    grid-template-areas:
                "redPart redPart redPart"
                "greenPart bluePart bluePart"
                "purplePart purplePart purplePart";
  }

  .red {
    margin: 5px;
  }

  .green {
    margin: 5px;
  }

  .blue {
    margin: 5px;
  }

  .purple {
    margin: 5px;
  }
}

@media all and (min-width: 768px) {
  .container {
    grid-template: 1fr 2fr / 1fr 3fr 1fr;
    grid-template-areas:
                "redPart redPart redPart"
                "greenPart bluePart purplePart";
  }
}
</style>
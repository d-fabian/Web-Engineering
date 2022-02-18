<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      <!-- todo add exercise -->
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
  /*transition: .5s linear;*/
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
  /*transition: .5s linear;*/
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
    /*margin: 5px;*/
    /*height: calc(100vh - 10px);*/
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
    /*margin: 20px;*/
    /*height: calc(100vh - 40px);*/
    grid-template: 1fr 2fr / 1fr 3fr 1fr;
    grid-template-areas:
                "redPart redPart redPart"
                "greenPart bluePart purplePart";
  }
}
</style>
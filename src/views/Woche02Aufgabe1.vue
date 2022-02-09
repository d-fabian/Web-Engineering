<template>
  <exercise-solution class="active">
    <template v-slot:exercise>
      Implementieren Sie ausschließlich mit HTML und CSS Flexbox <a
        href="https://kaul.inf.h-brs.de/wem/assets/img/holy-grail1.png" target="_blank">folgendes</a> responsive
      Webdesign nach der Desktop-First-Strategie!
    </template>
    <template v-slot:solution>
      <div class="container">
        <div class="red column"></div>
        <div class="green column"></div>
        <div class="blue column"></div>
        <div class="purple column"></div>
      </div>
    </template>
  </exercise-solution>
</template>

<script>
import ExerciseSolution from "@/components/ExerciseSolution";

export default {
  name: "Woche02Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 2.1',
  components: {
    ExerciseSolution
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw - 20px);
  transition: .5s linear;
}

.active .container {
  width: calc(100vw - 378px - 40px);
  height: 100vh;
}

.column {
  margin: 5px;
  --column: 5;
  --width: 1;
  flex-basis: calc(var(--width) / var(--column) * 100% - 10px);
}

.red {
  background-color: #ff2500;
  --width: 5;
  height: calc(1 / 3 * 80vh - 30px);
}

.green {
  background-color: #2cee27;
  --width: 1;
  height: calc(2 / 3 * 80vh - 30px);
}

.blue {
  background-color: #0533ff;
  --width: 3;
  height: calc(2 / 3 * 80vh - 30px);
}

.purple {
  background-color: #ea3efe;
  --width: 1;
  height: calc(2 / 3 * 80vh - 30px);
}

@media all and (max-width: 768px) {
  body, html {
    margin: 5px;
  }

  .column {
    margin: 1px;
    --column: 3;
    flex-basis: calc(var(--width) / var(--column) * 100% - 2px);
  }

  .red {
    --width: 3;
  }

  .blue {
    --width: 2;
  }

  .purple {
    --width: 3;
  }
}

@media all and (max-width: 400px) {

  .column {
    margin: 0;
    --column: 1;
    --height: calc(1 / 6 * 100vh);
    flex-basis: calc(var(--width) / var(--column) * 100%);
  }

  .red {
    --width: 1;
    height: var(--height);
  }

  .green {
    --width: 1;
    height: var(--height);
  }

  .blue {
    --width: 1;
    height: calc(var(--height) * 10);
  }

  .purple {
    --width: 1;
    height: var(--height);
  }
}
</style>
<template>
  <div id="solution-with-overlay">
    <button id="openOverlayButton" v-on:click="open">Show Exercise</button>
    <div id="overlay">
      <button id="closeOverlayButton" v-on:click="close">
        <font-awesome-icon icon="fa-solid fa-x"/>
      </button>
      <h3>Aufgabe</h3>
      <slot name="exercise"></slot>
    </div>
    <div id="solution">
      <slot name="solution"></slot>
    </div>
  </div>
</template>

<script>
import overlayMixin from "@/mixins/overlayMixin";

export default {
  name: "SolutionWithOverlay",
  methods: {
    open: () => overlayMixin.open(),
    close: () => overlayMixin.close(),
  }
}
</script>

<style scoped>
#solution-with-overlay {
  height: calc(100vh - 61px);
  /*display: flex;*/
  /*flex-direction: column;*/
}

#solution-with-overlay.active {
  height: 100vh;
  /*display: flex;*/
  /*flex-direction: column;*/
}

#openOverlayButton {
  margin-top: 20px;
  padding: 0 10px;
  height: 20px;
}

#overlay {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  min-width: 100px;
  min-height: 100px;
  border: 2px solid black;
  border-radius: 8px;
  background: deepskyblue;
  z-index: 999999999;
}

#closeOverlayButton {
  position: absolute;
  top: 5%;
  left: 85%;
  background: transparent;
  border: transparent;
}

h3 {
  margin-bottom: 10px;
}

#solution {
  /*display: flex;*/
  /*flex-direction: column;*/
  height: calc(100vh - 40px - 61px);
  /*height: 100vh;*/
  width: 100vw;
}
.active #solution {
  /*height: 100vh;*/
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}

.open #solution {
  opacity: 0.2;
}
</style>
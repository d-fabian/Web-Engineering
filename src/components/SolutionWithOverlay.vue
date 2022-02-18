<template>
  <div id="solution-with-overlay">
    <button id="openOverlayButton" v-on:click="open">Show Exercise</button>
    <div id="overlay">
      <button id="closeOverlayButton" v-on:click="close">
        <font-awesome-icon icon="fa-solid fa-x"/>
      </button>
      <h3>Aufgabe</h3>
      <div id="exerciseSlot">
        <slot name="exercise"></slot>
      </div>
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
}

#solution-with-overlay.active {
  height: 100vh;
}

#openOverlayButton {
  margin: 10px 0;
  padding: 0 10px;
  height: 20px;
}

#overlay {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  border-radius: 8px;
  background: deepskyblue;
  z-index: 999999999;
}

#closeOverlayButton {
  position: absolute;
  top: 5px;
  left: calc(100% - 15px);
  background: transparent;
  border: transparent;
}

h3 {
  margin: 10px 0;
}

#exerciseSlot {
  margin: 0 10px 10px;
}

#solution {
  height: calc(100vh - 40px - 61px);
  width: 100vw;
}

.active #solution {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}

.open #solution {
  opacity: 0.2;
}
</style>
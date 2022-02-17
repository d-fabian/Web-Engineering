<template>
    <div id="overlay">
      <button v-on:click="$emit('close')"><font-awesome-icon icon="fa-solid fa-x"/></button>
      <h3>Aufgabe</h3>
      <slot name="exercise"></slot>
    </div>
</template>

<script>
export default {
  name: "ExerciseOverlay",
}
</script>

<style scoped>
#overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  margin-top: -50px;
  margin-left: -50px;
  min-width: 100px;
  min-height: 100px;
  border: 2px solid black;
  border-radius: 8px;
  background: deepskyblue;
  z-index: 999999999;
}

button {
  position: absolute;
  top: 5%;
  left: 85%;
  background: transparent;
  border: transparent;
}

h3 {
  margin-bottom: 10px;
}
</style>
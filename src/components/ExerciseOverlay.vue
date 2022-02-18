<template>
  <div id="overlay">
    <button v-on:click="$emit('close')">
      <font-awesome-icon icon="fa-solid fa-x"/>
    </button>
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
</style>
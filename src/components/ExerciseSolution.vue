<template>
  <div id="exercise-solution">
    <h2><b>Aufgabenstellung:</b></h2>
    <div>
      <slot name="exercise"></slot>
    </div>
    <h2><b>Lösung:</b></h2>
    <div>
      <slot name="solution"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseSolution"
}
</script>

<style scoped>
#exercise-solution {
  height: calc(100vh - 101px);
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  transition: .5s linear;
}
#exercise-solution.active {
  height: calc(100vh - 40px);
}

</style>
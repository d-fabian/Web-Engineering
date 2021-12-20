<template>
  <div :class="!isVertical ? 'horizontalMenu' : 'verticalMenu'">
    <input type="button" v-for="label in buttonLabels" v-bind:key="label" :value="label">
  </div>
</template>

<script>
export default {
  name: "MenuKomponente",
  props: {
    isVertical: Boolean,
    buttonLabels: Array
  },
  // Lifecycle Hooks
  created() {
    document.title = "Menü Komponente"
  }
}
</script>

<style scoped>
div {
  margin: 20px;
  border: 1px solid black;
}

input {
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
}

.horizontalMenu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.verticalMenu {
  height: calc(100vh - 49px - 60px - 2px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
</style>
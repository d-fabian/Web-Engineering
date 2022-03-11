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
  margin: 0 20px 20px 20px;
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
  align-content: center;
  justify-content: space-around;
}

.verticalMenu {
  height: calc(100% - 69px - 20px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
</style>
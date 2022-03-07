<template>
  <div v-if="isActive" class="container">
    <div class="input">
      <input v-for="a in numInputFields" v-bind:key="a" :id="a">
      <button @click="executeFunction">Berechnen</button>
    </div>
    <div v-if="solution" class="output">
      Das Ergebnis ist: {{ solution }}
    </div>
  </div>
</template>

<script>
let solution;
export default {
  name: "ExecuteFunction",
  props: {
    numInputFields: Number,
    solution,
    isActive: Boolean,
  },
  methods: {
    executeFunction() {
      const values = []
      for (let i = 1; i <= this.numInputFields; i++) {
        values.push(document.getElementById(i).value)
      }
      this.$emit('executeFunction', values)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
}

.input,
.output {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.output {
  margin: 10px;
}

input,
button {
  margin: 0 10px;
}

button {
  padding: 0 5px;
}
</style>
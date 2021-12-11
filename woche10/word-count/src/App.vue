<template>
  <div id="app">
    <WordCount></WordCount>
    <WordCount></WordCount>
  </div>
</template>

<script>
import WordCount from '@/components/WordCount'

export default {
  name: 'App',
  components: {
    WordCount
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

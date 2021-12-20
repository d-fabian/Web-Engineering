<template>
  <div class="wordCount">
    <h1>Word Count</h1>
    <input type="text" placeholder="Enter some Text..." v-on:input="evaluateInput($event.target.value)">
    <p id="countChars">Du hast {{ chars }} Buchstaben eingegeben</p>
    <p id="countBlanks">Du hast {{ blanks }} Leerzeichen eingegeben</p>
    <p id="countWords">Du hast {{ words }} Wort/Wörter eingegeben</p>
  </div>
</template>

<script>
export default {
  name: "WordCount",
  data: function () {
    return {
      chars: 0,
      blanks: 0,
      words: 0
    }
  },
  methods: {
    evaluateInput(value) {
      // count Chars
      this.chars = value.split(' ').filter(word => word.length > 0).join('').length
      // count Blanks
      this.blanks = value.split(' ').length - 1
      // count Words
      this.words = value.split(' ').filter(word => word.length > 0).length
    }
  },
  // Lifecycle Hooks
  created() {
    document.title = "Word Count"
  }
}
</script>

<style scoped>

</style>
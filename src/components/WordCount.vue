<template>
  <div class="wordCount">
    <h1>Word Count</h1>
    <input type="text" placeholder="Enter some Text..." v-on:input="evaluateInput($event.target.value)">
    <p id="countChars">Du hast {{ chars }} Buchstaben eingegeben</p>
    <p id="countBlanks">Du hast {{ blanks }} Leerzeichen eingegeben</p>
    <p id="countWords">Du hast {{ words }} {{ wordText }} eingegeben</p>
  </div>
</template>

<script>
export default {
  name: "WordCount",
  data: function () {
    return {
      chars: 0,
      blanks: 0,
      words: 0,
      wordText: 'Wörter',
    }
  },
  watch: {
    words() {
      if(this.words === 1) {
        this.wordText = 'Wort'
      } else {
        this.wordText = 'Wörter'
      }
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
}
</script>

<style scoped>
h1, input {
  margin-bottom: 10px;
}
p {
  margin-bottom: 5px;
}
</style>
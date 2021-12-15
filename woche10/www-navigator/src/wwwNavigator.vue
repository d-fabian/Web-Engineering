<template>
  <div id="app">
    <div class="header">
      <h1>WWW-Navigator</h1>
    </div>
    <div class="topicDiv">
      <input type="button" v-for="topic in topics" v-bind:key="topic" :value="topic"
             v-on:click="showSubMenuButtons(topic)">
    </div>
    <div class="topicDiv" v-if="currentTab">
      <input type="button" v-for="topic in subtopics" v-bind:key="topic" :value="topic" v-on:click="showContent(topic)">
    </div>
    <div class="content" v-if="content">
      {{ content }}
    </div>
    <div class="references" v-if="references">
      <a :href="references" target="_blank">{{ references }}</a>
      <font-awesome-icon icon="external-link-alt"/>
    </div>
  </div>
</template>

<script>
import json from './wwwNavigatorContent.json'

export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      currentTab: undefined,
      topics: [],
      subtopics: [],
      content: undefined,
      references: undefined,
    }
  },
  methods: {
    showSubMenuButtons(topic) {
      this.currentTab = topic
      this.subtopics = Object.keys(json[this.currentTab])
    },
    showContent(subTopic) {
      this.content = json[this.currentTab][subTopic].content
      this.references = json[this.currentTab][subTopic].references[0]
    }
  },

  // Lifecycle Hooks
  created() {
    document.title = "WWW-Navigator"
    this.topics = Object.keys(json)
    this.subtopics = Object.keys(json[this.topics[0]])
  }
}


</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #00698b;
  border-radius: 8px;
  color: white;
  margin: 10px;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  padding: 0;
}

.header {
  font-size: 25px;
  margin: 20px;
}

.topicDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
}

input {
  color: white;
  background: #008ec9;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 20px;
}

.content {
  margin: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: center;
  font-size: 20px;
}

.references {
  margin: 20px;
}

a {
  color: white;
  font-size: 20px;
}

svg {
  color: deepskyblue;
  margin-left: 5px;
}
</style>

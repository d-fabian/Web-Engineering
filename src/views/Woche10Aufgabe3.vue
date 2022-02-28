<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Schreiben Sie Ihren WWW-Navigator als SPA in Vue.js (optional: mit <a href="https://router.vuejs.org/guide/"
                                                                            target="_blank">Vue Router</a> und/oder mit
      <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a> als State Manager).
    </template>
    <template v-slot:solution>
      <div class="container">
        <div class="header">
          <h1>WWW-Navigator</h1>
        </div>
        <div class="topicDiv">
          <input type="button" v-for="topic in topics" v-bind:key="topic" :value="topic"
                 v-on:click="showSubMenuButtons(topic)">
        </div>
        <div class="topicDiv" v-if="currentTab">
          <input type="button" v-for="topic in subtopics" v-bind:key="topic" :value="topic"
                 v-on:click="showContent(topic)">
        </div>
        <div class="content" v-if="content">
          {{ content }}
        </div>
        <div class="references" v-if="references">
          <a class="referenceLinks" :href="references" target="_blank">{{ references }}</a>
          <font-awesome-icon icon="external-link-alt"/>
        </div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import json from "../../public/wwwNavigatorContent.json";

export default {
  name: "Woche10Aufgabe3",
  title: 'Web Engineering WS21/22 - Woche 10.3',
  components: {
    SolutionWithOverlay
  },
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
    this.topics = Object.keys(json)
    this.subtopics = Object.keys(json[this.topics[0]])
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  text-align: center;
  background-color: #00698b;
  border-radius: 8px;
  color: white;
  margin: 0 20px 20px 20px;
  height: calc(100vh - 61px - 40px - 20px);
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px - 20px);
  width: calc(100vw - 378px - 40px);
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
  flex-wrap: wrap;
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

.referenceLinks {
  color: white;
  font-size: 20px;
}

svg {
  color: deepskyblue;
  margin-left: 5px;
}
</style>
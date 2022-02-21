<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      <!-- todo add exercise -->
    </template>
    <template v-slot:solution>
      <div class="container">
        <h1>Einkaufsliste</h1>
        <div id="inputArea">
          <span>Enter a new item: </span>
          <input type="text" placeholder="item..." id="itemTextField">
          <input type="button" value="Add item" id="saveBtn" v-on:click="addItem">
        </div>
        <div id="listArea"></div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche04Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 4.1',
  components: {
    SolutionWithOverlay
  },
  methods: {
    addItem: function () {
      const item = document.getElementById('itemTextField')
      if (item.value === '') {
        return
      }
      const list = document.getElementById('listArea')
      const newItem = document.createElement('li')
      const btn = document.createElement('button')
      btn.textContent = 'Delete'
      btn.className = 'deleteBtn'
      btn.style.margin = '0 10px'
      const text = item.value
      btn.addEventListener('click', () => {
        document.getElementById('listArea').removeChild(document.getElementById(text))
      })
      newItem.textContent = item.value
      newItem.id = item.value
      newItem.appendChild(btn)
      list.appendChild(newItem)
      item.value = ''
    }
  },
}
</script>

<style scoped>
.container {
  height: calc(100vh - 61px - 40px);
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px);
}

h1 {
  font-weight: bold;
}

#inputArea {
  padding: 20px 0;
}

#saveBtn {
  padding: 0 10px;
  margin-left: 10px;
}
#listArea {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
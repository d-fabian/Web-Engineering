<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Implementieren Sie die interaktive Anwendung "Rednerliste mit Zeitmessung" selbstständig in JavaScript durch
      Nutzung der <a href="https://www.w3schools.com/js/js_htmldom.asp" target="_blank">DOM API</a> und der <a
        href="https://www.w3schools.com/js/js_timing.asp" target="_blank">Timer-Funktionen</a>. Neue Redner sollen auf
      Knopfdruck hinzugefügt werden können. Deren Uhr wird dann sofort automatisch gestartet und alle anderen Uhren
      angehalten. Bei jedem Redner soll die individuelle, gemessene Redezeit sekundengenau angezeigt werden. Für jeden
      Redner soll es einen eigenen Start-/Stopp-Button geben. Es soll immer nur eine Uhr laufen. Angezeigt werden sollen
      die bisherigen Summenzeiten aller Redebeiträge der betreffenden Person. Suchen Sie eine möglichst kurze und
      elegante Lösung. Achten Sie gleichzeitig auf gute Usability: z.B. wenn die Eingabe mit einem Return beendet wird,
      soll der Button-Click nicht mehr erforderlich sein, usw.
    </template>
    <template v-slot:solution>
      <div class="container">
        <h1>Rednerliste</h1>
        <div id="inputArea">
          <span>Neuer Redner: </span>
          <input type="text" placeholder="Name..." id="nameTextField">
          <input type="button" value="Hinzufügen" id="saveBtn" v-on:click="addPerson">
        </div>
        <div id="listArea">
        </div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche04Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 4.2',
  components: {
    SolutionWithOverlay
  },
  data: function () {
    return {
      timer: undefined,
      currentPerson: undefined
    }
  },
  methods: {
    addPerson() {
      const name = document.getElementById('nameTextField')
      if (name.value === '') {
        return
      }
      const list = document.getElementById('listArea')
      const newPerson = document.createElement('li')
      newPerson.textContent = name.value

      const time = document.createElement('span')
      time.textContent = ' 00:00:00'
      time.id = name.value + '-times'
      time.className = 'time'
      newPerson.appendChild(time)

      const btn = document.createElement('button')
      btn.textContent = 'Start!'
      btn.className = 'startStopBtn'
      btn.style.margin = '0 10px'
      btn.onclick = function () {
        this.startStopTime(name.value)
      }
      newPerson.appendChild(btn)
      list.appendChild(newPerson)

      name.value = ''

      this.addDeleteEventListeners()
      this.startStopTime(newPerson.textContent.slice(0, -6))
    },
    addDeleteEventListeners() {
      const allBtn = document.getElementsByClassName('startStopBtn')
      const allPersons = document.getElementById('listArea').getElementsByTagName('li')
      let deleteBtn
      let i = 0
      for (deleteBtn of allBtn) {
        const personName = allPersons[i++].textContent.slice(0, -6)
        deleteBtn.onclick = () => this.startStopTime(personName)
      }

    },
    startStopTime(person) {
      if (this.timer == null) {
        const personName = person.slice(0, -9)
        const allPersons = document.getElementById('listArea').getElementsByTagName('li')
        let onePerson
        for (onePerson of allPersons) {
          console.log(personName, onePerson.textContent.slice(0, -15))
          if (personName === onePerson.textContent.slice(0, -15)) {
            console.log('Los')
            const btn = onePerson.getElementsByClassName('startStopBtn')
            btn[0].textContent = 'Stopp!'
            this.currentPerson = personName

            this.timer = setInterval(function () {
              const time = document.getElementById(personName + '-times')
              const times = time.textContent.trim().split(':')
              ++times[0]
              --times[0]
              ++times[1]
              --times[1]
              if (++times[2] >= 60) {
                times[2] = '00'
                if (++times[1] >= 60) {
                  times[1] = '00'
                  times[0]++
                }
              }
              time.textContent = ' ' +
                  (times[0] < 10 ? '0' + times[0] : times[0]) + ':' +
                  (times[1] < 10 ? '0' + times[1] : times[1]) + ':' +
                  (times[2] < 10 ? '0' + times[2] : times[2])
            }, 1000)
          }
        }
      } else {
        const allPersons = document.getElementById('listArea').getElementsByTagName('li')
        let onePerson
        for (onePerson of allPersons) {
          const btn = onePerson.getElementsByClassName('startStopBtn')
          btn[0].textContent = 'Start!'
        }
        clearInterval(this.timer)
        this.timer = null

        if (this.currentPerson !== person.slice(0, -9)) {
          this.startStopTime(person)
        }
      }
    },
  }
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
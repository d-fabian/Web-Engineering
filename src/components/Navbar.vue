<template>
  <div id="navbar-wrapper" class="active">

    <div class="accordion-wrapper">
      <div class="week-wrapper" v-for="(week, weekIndex) in weeks" v-bind:key="weekIndex">
        <input type="radio" :id="'check'+week" name="radionButtons">
        <label :for="'check'+week">
          <font-awesome-icon icon="fa-solid fa-w"/>
          <!--          <font-awesome-icon :icon="'fa-solid fa-'+(weekIndex+1)"/>-->
          <font-awesome-icon v-for="(number, index) in getIcons(weekIndex+1)" v-bind:key="weekIndex+''+index+''+number"
                             :icon="number"/>
          &nbsp;&nbsp;{{ week }}&nbsp;&nbsp;</label>

        <div class="week-content">
          <ul>
            <li v-for="(content, exerciseIndex1) in weekContents[weekIndex]" v-bind:key="exerciseIndex1">
<!--              <font-awesome-icon v-if="content !== 'Bald verfügbar'" icon="fa-solid fa-a"/>                             &lt;!&ndash; todo remove v-if when all content ist available &ndash;&gt;-->
              <font-awesome-icon v-if="content !== 'Bald verfügbar'" :icon="getSubWeekIcons(content)[0]" style="color: black"/>
              <font-awesome-icon v-if="content !== 'Bald verfügbar' && getSubWeekIcons(content).length === 2" :icon="getSubWeekIcons(content)[1]" style="color: black"/>

<!--              <font-awesome-icon v-if="content !== 'Bald verfügbar'" :icon="test(content)"/>-->
<!--              <font-awesome-icon v-if="content !== 'Bald verfügbar'" :icon="'fa-solid fa-'+(exerciseIndex1+1)"/>        &lt;!&ndash; todo remove v-if when all content ist available &ndash;&gt;-->
              <router-link :to="weekRouteLinks[weekIndex][exerciseIndex1]"> {{ content }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line
  name: "Navbar",
  props: {
    weeks: Array,
    weekContents: Array,
    weekRouteLinks: Array
  },
  methods: {
    getIcons(index) {
      const result = []
      if (index < 10) {
        result.push('fa-solid fa-0')
        result.push('fa-solid fa-' + index)
      } else {
        for (let i = 0; i < index.toString().length; i++) {
          result.push('fa-solid fa-' + index.toString().charAt(i))
        }
      }
      return result
    },
    getSubWeekIcons(content) {
      const pattern = /(?<=Aufgabe.)(?<aufgabe>\d+)(?<teilaufgabe>\w+)?/g
      const result = pattern.exec(content)
      const aufgabe = result.groups.aufgabe
      const teilaufgabe = result.groups.teilaufgabe
      // const icon = `fa-solid fa-${aufgabe} ${teilaufgabe ? 'fa-' + teilaufgabe : ''}`
      const icon = []
      icon.push(`fa-solid fa-${aufgabe}`)
      if (teilaufgabe) icon.push(`fa-solid fa-${teilaufgabe}`)
      return icon
    }
  }
}
</script>

<style scoped>
/*
#navbar-wrapper {
  padding: 30px;
}

#navbar-wrapper a {
  font-weight: bold;
  color: #2c3e50;
}

#navbar-wrapper a.router-link-exact-active {
  color: #42b983;
}

#aboutButton1 {
  display: none;
}

#aboutButton:hover ~ #aboutButton1 {
  display: inline;
}

#test:hover ~ #dropdown {
  display: block;
}
*/
/**********************************************/


/*** Styling and animation navbar ***/
#navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none; /* no scrollbar in Firefox */
  -ms-overflow-style: none; /* no scrollbar in IE and Edge */
  width: 0;
  transition: all .5s linear;
  padding: 0;
  background: #009ee0;
  opacity: 0;
}

#navbar-wrapper.active {
  opacity: 1;
  padding: 6px 14px;
  width: 350px;
}

.accordion-wrapper {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 1);
  width: 100%;
  margin: 50px 0;
  background: deepskyblue;
}

.week-wrapper {
  color: white;
  overflow: hidden;
}

input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

label {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  background: deepskyblue;
  cursor: pointer;
  gap: 1px;
}

label::after {
  opacity: 0;
  content: "\276F";
  width: 16px;
  height: 16px;
  text-align: center;
  transition: all .2s linear;
}

#navbar-wrapper.active label::after {
  opacity: 1;
}

label:hover {
  background: rgba(0, 0, 0, .2);
}

.week-content {
  max-height: 0;
  color: rgba(4, 57, 94, 1);
  background: #0099cc;
  transition: all .2s ease-out;
  padding: 0 5px;
}

input:checked + label { /* .accordion-label needs to be directly after input */
  background: rgba(0, 0, 0, .2);
}

input:checked + label::after {
  transform: rotate(90deg);
}

input:checked ~ .week-content {
  max-height: 100vh;
  padding: 10px;
  transition: all .2s ease-in;
  transition-delay: .2s;
}

ul {
  display: flex;
  flex-direction: column;
  padding: 0;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 5px;
  width: calc(100% - 10px);
  list-style: none;
  margin-bottom: 10px;

  border: 1px solid black;
  border-radius: 16px;
  background: deepskyblue;
}

li:hover {
  background: lightblue;
}

a {
  color: black;
}

li:last-child {
  margin: 0;
}

li > *:last-child {
  margin-left: 10px;
}
</style>
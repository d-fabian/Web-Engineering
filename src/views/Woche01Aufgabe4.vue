<template>
  <exercise-solution class="active">
    <template v-slot:exercise>
      Gegeben ist <a href="https://kaul.inf.h-brs.de/wem/assets/img/survey.png" target="_blank">folgendes</a>
      HTML-Wireframe (Survey Form). Mit welchem HTML- und CSS-Code kann man diesen Wireframe
      möglichst exakt nachbilden?
    </template>
    <template v-slot:solution>
      <div id="body">
        <h1 style="text-align: center; font-family: 'Arial Black',sans-serif; padding-top: 10px">Survey Form</h1>
        <div id="innerBox">
          <p>
            Let us know how we can improve freeCodeCamp
          </p>
          <div class="table">
            <div class="table-row">
              <div class="table-cell-left"><label for="nameField">* Name:</label></div>
              <div class="table-cell-right"><input type="text" id="nameField" placeholder="Enter your name"></div>
            </div>
            <div class="table-row">
              <div class="table-cell-left"><label for="emailField">* Email:</label></div>
              <div class="table-cell-right"><input type="email" id="emailField" placeholder="Enter your Email"></div>
            </div>
            <div class="table-row">
              <div class="table-cell-left"><label for="ageField">* Age:</label></div>
              <div class="table-cell-right"><input type="number" id="ageField" placeholder="Age"></div>
            </div>
            <div class="table-row">
              <div class="table-cell-left"><label for="roleSelection">Which option best describes your current
                role?</label></div>
              <div class="table-cell-right"><select id="roleSelection">
                <option>Student</option>
                <option>Foo</option>
                <option>Bar</option>
              </select></div>
            </div>
            <div class="table-row">
              <div class="table-cell-left">* How likely is that you would recommend freeCodeCamp to a friend?</div>
              <div class="table-cell-right"><input type="radio" id="definitely" name="wouldRecommend"> <label
                  for="definitely">Definitely</label><br>
                <input type="radio" id="maybe" name="wouldRecommend"> <label for="maybe">Maybe</label><br>
                <input type="radio" id="notSure" name="wouldRecommend"> <label for="notSure">Not sure</label></div>
            </div>
            <div class="table-row">
              <div class="table-cell-left"><label for="likeMostSelection">What do you like most in FCC:</label></div>
              <div class="table-cell-right"><select id="likeMostSelection">
                <option selected hidden>Select an option</option>
                <option>Foo</option>
                <option>Bar</option>
              </select></div>
            </div>
            <div class="table-row">
              <div class="table-cell-left">Things that should be improved in the future (Check all that apply):</div>
              <div class="table-cell-right"><input type="checkbox" id="frontEnd" name="improveThings"><label
                  for="frontEnd">Front-end Projects</label><br>
                <input type="checkbox" id="backend" name="improveThings"><label for="backend">Back-end
                  Projects</label><br>
                <input type="checkbox" id="dataVisualization" name="improveThings"><label for="dataVisualization">Data
                  Visualization</label></div>
            </div>
          </div>
        </div>
        <div style="height: 20px"></div>
      </div>
    </template>
  </exercise-solution>
</template>

<script>
import ExerciseSolution from "@/components/ExerciseSolution";

export default {
  name: "Woche01Aufgabe4",
  title: 'Web Engineering WS21/22 - Woche 1.4',
  components: {
    ExerciseSolution
  }
}
</script>

<style scoped>
#body {
  width: 100vw;
  background-color: #b2d6d1;
  transition: .5s linear;
}

.active #body {
  width: calc(100vw - 378px);
}

#innerBox {
  background-color: white;
  box-sizing: border-box;
  text-align: center;
  margin: 20px;
}

p {
  font-family: Arial, sans-serif;
}

.table {
  display: table;
  border-spacing: 15px;
  margin: auto;
}

.table-row {
  display: table-row;
}

.table-cell-left {
  display: table-cell;
  text-align: right;
  max-width: 300px;
}

.table-cell-right {
  display: table-cell;
  text-align: left;
  max-width: 300px;
}
</style>
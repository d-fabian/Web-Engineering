<template>
  <div id="container">
    <exercise-solution class="active">
      <template v-slot:exercise>
        <ol>
          <li class="exerciseBulletPoints">Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?
          </li>
          <li class="exerciseBulletPoints">Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?
          </li>
          <li class="exerciseBulletPoints">Was wäre der Preis für die garantierte Verhinderung von “broken links“?</li>
        </ol>
      </template>
      <template v-slot:solution>
        <ol>
          <li class="solutionTopBulletPoints"></li>
          <ul class="solutionBulletPoints">
            <li>TBL hat die Wagheit des Konzepts nicht verstanden (er verwechselt es mit der Evolvierbarkeit)</li>
            <li>Die Hypertext-Community hatte den Eindruck, dass sie schon mehr erreicht hatten als TBL (insbesondere
              wegen 'broken Links')
            </li>
          </ul>
          <li class="solutionTopBulletPoints"></li>
          <ul class="solutionBulletPoints">
            <li>Die Unterteilung in die verschiedenen orthogonalen Technologien:</li>
            <ul class="solutionBulletPoints">
              <li>HTTP</li>
              <li>HTML</li>
              <li>eindeutige Identifikation (URI)</li>
            </ul>
          </ul>
          <li class="solutionTopBulletPoints"></li>
          <ul class="solutionBulletPoints">
            <li>zentrale Geschlossenheit</li>
            <li>Kontrolle</li>
          </ul>
        </ol>
      </template>
    </exercise-solution>
  </div>
</template>

<script>
import ExerciseSolution from "@/components/ExerciseSolution";

export default {
  name: "Woche01Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 1.1',
  components: {
    ExerciseSolution
  },
}
</script>

<style scoped>
ol {
  margin-left: 20px;
}

.exerciseBulletPoints {
  margin: 20px 0;
}

.solutionTopBulletPoints {
  margin-top: 20px;
}

.solutionBulletPoints {
  margin-left: 30px;
}
</style>
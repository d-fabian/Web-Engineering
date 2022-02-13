<template>
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
          <li>TBL hat die Wagheit des Konzepts nicht verstanden<br>(er verwechselt es mit der Evolvierbarkeit)</li>
          <li>Die Hypertext-Community hatte den Eindruck,<br>dass sie schon mehr erreicht hatten als TBL (insbesondere
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
        <ul class="solutionBulletPoints lastPoint">
          <li>zentrale Geschlossenheit</li>
          <li>Kontrolle</li>
        </ul>
      </ol>
    </template>
  </exercise-solution>
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
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

li {
  text-align: left;
  margin: 10px 0;
}

li::marker {
  font-weight: bold;
}

.exerciseBulletPoints {
  margin: 20px 0;
}

.solutionTopBulletPoints {
  margin-top: 20px;
  font-weight: bold;
}

.solutionBulletPoints {
  margin-left: 30px;
}

.lastPoint {
  margin-bottom: 30px;
}
</style>
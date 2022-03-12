<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Siehe Aufgabenstellung direkt auf der Seite.
    </template>
    <template v-slot:solution>
      <div class="container">
        <ol>
          <li class="exerciseBulletPoints">Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?
          </li>
          <ul class="solutionBulletPoints">
            <li>TBL hat die Wagheit des Konzepts nicht verstanden<br>(er verwechselt es mit der Evolvierbarkeit)</li>
            <li>Die Hypertext-Community hatte den Eindruck,<br>dass sie schon mehr erreicht hatten als TBL (insbesondere
              wegen 'broken Links')
            </li>
          </ul>
          <li class="exerciseBulletPoints">Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?
          </li>
          <ul class="solutionBulletPoints">
            <li>Die Unterteilung in die verschiedenen orthogonalen Technologien:</li>
            <ul class="solutionBulletPoints">
              <li>HTTP</li>
              <li>HTML</li>
              <li>eindeutige Identifikation (URI)</li>
            </ul>
          </ul>
          <li class="exerciseBulletPoints">Was wäre der Preis für die garantierte Verhinderung von “broken links“?</li>
          <ul class="solutionBulletPoints lastPoint">
            <li>zentrale Geschlossenheit</li>
            <li>Kontrolle</li>
          </ul>
        </ol>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche01Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 1.1',
  components: {
    SolutionWithOverlay,
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 61px - 40px);
  width: 100vw;
  transition: 0.5s linear;
  font-size: 20px;
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}

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


.solutionBulletPoints {
  margin-left: 30px;
}

.lastPoint {
  margin-bottom: 30px;
}
</style>
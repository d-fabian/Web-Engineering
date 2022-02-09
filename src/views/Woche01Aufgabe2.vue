<template>
  <exercise-solution class="active">
    <template v-slot:exercise>
      <ol>
        <li class="exerciseBulletPoints">Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?</li>
        <li class="exerciseBulletPoints">Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?</li>
        <li class="exerciseBulletPoints">Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? Was
          können Sie dagegen tun?
        </li>
        <li class="exerciseBulletPoints">Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? Was
          können Sie dagegen tun?
        </li>
        <li class="exerciseBulletPoints">In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen des
          Servers vor dem eigentlichen Zugriff erfragen soll. Aus Performanzgründen soll die Abfrage jedoch cacheable
          sein. Wie könnten Sie dafür eine Lösung angehen?
        </li>
      </ol>
    </template>
    <template v-slot:solution>
      <ol>
        <li class="solutionTopBulletPoints"></li>
        <ul class="solutionBulletPoints">
          <li>"alles in Ordnung"</li>
          <li>Anfrage erfolgreich verlaufen</li>
        </ul>
        <li class="solutionTopBulletPoints"></li>
        <ul class="solutionBulletPoints">
          <li>Seite existiert an der angegebenen Stelle nicht mehr</li>
          <li>User wird zur "richtigen" Seite weitergeleitet</li>
        </ul>
        <li class="solutionTopBulletPoints"></li>
        <ul class="solutionBulletPoints">
          <li>Anfrage kann nicht verarbeitet werden (client-seitiger Fehler)</li>
          <li>User sollte URL überprüfen, gegebenenfalls anpassen und erneut versuchen</li>
        </ul>
        <li class="solutionTopBulletPoints"></li>
        <ul class="solutionBulletPoints">
          <li>Server hat die Anfrage zwar verstanden, lässt den Client aber nicht zugreifen</li>
          <li>Client sollte seine Berechtigungen für diese Seite überprüfen</li>
        </ul>
        <li class="solutionTopBulletPoints"></li>
        <ul class="solutionBulletPoints lastPoint">
          <li>über eine zusätzliche GET Anfrage oder auch nur eine HEAD Anfrage und die gewünschten Informationen dort
            unterbringen
          </li>
        </ul>
      </ol>
    </template>
  </exercise-solution>
</template>

<script>
import ExerciseSolution from "@/components/ExerciseSolution";

export default {
  name: "Woche01Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 1.2',
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

.lastPoint {
  margin-bottom: 30px;
}
</style>
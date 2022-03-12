<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Siehe Aufgabenstellung direkt auf der Seite.
    </template>
    <template v-slot:solution>
      <div class="container">
        <ol>
          <li class="exerciseBulletPoints">Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?</li>
          <ul class="solutionBulletPoints">
            <li class="test">"alles in Ordnung"</li>
            <li>Anfrage erfolgreich verlaufen</li>
          </ul>
          <li class="exerciseBulletPoints">Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?
          </li>
          <ul class="solutionBulletPoints">
            <li>Seite existiert an der angegebenen Stelle nicht mehr</li>
            <li>User wird zur "richtigen" Seite weitergeleitet</li>
          </ul>
          <li class="exerciseBulletPoints">Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten?
            Was
            können Sie dagegen tun?
          </li>
          <ul class="solutionBulletPoints">
            <li>Anfrage kann nicht verarbeitet werden (client-seitiger Fehler)</li>
            <li>User sollte URL überprüfen, gegebenenfalls anpassen und erneut versuchen</li>
          </ul>
          <li class="exerciseBulletPoints">Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten?
            Was
            können Sie dagegen tun?
          </li>
          <ul class="solutionBulletPoints">
            <li>Server hat die Anfrage zwar verstanden, lässt den Client aber nicht zugreifen</li>
            <li>Client sollte seine Berechtigungen für diese Seite überprüfen</li>
          </ul>
          <li class="exerciseBulletPoints">In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen
            des
            Servers vor dem eigentlichen Zugriff erfragen soll.<br>Aus Performanzgründen soll die Abfrage jedoch
            cacheable
            sein. Wie könnten Sie dafür eine Lösung angehen?
          </li>
          <ul class="solutionBulletPoints lastPoint">
            <li>über eine zusätzliche GET Anfrage oder auch nur eine HEAD Anfrage<br>und die gewünschten Informationen
              dort
              unterbringen
            </li>
          </ul>
        </ol>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche01Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 1.2',
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
  margin-left: 40px;
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
  font-weight: bold;
}

.solutionBulletPoints {
  margin-left: 30px;
}

.lastPoint {
  margin-bottom: 30px;
}
</style>
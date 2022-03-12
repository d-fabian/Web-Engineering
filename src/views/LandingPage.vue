<template>
  <div id="landingPageDiv" class="active">
    <h1>Solution Navigator zur Lehrveranstaltung Web Engineering</h1>
    <p>Dieser Solution Navigator ist im Rahmen der Lehrveranstaltung "Web Engineering" im Masterstudiengang Informatik
      an der Hochschule Bonn-Rhein-Sieg im Wintersemester 2021/2022 entstanden. Er präsentiert die in dieser
      Lehrveranstaltung gestellten Aufgaben.</p>
    <p>Bitte wählen Sie eine gewünschte Aufgabe aus dem Menü auf der linken Seite aus.</p>
  </div>
</template>

<script>

export default {
  name: 'LandingPage',
  title: 'Web Engineering WS21/22 - Startseite',
}
</script>

<style>
#landingPageDiv {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: calc(100vh - 61px);
  width: 100vw;
  transition: 0.5s linear;
}

.active#landingPageDiv {
  height: 100vh;
  width: calc(100vw - 378px);
}

h1 {
  font-size: 40px;
}

p {
  font-size: 24px;
}
</style>

<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Gegeben ist <a href="https://kaul.inf.h-brs.de/wem/assets/img/landing.png" target="_blank">folgendes</a>
      HTML-Wireframe (Product Landing Page). Mit welchem HTML- und CSS-Code kann man diesen Wireframe
      möglichst exakt nachbilden?
    </template>
    <template v-slot:solution>
      <div class="container">
        <div id="header">
          <span>The book series</span>
          <span>Testimonials</span>
          <span>The Author</span>
          <span>Free resources</span>
        </div>
        <div id="main">
          <b>You dont know JavaScript</b>
          <div class="table">
            <div class="table-row">
              <div class="table-cell">
                <img src="../assets/landing-img.png" alt="JavaScript Complete Series Book">
              </div>
              <div class="table-cell">
                Dont't just drift through Javascript. <br><br>
                Understand how Javascript works <br><br>
                Start your journey through the bumpy side of Javascript <br><br>
                <button id="orderButton">
                  ORDER YOUR COPY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div id="footerText">
            The first ebook in the book series is absolutely free.
          </div>
          <button id="findMoreButton">
            FIND OUT MORE ABOUT THIS OFFER
          </button>
        </div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche01Aufgabe5",
  title: 'Web Engineering WS21/22 - Woche 1.5',
  components: {
    SolutionWithOverlay,
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  transition: .5s linear;
}

.active .container {
  width: 100%;
}

#header {
  color: white;
  background-color: #363636;
  text-align: center;
  font-size: 20pt;
  padding: 15px;
}

span {
  margin: 20px;
}

#main {
  background-color: #ebeae6;
  text-align: center;
  font-size: 25pt;
  padding: 20px;
}

.table {
  display: table;
  margin: auto;
  border-spacing: 20px;
  padding: 15px;
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

img {
  float: left;
  max-height: calc(100vh - 500px);
}

#orderButton {
  background-color: #f88e37;
  font-size: 15pt;
  color: white;
  padding: 15px;
}

#footer {
  background-color: #011926;
  text-align: center;
  padding: 20px;
}

#footerText {
  color: white;
  padding: 20px;
  font-size: 15pt;
}

#findMoreButton {
  background-color: #f88e37;
  font-size: 15pt;
  color: white;
  padding: 20px;
  width: 500px;
}
</style>
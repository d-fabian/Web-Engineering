<template>
  <div id="app">
    <topbar/>
    <menu-button/>
    <navbar
        :weeks="['Woche 1: Einführung', 'Woche 2: Responsives Web', 'Woche 3: JavaScript', 'Woche 4: DOM',
        'Woche 5: Asynchron', 'Woche 6: SVG', 'Woche 7: Node & npm & Deno', 'Woche 8: Modular Web',
        'Woche 9: Progressive Web Apps', 'Woche 10: Vue', 'Woche 11: WebAssembly', 'Woche 12: Security'] "
        :week-contents="[
            ['Aufgabe 1: Fachliche Argumentation über Erfolgsprinzipien des WWW','Aufgabe 2: HTTP','Aufgabe 3: Wireframe with HTML and CSS (Tribute Page)', 'Aufgabe 4: Wireframe with HTML and CSS (Survey Form)', 'Aufgabe 5: Wireframe with HTML and CSS (Product Landing Page)'],
            ['Aufgabe 1: Responsiv mit Flexbox Desktop-First','Aufgabe 2: Responsiv mit Grid Mobile-First', 'Aufgabe 3a Flexbox','Aufgabe 3b Grid','Aufgabe 4'], // todo titel hinzufügen
            ['Aufgabe 1:', 'Aufgabe 2:'],
            ['Aufgabe 1:', 'Aufgabe 2:', 'Aufgabe 3:', 'Aufgabe 4: HTML-Editor'],
            ['Aufgabe 1:', 'Aufgabe 2:', 'Aufgabe 3: Web Worker', 'Aufgabe 4: WWW-Navigator'],
            ['Aufgabe 1: Statistik-Balkendiagramm in SVG', 'Aufgabe 2: SVG Bezier-Animation', 'Aufgabe 3: Kalligraphie-Editor in SVG'],
            ['Aufgabe 1: File Generatoren'],
            ['Aufgabe 1a: Web-Komponenten erstellen', 'Aufgabe 1b: Web-Komponenten erstellen', 'Aufgabe 1c: Web-Komponenten erstellen', 'Aufgabe 1d: Web-Komponenten erstellen', 'Aufgabe 1e: Web-Komponenten erstellen', 'Aufgabe 1f: Web-Komponenten erstellen', 'Aufgabe 2: LitElement Menü-Komponente', 'Aufgabe 3: LitElement WWW-Navigator'],
            ['Aufgabe 1: PWA'],
            ['Aufgabe 1: Komponente in Vue.js: Word Count', 'Aufgabe 2: Menü-Komponente', 'Aufgabe 3: Vue.js WWW-Navigator'],
            ['Bald verfügbar'],
            ['Bald verfügbar']]"
        :week-route-links="[
            ['/woche1aufgabe1', '/woche1aufgabe2', '/woche1aufgabe3', '/woche1aufgabe4', '/woche1aufgabe5'],
            ['/woche2aufgabe1', '/woche2aufgabe2', '/woche2aufgabe3flex', '/woche2aufgabe3grid', '/woche2aufgabe4'],
            ['/woche3aufgabe1', '/woche3aufgabe2'],
            ['/woche4aufgabe1', '/woche4aufgabe2', '/woche4aufgabe3', '/woche4aufgabe4'],
            ['/woche5aufgabe1', '/woche5aufgabe2', '/woche5aufgabe3', '/woche5aufgabe4'],
            ['/woche6aufgabe1', '/woche6aufgabe2', '/woche6aufgabe3'],
            ['/woche7aufgabe1'],
            ['/woche8aufgabe1a', '/woche8aufgabe1b', '/woche8aufgabe1c', '/woche8aufgabe1d', '/woche8aufgabe1e', '/woche8aufgabe1f', '/woche8aufgabe2', '/woche8aufgabe3'],
            ['/woche9aufgabe1'],
            ['/woche10aufgabe1', '/woche10aufgabe2', '/woche10aufgabe3'],
            ['/'],
            ['/']]"
    ></navbar>
    <div id="routerViewDiv">
      <router-view/>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#routerViewDiv {
  position: absolute;
  left: 0;
  top: 61px;
  width: 100%;
  height: calc(100vh - 61px);
  transition: all .5s linear;
}

#navbar-wrapper.active ~ #routerViewDiv {
  top: 0;
  left: calc(350px + 28px);
  width: calc(100vw - (350px + 28px));
  height: 100vh;
}

</style>

<script>
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import MenuButton from "@/components/MenuButton";

export default {
  components: {MenuButton, Topbar, Navbar}
}
</script>
<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Siehe Aufgabenbeschreibung direkt über den Code-Blöcken.
    </template>
    <template v-slot:solution>
      <div class="mainContent">
        <div>
          <h1>Hilfsfunktionen</h1>
        </div>
        <pre><highlight-code lang="javascript">
          function add(x, y) {
            return x + y
          }
        </highlight-code></pre>
        <button v-if="!isActiveArray[0]" @click="openInputFields(0)">Funktion ausführen</button>
        <execute-function :num-input-fields="2" @executeFunction="add" :solution="solution" :is-active="isActiveArray[0]"></execute-function>

        <pre><highlight-code lang="javascript">
          function sub(x, y) {
            return x - y
          }
        </highlight-code></pre>
        <button v-if="!isActiveArray[1]" @click="openInputFields(1)">Funktion ausführen</button>
        <execute-function :num-input-fields="2" @executeFunction="sub" :solution="solution" :is-active="isActiveArray[1]"></execute-function>

        <pre><highlight-code lang="javascript">
          function mul(x, y) {
            return x * y
          }
        </highlight-code></pre>
        <button v-if="!isActiveArray[2]" @click="openInputFields(2)">Funktion ausführen</button>
        <execute-function :num-input-fields="2" @executeFunction="mul" :solution="solution" :is-active="isActiveArray[2]"></execute-function>

        <pre><highlight-code lang="javascript">
          function div(x, y) {
            return x / y
          }
        </highlight-code></pre>
        <button v-if="!isActiveArray[3]" @click="openInputFields(3)">Funktion ausführen</button>
        <execute-function :num-input-fields="2" @executeFunction="div" :solution="solution" :is-active="isActiveArray[3]"></execute-function>

        <div>
          <h1>Aufgaben</h1>
        </div>
        <div class="exercise">
          Schreiben Sie eine Funktion
          <code>identity_function()</code>
          , die ein Argument als Parameter entgegen nimmt und eine Funktion zurück gibt, die dieses Argument zurück
          gibt.
        </div>
        <pre><highlight-code lang="javascript">
          function identity_function(x) {
            return function () {
              return x
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine Addier-Funktion <code>addf()</code>, so dass <code>addf(x)(y)</code> genau <code>x +
          y</code>
          zurück gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. <code>addf(x)</code> liefert eine Funktion, die
          auf <code>y</code> angewandt wird.)
        </div>
        <pre><highlight-code lang="javascript">
          function addf(x) {
            return function (y) {
              return x + y
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine Funktion <code>applyf()</code>, die aus einer binären Funktion wie <code>add(x,y)</code>
          eine
          Funktion <code>addf</code> berechnet,
          die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. <code>addf = applyf(add); addf(x)(y)</code> soll
          <code>add(x,y)</code>
          liefern.
          Entsprechend <code>applyf(mul)(5)(6)</code> soll <code>30</code> liefern, wenn <code>mul</code> die binäre
          Multiplikation ist.
        </div>
        <pre><highlight-code lang="javascript">
          function applyf(func) {
            return function (x) {
              return function (y) {
                return func(x, y)
              }
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine Funktion <code>curry()</code> (von Currying), die eine binäre Funktion und ein Argument
          nimmt, um daraus
          eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. <code>add3 = curry(add,
          3);add3(4)</code> ergibt <code>7</code>.
          <code>curry(mul, 5)(6)</code> ergibt <code>30</code>.
        </div>
        <pre><highlight-code lang="javascript">
          function curry(func, x) {
            return function (y) {
              return func(x, y)
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Erzeugen Sie die <code>inc</code>-Funktion mit Hilfe einer der Funktionen <code>addf</code>,
          <code>applyf</code>
          und <code>curry</code> aus den letzten Aufgaben,
          ohne die Funktion <code>inc()</code> selbst zu implementieren. (<code>inc(x)</code> soll immer <code>x +
          1</code> ergeben und lässt sich natürlich auch
          direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten
          der
          <code>inc()</code>-Implementierung zu schreiben?
        </div>
        <pre><highlight-code lang="javascript">
          function inc1(x) {
            return addf(x)(1)
          }

          function inc2(x) {
            return applyf(add)(x)(1)
          }

          function inc3(x) {
            return curry(add, 1)(x)
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine Funktion <code>methodize()</code>, die eine binäre Funktion (z.B. <code>add</code>,
          <code>mul</code>) in eine unäre Methode
          verwandelt. Nach <code>Number.prototype.add = methodize(add);</code> soll <code>(3).add(4)</code> genau
          <code>7</code> ergeben.
        </div>
        <pre><highlight-code lang="javascript">
          function methodize(func) {
            return function (x) {
              return func(this, x)
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine Funktion <code>demethodize()</code>, die eine unäre Methode (z.B. <code>add</code>,
          <code>mul</code>) in eine binäre Funktion
          umwandelt. <code>demethodize(Number.prototype.add)(5, 6)</code> soll <code>11</code> ergeben.
        </div>
        <pre><highlight-code lang="javascript">
          function demethodize(func) {
            return function (x, y) {
              return func. apply(x, [y])
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine Funktion <code>twice()</code>, die eine binäre Funktion in eine unäre Funktion umwandelt,
          die
          den einen
          Parameter zweimal weiter reicht. Z.B. <code>var double = twice(add); double(11)</code> soll <code>22</code>
          ergeben; <code>var square =
          twice(mul); square(11)</code> soll <code>mul(11,11) === 121</code> ergeben.
        </div>
        <pre><highlight-code lang="javascript">
          function twice(func) {
            return function (x) {
              return func(x, x)
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine Funktion <code>composeu()</code>, die zwei unäre Funktionen in eine einzelne unäre Funktion
          transformiert,
          die beide nacheinander aufruft, z.B. soll <code>composeu(double, square)(3)</code> genau <code>36</code>
          ergeben.
        </div>
        <pre><highlight-code lang="javascript">
          function composeu(funcA, funcB) {
            return function (x) {
              return funcB(funcA(x))
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine Funktion <code>composeb()</code>, die zwei binäre Funktionen in eine einzelne Funktion
          transformiert, die
          beide nacheinander aufruft, z.B. <code>composeb(add, mul)(2, 3, 5)</code> soll <code>25</code> ergeben.
        </div>
        <pre><highlight-code lang="javascript">
          function composeb(funcA, funcB) {
            return function (x, y, z) {
              return funcB(funcA(x, y), z)
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine Funktion <code>once()</code>, die einer anderen Funktion nur einmal erlaubt, aufgerufen zu
          werden, z.B.
          <code>add_once = once(add); add_once(3, 4)</code> soll beim ersten Mal <code>7</code> ergeben, beim zweiten
          Mal
          soll jedoch <code>add_once(3, 4)</code>
          einen Fehlerabbruch bewirken.
        </div>
        <pre><highlight-code lang="javascript">
          function once(func) {
            let alreadyCalled = false
            return function (x, y) {
              if (!alreadyCalled) {
                alreadyCalled = true
                return func(x, y)
              }
              throw new Error('Method was already called')
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine Fabrik-Funktion <code>counterf()</code>, die zwei Funktionen <code>inc()</code> und
          <code>dec()</code> berechnet, die einen Zähler hoch- und herunterzählen. Z.B. <code>counter =
          counterf(10);</code> Dann soll <code>counter.inc()</code>
          <code>11</code> und <code>counter.dec()</code> wieder <code>10</code> ergeben.
        </div>
        <pre><highlight-code lang="javascript">
          function counterf(start = 0) {
            let counter = start
            return {
              inc: fuction () {
                counter++
                return counter
              },
              dec: fuction () {
                counter--
                return counter
              }
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Schreiben Sie eine rücknehmbare Funktion <code>revocable()</code>, die als Parameter eine Funktion nimmt und
          diese bei Aufruf ausführt. Sobald die Funktion aber mit <code>revoke()</code> zurück genommen wurde, führt ein
          erneuter Aufruf zu einem Fehler. Z. B. <br>
          <code>temp = revocable(alert);</code><br>
          <code>temp.invoke(7); // führt zu alert(7);</code><br>
          <code>temp.revoke();</code><br>
          <code>temp.invoke(8); // Fehlerabbruch!</code>
        </div>
        <pre><highlight-code lang="javascript">
          function revocable(func) {
            return {
              invoke: function (y) {
                if (func !== undefined){
                return func(y)
                }
                throw new Error('Function not set or revoked!')
              },
              revoke: function () {
                func = undefined
              }
            }
          }
        </highlight-code></pre>

        <div class="exercise">
          Implementieren Sie ein "Array Wrapper"-Objekt mit den Methoden get, store und append, so dass ein Angreifer
          keinen Zugriff auf das innere, private Array hat.
          <br>
          <code>my_vector = vector();</code><br>
          <code>my_vector.append(7);</code><br>
          <code>my_vector.store(1, 8);</code><br>
          <code>my_vector.get(0) // 7</code><br>
          <code>my_vector.get(1) // 8</code>
        </div>
        <pre><highlight-code lang="javascript">
          function vector() {
            let array = []
            return {
              append: function (x) {
                array. push(x)
              },
              store: function (x, y) {
                array[x] = y
              },
              get: function (x) {
                return array[x]
              }
            }
          }
        </highlight-code></pre>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import ExecuteFunction from "@/components/ExecuteFunction";
import myMethods from '../../woche03/a03.01'

export default {
  name: "Woche03Aufgabe1",
  title: 'Web Engineering WS21/22 - Woche 3.1',
  components: {
    ExecuteFunction,
    SolutionWithOverlay
  },
  data() {
    return {
      solution: undefined,
      isActiveArray: [],
    }
  },
  mounted() {
    this.isActiveArray = new Array(2).fill(false)
  },
  methods: {
    openInputFields(number) {
      this.isActiveArray = new Array(2).fill(false)
      this.isActiveArray[number] = true
      this.solution = undefined
    },
    add(array) {
      this.solution = myMethods.add(parseFloat(array[0]), parseFloat(array[1]))
    },
    sub(array) {
      this.solution = myMethods.sub(parseFloat(array[0]), parseFloat(array[1]))
    },
    mul(array) {
      this.solution = myMethods.mul(parseFloat(array[0]), parseFloat(array[1]))
    },
    div(array) {
      this.solution = myMethods.div(parseFloat(array[0]), parseFloat(array[1]))
    },
  }
}
</script>

<style scoped>
.mainContent {
  display: flex;
  flex-direction: column;
  width: calc(100vw);
  height: calc(100vh - 61px - 40px);
  overflow-x: hidden;
  transition: 0.5s linear;
}

.active .mainContent {
  width: calc(100vw - 378px);
  height: calc(100vh - 40px);
}

h1 {
  margin: 15px;
}

.exercise {
  margin: 10px;
  padding: 5px;
}

code {
  background-color: lightgray;
  font-weight: bold;
  border-radius: 4px;
  padding: 2px;
  margin: 4px;
}

pre {
  text-align: left;
  margin: 5px 10px;
  font-size: 14px;
}

button {
  align-self: center;
  padding: 0 10px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>
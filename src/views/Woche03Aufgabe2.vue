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
        <pre><highlight-code lang="javascript">
          function sub(x, y) {
            return x - y
          }
        </highlight-code></pre>
        <pre><highlight-code lang="javascript">
          function mul(x, y) {
            return x * y
          }
        </highlight-code></pre>
        <pre><highlight-code lang="javascript">
          function div(x, y) {
            return x / y
          }
        </highlight-code></pre>

        <div>
          <h1>Aufgaben</h1>
        </div>
        <!-- 3.2.1 -->
        <div class="exercise">
          Make a function that makes a publish/subscribe object. It will reliably deliver all publications to all
          subscribers in the right order.<br>
          <code>my_pubsub = pubsub();</code><br>
          <code>my_pubsub.subscribe(alert);</code><br>
          <code>my_pubsub.publish("It works!"); // alert("It works!")</code>
        </div>
        <pre><highlight-code lang="javascript">
          function pubsub() {
            let subList = [];
            return {
              pub: function(el) {
                subList.forEach(s => s(el))
              },
              sub: function(func) {
                subList.push(func);
              }
            }
          }
        </highlight-code></pre>
        <!-- 3.2.2 -->
        <div class="exercise">
          Make a factory that makes functions that generate unique symbols. <br>
          <code>gensym = gensymf('G');</code><br>
          <code>gensym() // 'G0'</code><br>
          <code>gensym() // 'G1'</code><br>
          <code>gensym() // 'G2'</code><br>
          <code>gensym() // 'G3'</code>
        </div>
        <pre><highlight-code lang="javascript">
          function gensymf(x) {
            let i = 0
            return function () {
              let result = x + i
              while (true) {
                result = x + i
                i += 1
                return console.log(result)
              }
            }
          }
        </highlight-code></pre>

        <!-- 3.2.3 -->
        <div class="exercise">
          Make a function that returns a function that will return the next fibonacci number. <br>
          <code>var fib = fibonaccif(0, 1);</code><br>
          <code>fib() // 0</code><br>
          <code>fib() // 1</code><br>
          <code>fib() // 1</code><br>
          <code>fib() // 2</code><br>
          <code>fib() // 3</code><br>
          <code>fib() // 5</code>
        </div>
        <pre><highlight-code lang="javascript">
          function fibonaccif() {
            const result = {0:0, 1:1, 2:1, 3:2, 4:3}
            let i = -1
            return function () {
              if (i === -1) {
                i++
                return console.log(0)
              }
              if (i === 0) {
                i++
                return console.log(1)
              }
              while (true) {
                i++
                let next = result[i-1] + result[i-2]
                result[i] = next
                return console.log(next)
              }
            }
          }
        </highlight-code></pre>

        <!-- 3.2.4 -->
        <div class="exercise">
          Write a function that adds from many invocations, until it sees an empty invocation.<br>
          <code>addg(3)(4)(5)() // 12</code><br>
          <code>addg(1)(2)(4)(8)() // 15</code>
        </div>
        <pre><highlight-code lang="javascript">
          function addg(x) {
            let sum = x
            let computeNext = function (number) {
              if(!number) {
                return sum
              }
              sum += number
              return computeNext
            }
            return computeNext
          }
        </highlight-code></pre>

        <!-- 3.2.5 -->
        <div class="exercise">
          Write a function that will take a binary function and apply it to many invocations.<br>
          <code>applyg(add)(3)(4)(5)() // 12</code><br>
          <code>applyg(add)(1)(2)(4)(8)() // 15</code>
        </div>
        <pre><highlight-code lang="javascript">
          function applyg(func) {
              let a = undefined
              let b = function (number) {
                  if(!number) {
                      return a
                  }
                  a = func(a, number);
                  return b
              }
              return function(number) {
                  a = number
                  return b
              }
          }
        </highlight-code></pre>

        <!-- 3.2.6 -->
        <div class="exercise">
          Write a function <code>m</code> that takes a value and an optional source string and returns them in an
          object.
          <br>
          <code>JSON.stringify(m(1)) // {"value": 1, "source": "1"}</code><br>
          <code>JSON.stringify(m(Math.PI, "pi")) // {"value": 3.14159..., "source": "pi"}</code>
        </div>
        <pre><highlight-code lang="javascript">
          function m(x, y) {
            const object = Object()
            object.value = x
            if (y) {
              object.source = y
            } else {
              object.source = x.toString()
            }
            return object
          }
        </highlight-code></pre>

        <!-- 3.2.7 -->
        <div class="exercise">
          Write a function <code>addm</code> that takes two <code>m</code> objects and returns an <code>m</code> object.
          <code>JSON.stringify(addm(m(3), m(4))) // {"value": 7, "source": "(3+4)"}</code>
        </div>
        <pre><highlight-code lang="javascript">
          function addm(m1, m2) {
            const object = Object()
            object.value = m1.value + m2.value;
            object.source = '(' + m1.source + '+' + m2.source + ')'
            return object
          }
        </highlight-code></pre>

        <!-- 3.2.8 -->
        <div class="exercise">
          Write a function <code>binarymf</code> that takes a binary function and a string and returns a function that
          acts on m objects.<br>
          <code>addm = binarymf(add, "+");</code><br>
          <code>JSON.stringify(addm(m(3), m(4))) // {"value": 7, "source": "(3+4)"}</code>
        </div>
        <pre><highlight-code lang="javascript">
          function binarymf(func, symbol) {
              return function(a, b) {
                  return {
                      value: func(a.value, b.value), source: "(" + a.value + symbol + b.value + ")"
                  }
              }
          }
        </highlight-code></pre>

        <!-- 3.2.9 -->
        <div class="exercise">
          Modify function <code>binarymf</code> so that the functions it produces can accept arguments that are either
          numbers or m objects.<br>
          <code>addm = binarymf(add, "+");</code><br>
          <code>JSON.stringify(addm(3, 4)) // {"value": 7, "source": "(3+4)"}</code>
        </div>
        <pre><highlight-code lang="javascript">
          function binarymf(func, symbol) {
              return function(a, b) {
                  if(typeof a === 'number') {
                      a = m(a)
                  }
                  if(typeof b === 'number') {
                      b = m(b)
                  }
                  return {
                      value: func(a.value, b.value), source: "(" + a.value + symbol + b.value + ")"
                  }
              }
          }
        </highlight-code></pre>

        <!-- 3.2.10 -->
        <div class="exercise">
          Write function <code>unarymf</code>, which is like <code>binarymf</code> except that it acts on unary
          functions.<br>
          <code>squarem = unarymf(square, "square");</code><br>
          <code>JSON.stringify(squarem(4)) // {"value": 16, "source": "(square 4)"}</code>
        </div>
        <pre><highlight-code lang="javascript">
          function unarymf(func, name) {
              return function(x) {
                  if(typeof x === 'number'){
                      x = m(x)
                  }
                  return {
                      value: func(x.value), source: "(" + name + ' ' + x.value + ")"
                  }
              }
          }
        </highlight-code></pre>

        <!-- 3.2.11 -->
        <div class="exercise">
          Write a function that takes the lengths of two sides of a triangle and computes the length of the hypotenuse.
          (Hint: c2 = a2 + b2)<br><code>hyp(3, 4) // 5</code>
        </div>
        <pre><highlight-code lang="javascript">
          function hyp(x, y) {
            return Math.sqrt(x * x + y * y)
          }
        </highlight-code></pre>

        <!-- 3.2.12 -->
        <div class="exercise">
          Write a function that evaluates array expressions.<br>
          <code>hypa = [ Math.sqrt, [ add, [mul, 3, 3], [mul, 4, 4] ] ];</code><br>
          <code>exp(hypa) // 5</code>
        </div>
        <pre><highlight-code lang="javascript">
          function exp(array) {
              if(typeof array === 'number') {
                  return array
              }
              let fun = array[0]
              array.shift()
              return fun(...(array.map(el => exp(el))))
          }
        </highlight-code></pre>

        <!-- 3.2.13 -->
        <div class="exercise">
          Make a function that stores a value in a variable.<br>
          <code>var variable; store(5); // variable === 5</code>
        </div>
        <pre><highlight-code lang="javascript">
          function store(x) {
              variable = x
          }
        </highlight-code></pre>

        <!-- 3.2.14 -->
        <div class="exercise">
          Make a function that takes a binary function, two functions that provide operands, and a function that takes
          the result.<br>
          <code>quatre( add, identityf(3), identityf(4), store ); // variable === 7</code>
        </div>
        <pre><highlight-code lang="javascript">
          function quatre(func1, operand1, operand2, func2) {
              func2(func1(operand1(), operand2()))
          }
        </highlight-code></pre>

        <!-- 3.2.15 -->
        <div class="exercise">
          Make a function that takes a unary function, and returns a function that takes an argument and a callback.<br>
          <code>sqrtc = unaryc(Math.sqrt); sqrtc(81, store) // variable === 9</code>
        </div>
        <pre><highlight-code lang="javascript">
          function unaryc(func1) {
              return function(operand, func2) {
                  return func2(func1(operand))
              }
          }
        </highlight-code></pre>

        <!-- 3.2.16 -->
        <div class="exercise">
          Make a function that takes a binary function, and returns a function that takes two arguments and a
          callback.<br>
          <code>addc = binaryc(add); addc(4, 5, store) // variable === 9</code><br>
          <code>mulc = binaryc(mul); mulc(2, 3, store) // variable === 6</code>
        </div>
        <pre><highlight-code lang="javascript">
          function binaryc(func1) {
              return function(operand1, operand2, func2) {
                  func2(func1(operand1, operand2))
              }
          }
        </highlight-code></pre>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";

export default {
  name: "Woche03Aufgabe2",
  title: 'Web Engineering WS21/22 - Woche 3.2',
  components: {
    SolutionWithOverlay
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
</style>
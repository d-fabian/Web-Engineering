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
        <div class="methode">
          <div class="firstStep">
            <span class="keyword">function</span>
            <span class="function"> add</span>(x, y) {
          </div>
          <div class="secondStep">
            <span class="keyword">return</span> x + y
          </div>
          <div class="firstStep">}</div>
        </div>
        <div class="methode">
          <div class="firstStep">
            <span class="keyword">function</span>
            <span class="function"> sub</span>(x, y) {
          </div>
          <div class="secondStep">
            <span class="keyword">return</span> x - y
          </div>
          <div class="firstStep">}</div>
        </div>
        <div class="methode">
          <div class="firstStep">
            <span class="keyword">function</span>
            <span class="function"> mul</span>(x, y) {
          </div>
          <div class="secondStep">
            <span class="keyword">return</span> x * y
          </div>
          <div class="firstStep">}</div>
        </div>
        <div class="methode">
          <div class="firstStep">
            <span class="keyword">function</span>
            <span class="function"> div</span>(x, y) {
          </div>
          <div class="secondStep">
            <span class="keyword">return</span> x / y
          </div>
          <div class="firstStep">}</div>
        </div>


        <div>
          <h1>Aufgaben</h1>
        </div>
        <!-- 3.2.1 -->
        <!-- 3.2.2 -->
        <div class="exercise">
          Make a factory that makes functions that generate unique symbols. <br>
          <code>gensym = gensymf('G');</code><br>
          <code>gensym() // 'G0'</code><br>
          <code>gensym() // 'G1'</code><br>
          <code>gensym() // 'G2'</code><br>
          <code>gensym() // 'G3'</code>
        </div>
        <div class="methode">
          <div class="firstStep">
            <span class="keyword">function</span>
            <span class="function"> gensymf</span>(x) {
          </div>
          <div class="secondStep">
            <span class="keyword">let</span> i = 0
            <br>
            <span class="keyword">return function</span> () {
          </div>
          <div class="thirdStep">
            <span class="keyword">let</span> result = x + i
            <br>
            <span class="keyword">while</span> (<span class="keyword">true</span>) {
          </div>
          <div class="fourthStep">
            <div>result = x + i</div>
            <div>i += 1</div>
            <div><span class="keyword">return</span> <span class="error">console</span>.<span
                class="function">log</span>(result)
            </div>
          </div>
          <div class="thirdStep">}</div>
          <div class="secondStep">}</div>
          <div class="firstStep">}</div>
        </div>

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
        <div class="methode">
          <div class="firstStep">
            <span class="keyword">function</span>
            <span class="function"> fibonaccif</span>() {
          </div>
          <div class="secondStep">
            <span class="keyword">const</span> result = {0:0, 1:1, 2:1, 3:2, 4:3}
            <br>
            <span class="keyword">let</span> i = -1
            <br>
            <span class="keyword">return function</span> () {
          </div>
          <div class="thirdStep">
            <span class="keyword">if</span> (i === -1) {
          </div>
          <div class="fourthStep">
            i++
            <br>
            <span class="keyword">return</span> <span class="error">console</span>.<span
              class="function">log</span>(<span class="error">0</span>)
          </div>
          <div class="thirdStep">
            }
            <br>
            <span class="keyword">if</span> (i === 0) {
          </div>
          <div class="fourthStep">
            i++
            <br>
            <span class="keyword">return</span> <span class="error">console</span>.<span
              class="function">log</span>(<span class="error">1</span>)
          </div>
          <div class="thirdStep">
            }
            <br>
            <span class="keyword">while</span> (<span class="keyword">true</span>) {
          </div>
          <div class="fourthStep">
            i++
            <br>
            <span class="keyword">let</span> next = result[i-1] + result[i-2]
            <br>
            result[i] = next
            <br>
            <span class="keyword">return</span> <span class="error">console</span>.<span
              class="function">log</span>(next)
          </div>
          <div class="thirdStep">}</div>
          <div class="secondStep">}</div>
          <div class="firstStep">}</div>
        </div>

        <!-- 3.2.4 -->
        <!-- 3.2.5 -->
        <!-- 3.2.6 -->
        <div class="exercise">
          Write a function <code>m</code> that takes a value and an optional source string and returns them in an
          object.
          <br>
          <code>JSON.stringify(m(1)) // {"value": 1, "source": "1"}</code><br>
          <code>JSON.stringify(m(Math.PI, "pi")) // {"value": 3.14159..., "source": "pi"}</code>
        </div>
        <div class="methode">
          <div class="firstStep">
            <span class="keyword">function</span>
            <span class="function"> m</span>(x, y) {
          </div>
          <div class="secondStep">
            <span class="keyword">const</span> object = <span class="error">Object</span>()
            <br>
            object.<span class="error">value</span> = x
            <br>
            <span class="keyword">if</span> (y) {
          </div>
          <div class="thirdStep">
            object.<span class="error">source</span> = y
          </div>
          <div class="secondStep">
            } <span class="keyword">else</span> {
          </div>
          <div class="thirdStep">
            object.<span class="error">source</span> = x.<span class="function">toString</span>()
          </div>
          <div class="secondStep">
            }
            <br>
            <span class="keyword">return</span> object
          </div>
          <div class="firstStep">}</div>
        </div>

        <!-- 3.2.7 -->
        <div class="exercise">
          Write a function <code>addm</code> that takes two <code>m</code> objects and returns an <code>m</code> object.
          <code>JSON.stringify(addm(m(3), m(4))) // {"value": 7, "source": "(3+4)"}</code>
        </div>
        <div class="methode">
          <div class="firstStep">
            <span class="keyword">function</span>
            <span class="function"> addm</span>(m1, m2) {
          </div>
          <div class="secondStep">
            <div><span class="keyword">const</span> object = <span class="error">Object</span>()</div>
            <div>object.<span class="error">value</span> = m1.<span class="error">value</span> + m2.<span class="error">value</span>;
            </div>
            <div>object.<span class="error">source</span> = <span class="string">'('</span> + m1.<span class="error">source</span>
              + <span class="string">'+'</span> + m2.<span class="error">source</span> + <span
                  class="string">')'</span></div>
            <div><span class="keyword">return</span> object</div>
          </div>
          <div class="firstStep">}</div>
        </div>

        <!-- 3.2.8 -->
        <!-- 3.2.9 -->
        <!-- 3.2.10 -->
        <!-- 3.2.11 -->
        <div class="exercise">
          Write a function that takes the lengths of two sides of a triangle and computes the length of the hypotenuse.
          (Hint: c2 = a2 + b2)<code>hyp(3, 4) // 5</code>
        </div>
        <div class="methode">
          <div class="firstStep">
            <span class="keyword">function</span>
            <span class="function"> hyp</span>(x, y) {
          </div>
          <div class="secondStep">
            <span class="keyword">return</span> <span class="error">Math</span>.<span class="function">sqrt</span>(x * x
            + y * y)
          </div>
          <div class="firstStep">}</div>
        </div>

        <!-- 3.2.12 -->
        <!-- 3.2.13 -->
        <!-- 3.2.14 -->
        <!-- 3.2.15 -->
        <!-- 3.2.16 -->
        <div class="exercise">

        </div>
        <div class="methode">
          <div class="firstStep"></div>
          <div class="secondStep"></div>
          <div class="thirdStep"></div>
          <div class="fourthStep"></div>
          <div class="thirdStep"></div>
          <div class="secondStep"></div>
          <div class="firstStep"></div>
        </div>

        <div class="methode">
          <div class="firstStep"></div>
          <div class="secondStep"></div>
          <div class="thirdStep"></div>
          <div class="fourthStep"></div>
          <div class="thirdStep"></div>
          <div class="secondStep"></div>
          <div class="firstStep"></div>
        </div>
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
@import '../styles/woche3.css';
</style>
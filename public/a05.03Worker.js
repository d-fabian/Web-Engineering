function getPrim(n) {
    let k = 2
    while (k < n) {
        if (n % k === 0) {
            return
        }
        k++
    }
    return n

}

let n = 1
self.addEventListener('message', function (event) {
    while (true) {
        const prim = getPrim(n)
        if (prim) {
            self.postMessage(prim)
        }
        n++
    }
})
// 3.2.1
// 3.2.2
function gensymf(x) {
    let i = 0;
    return function () {
        let result = x + i;
        while (true) {
            result = x + i;
            i += 1;
            return console.log(result);
        }
    }
}

// 3.2.3
function fibonaccif() {
    const result = {0: 0, 1: 1, 2: 1, 3: 2, 4: 3};
    let i = -1;
    return function () {
        if (i === -1) {
            i++;
            return console.log(0)
        }
        if (i === 0) {
            i++;
            return console.log(1)
        }
        while (true) {
            i++;
            let next = result[i - 1] + result[i - 2];
            result[i] = next;
            return console.log(next);
        }
    }
}

// 3.2.4
function addg(...x) {
    return
}

// 3.2.5
// 3.2.6
function m(x, y) {
    const object = Object();
    object.value = x;
    if (y) {
        object.source = y;
    } else {
        object.source = x.toString();
    }
    return object;
}

// 3.2.7
function addm(m1, m2) {
    const object = Object();
    object.value = m1.value + m2.value;
    object.source = '(' + m1.source + '+' + m2.source + ')';
    return object;
}

// 3.2.8
// 3.2.9
// 3.2.10
// 3.2.11
function hyp(x, y) {
    return Math.sqrt(x * x + y * y);
}

// 3.2.12
function exp(x) {
    let a = x.slice('[').flat();
    console.log(a);
}

// 3.2.13
function store(x) {
    document.variable = x
    //variable = x;
}

// 3.2.14
// 3.2.15
// 3.2.16

// 3.2.1
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

// 3.2.5
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
function binarymf(func, symbol) {
    return function(a, b) {
        return {
            value: func(a.value, b.value), source: "(" + a.value + symbol + b.value + ")"
        }
    }
}

// 3.2.9
function binarymf2(func, symbol) {
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

// 3.2.10
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

// 3.2.11
function hyp(x, y) {
    return Math.sqrt(x * x + y * y);
}

// 3.2.12
function exp(array) {
    if(typeof array === 'number') {
        return array
    }
    let fun = array[0]
    array.shift()
    return fun(...(array.map(el => exp(el))))
}

// 3.2.13
function store(x) {
    variable = x
}

// 3.2.14
function quatre(func1, operand1, operand2, func2) {
    func2(func1(operand1(), operand2()))
}

// 3.2.15
function unaryc(func1) {
    return function(operand, func2) {
        return func2(func1(operand))
    }
}

// 3.2.16
function binaryc(func1) {
    return function(operand1, operand2, func2) {
        func2(func1(operand1, operand2))
    }
}

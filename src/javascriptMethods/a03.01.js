// 3.1.1
function identity_function(x) {
    return function () {
        return x;
    }
}

// 3.1.2
function addf(x) {
    return function (y) {
        return x + y;
    }
}

// 3.1.3
function applyf(func) {
    return function (x) {
        return function (y) {
            return func(x, y);
        }
    }
}

// 3.1.4
function curry(func, x) {
    return function (y) {
        return func(x, y);
    }
}

// 3.1.5
function inc1(x) {
    return addf(x)(1);
}
function inc2(x) {
    return applyf(add)(x)(1);
}
function inc3(x) {
    return curry(add, 1)(x);
}

// 3.1.6
function methodize(func) {
    return function (x) {
        return func(this, x);
    }
}
Number.prototype.add = methodize(add);
Number.prototype.sub = methodize(sub);
Number.prototype.mul = methodize(mul);
Number.prototype.div = methodize(div);

// 3.1.7
function demethodize(func) {
    return function (x, y) {
        return func.apply(x, [y]);
    }
}

// 3.1.8
function twice(func) {
    return function (x) {
        return func(x, x);
    }
}

// 3.1.9
function composeu(funcA, funcB) {
    return function (x) {
        return funcB(funcA(x));
    }
}

// 3.1.10
function composeb(funcA, funcB) {
    return function (x, y, z) {
        return funcB(funcA(x, y), z);
    }
}

// 3.1.11
function once(func) {
    let alreadyCalled = false;
    return function (x, y) {
        if (!alreadyCalled) {
            alreadyCalled = true;
            return func(x, y);
        }
        throw new Error('Method was already called')
    }
}

// 3.1.12
function counterf(start = 0) {
    let counter = start
    return {
        inc: function () {
            counter++;
            return counter;
        },
        dec: function () {
            counter--;
            return counter;
        }
    }
}

// 3.1.13
function revocable(func) {
    return {
        invoke: function (y) {
            if(func !== undefined){
                return func(y);
            }
            throw new Error('Function not set or revoked!');
        },
        revoke: function () {
            func = undefined;
        }
    };
}

// 3.1.14
function vector() {
    let array = [];
    return {
        append: function (x) {
            array.push(x);
        },
        store: function (x, y) {
            array[x] = y;
        },
        get: function (x) {
            return array[x];
        }
    }
}


// Hilfsfunktionen
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

export default {
    add,
    sub,
    mul,
    div,
    identity_function,
    addf,
    applyf,
    curry,
    inc1,
    inc2,
    inc3,
    methodize,
    demethodize,
    twice,
    composeu,
    composeb,
    once,
    counterf,
    revocable,
    vector
}


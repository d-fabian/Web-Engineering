function isPrimeNumber(n) {
    let start = 2;
    const limit = Math.sqrt(n);
    while (start <= limit) {
        if (n % start++ < 1) return false;
    }
    return n > 1;
}

export {
    isPrimeNumber
}


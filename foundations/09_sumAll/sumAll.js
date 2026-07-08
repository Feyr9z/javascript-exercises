const sumAll = function (start, end) {
    let total = 0;
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }

    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }

    for (let i = start; i <= end; i++) {
        total += i;
    }

    return total;
};

sumAll(4, 1);

// Do not edit below this line
module.exports = sumAll;

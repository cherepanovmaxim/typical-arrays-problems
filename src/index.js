exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return array.sort((a, b) => a - b)[0];
    }
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return array.sort((a, b) => b - a)[0];
    }
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let total = 0;

        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }

        return total / array.length;
    }
};

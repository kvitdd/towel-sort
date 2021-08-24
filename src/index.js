module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    if (matrix.length === 0) return [];
    var result = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i] = matrix[i].reverse();
        }
        result = result.concat(matrix[i]);
    }
    return result;
};

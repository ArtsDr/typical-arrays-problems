
exports.min = function min(array) {

    for (let key in array) {
        let min = array[0]

        for (let i = 0; i < array.length; i++) {

            if (array[i] < min) {
                min = array[i]
            }
        }
        return min
    }
    return 0
}

exports.max = function max(array) {

    for (let key in array) {
        let max = array[0]

        for (let i = 0; i < array.length; i++) {

            if (array[i] > max) {
                max = array[i]
            }
        }
        return max
    }
    return 0
}

exports.avg = function avg(array) {

    for (let key in array) {
        let sum = 0

        for (let i = 0; i < array.length; i++) {

            sum += array[i]
        }
        return sum / array.length
    }
    return 0
}

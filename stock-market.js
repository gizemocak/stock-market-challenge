var maxProfit = function (list) {
    let array = 0

    for (let i = 0; i < list.length; i++) {
        let first = list[i];
        for (let k = i + 1; k < list.length; k++) {
            let second = list[k];
            if (first < second && second - first > array) {
                array = second - first
            }
        }
    }
    if (array == 0) {
        return -1
    }
    return array
}

maxProfit([45, 24, 35, 31, 40, 38, 11])
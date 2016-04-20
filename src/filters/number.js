export const addZero = function (item) {
    return item > 9 ? item : ('0' + item.toString())
}
export function sum(a, b) {
    return a + b
}

export function add(stringNumber) {
    if (stringNumber.length === 0) return 0
    stringNumber = stringNumber.replaceAll('\n', ',')
    const arr = stringNumber.split(",")
    let number = 0
    arr.forEach(element => {
        if (isNaN(element)) {
            throw new Error("Il ne faut rentrer que des chiffres !!!")
        }
        number += parseInt(element)
    })
    return number
}
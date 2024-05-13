export function sum(a, b) {
    return a + b
}

export function add(stringNumber){
    if (stringNumber.length == 0 )
        return 0
    try {
        const arr = stringNumber.split(",")
        let number = 0
        arr.forEach(element => {
            if (isNaN(parseInt(element))){
                throw new Error()
            }
            number += parseInt(element)
        });
        if (arr.length == 1){
            return parseInt(arr[0])
        }
        return number
    } catch (e){
        return "Il ne faut rentrer que des chiffres !!!"
    } 
}
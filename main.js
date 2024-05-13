export function sum(a, b) {
    return a + b
}

export function add(stringNumber){
    if (stringNumber.length == 0 )
        return 0
    try {
        const arr = stringNumber.split(",")
        if (arr.length>2){
            return "Erreur : que 2 chiffres bon sang ! "
        }
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
        return parseInt(arr[1]) + parseInt(arr[0])
    } catch (e){
        return "Il ne faut rentrer que des chiffres !!!"
    } 
}
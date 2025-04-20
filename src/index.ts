function sum(a: number, b:number):number {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid input!")
    }
    return a+b;
}

export default sum

console.log(sum(3, 4));
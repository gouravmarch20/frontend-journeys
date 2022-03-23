const array = [5, 6, 3, 9 ];
const convertEvenToOdd = (i) => {
    return i % 2 !== 0 ? i + 1 : i
}
const result = array.map(i => convertEvenToOdd(i))

console.log(result)
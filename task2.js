// 1. buat program untuk memunculkan string "Koda" ketika mengakses objek we.are.the.best
// 2. membuat program untuk memunculkan string "Hello World" ketika mengakses objek hello.world
// 3. membuat program untuk memunculkan string "Tech Academy" ketika mengakses objek obj.str[3][1][2].man.tech.academy"
// 4. membuat program untuk memunculkan string "Apple" ketika mengakses array my[0].favourite[3].fruit.is
// 5. memunculkan number 32 ketika kalkulasi num.first[1] + num.second[2]
const we = {are:{the:{best:"Koda"}}}
console.log(we.are.the.best)

const hello = {world:"Hello World"}
console.log(hello.world)

const obj = {
    str:[1, 2, 3, [1, [1, 2, {man:{tech:{academy: "Tech Academy"}}}]]]
}
console.log(obj.str[3][1][2].man.tech.academy)

const my = [
    {favourite:[1, 2, 3, {fruit:{is:"Apple"}}]}
]
console.log(my[0].favourite[3].fruit.is)

const num = {first:[1, 30], second:[0, 1, 2]}
console.log(num.first[1] + num.second[2])
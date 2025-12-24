// buat program hitung luas dan keliling lingkaran
// menggunakan variabel dan data
// koda-b6-javascript1

let jariJariLingkaran = 15
let pi
if(jariJariLingkaran % 7 === 0) {
    pi = 22/7
} else {
    pi = 3.14
}
// console.log(pi)

const luasLingkaran = pi * jariJariLingkaran * jariJariLingkaran
console.log(luasLingkaran)

const kelilingLingkaran = 2 * pi * jariJariLingkaran
console.log(kelilingLingkaran)
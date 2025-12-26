let tempAwal = 30
let suhuAwal = 4
let suhuAkhir = 1
let tempAkhir = 0

console.log("Daftar Suhu Awal & Akhir: ")
console.log("1. Celcius")
console.log("2. Fahrenheit")
console.log("3. Reamur")
console.log("4. Kelvin")

console.log(`temperatur awal: ${tempAwal}`)
console.log(`suhu awal pilihan: ${suhuAwal}`)
console.log(`suhu akhir pilihan: ${suhuAkhir}`)

if(typeof tempAwal === "number" && typeof suhuAwal === "number" && typeof suhuAkhir === "number") {
    if(suhuAwal >= 1 && suhuAwal <= 4) {
        if(suhuAkhir >= 1 && suhuAkhir <= 4 && suhuAwal != suhuAkhir) {
            switch(suhuAwal) {
                case 1:
                    switch(suhuAkhir) {
                        case 2:
                            tempAkhir = (tempAwal * 1.8) + 32.0
                            console.log(`hasil CtoF = ${tempAkhir}`)
                            break;
                        case 3:
                            tempAkhir = tempAwal * 0.8
                            console.log(`hasil CtoR = ${tempAkhir}`)
                            break;
                        case 4:
                            tempAkhir = tempAwal + 273.15
                            console.log(`hasil CtoK = ${tempAkhir}`)
                            break;
                    } break;
                case 2:
                    switch(suhuAkhir) {
                        case 1:{
                            tempAkhir = (tempAwal - 32) * 1.8
                            console.log(`hasil FtoC = ${tempAkhir}`)
                            break;
                        }
                        case 3: {
                            tempAkhir = (tempAwal - 32) * 4 / 9
                            console.log(`hasil FtoR = ${tempAkhir}`)
                            break;
                        }
                        case 4: {
                            tempAkhir = (tempAwal - 32) * 5 / 9 + 273.15
                            console.log(`hasil FtoK = ${tempAkhir}`)
                            break;
                        }
                    } break;
                case 3:
                    switch(suhuAkhir) {
                        case 1: {
                            tempAkhir = tempAwal * 5 / 4
                            console.log(`hasil RtoC = ${tempAkhir}`)
                            break;
                        }
                        case 2: {
                            tempAkhir = (tempAwal * 9/4) + 32
                            console.log(`hasil RtoF = ${tempAkhir}`)
                            break;
                        }
                        case 4: {
                            tempAkhir = tempAwal * 5 / 4 + 273.15
                            console.log(`hasil RtoK = ${tempAkhir}`)
                            break;
                        }
                    } break;
                case 4:
                    switch(suhuAkhir) {
                        case 1: {
                            tempAkhir = tempAwal - 273.15
                            console.log(`hasil KtoC = ${tempAkhir}`)
                            break;
                        }
                        case 2: {
                            tempAkhir = tempAwal * 9 / 5 - 459.67
                            console.log(`hasil KtoF = ${tempAkhir}`)
                            break;
                        }
                        case 3: {
                            tempAkhir = (tempAwal - 273.15) * 4 / 5
                            console.log(`hasil KtoR = ${tempAkhir}`)
                            break;
                        }
                    }
            }
        } else {
            // console.log("Input suhu akhir harus antara 1 sampai 4.")
            // console.log("Suhu akhir tidak boleh sama dengan suhu awal.")
            // console.log("Masukkan kembali suhu akhir: ")
        }
    }
} else {
    // console.log("Suhu awal dan suhu akhir harus angka.")
    // console.log("Masukkan kembali suhu awal dan suhu akhir")
}
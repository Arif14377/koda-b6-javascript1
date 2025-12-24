# Algoritma Javascript1
## Task 1
### Flowchart dari task1.js

```mermaid
flowchart TD
start@{shape: circle, label: "Mulai"}
input-r@{shape: lean-r, label: "input: jariJariLingkaran"}
pi@{shape: rect, label: "pi = 22/7"}
pi2@{shape: rect, label: "pi = 3.14"}
whatPi@{shape: diamond, label: "jariJariLingkaran % 7 === 0"}
hitungLuas@{shape: rect, label: "luasLingkaran = pi * jariJariLingkaran * jariJariLingkaran"}
hitungKeliling@{shape: rect, label: "kelilingLingkaran = 2 * pi * jariJariLingkaran"}
output@{shape: lean-r, label: "output: luasLingkaran, kelilingLingkaran"}
stop@{shape: dbl-circ, label: "Selesai"}

start --> input-r
input-r-->whatPi
whatPi--True-->pi
whatPi--False-->pi2
pi-->hitungLuas
pi2-->hitungLuas
hitungLuas-->hitungKeliling
hitungKeliling-->output
output-->stop
```
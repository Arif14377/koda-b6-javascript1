# Algoritma Javascript1
## Task 1
### Flowchart dari task1.js

```mermaid
flowchart TD
start@{shape: circle, label: "Mulai"}
input-r@{shape: lean-r, label: "input: jariJariLingkaran"}
pi@{shape: rect, label: "pi"}
hitungLuas@{shape: rect, label: "luasLingkaran = pi * jariJariLingkaran * jariJariLingkaran"}
hitungKeliling@{shape: rect, label: "kelilingLingkaran = 2 * pi * jariJariLingkaran"}
outputLuas@{shape: lean-r, label: "output: luasLingkaran"}
outputKeliling@{shape: lean-r, label: "output: kelilingLingkaran"}
stop@{shape: dbl-circ, label: "Selesai"}

start --> input-r
-->pi
-->jariJariLingkaran
-->hitungLuas
jariJariLingkaran-->hitungKeliling
hitungLuas-->outputLuas
hitungKeliling-->outputKeliling
outputLuas-->stop
outputKeliling-->stop
```
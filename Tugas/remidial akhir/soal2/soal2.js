var nilaiSantri = [90, 60, 65, 97, 99, 60, 53, 91, 89];

var total = 0;

for (i in nilaiSantri) {
  console.log(i);
  total += nilaiSantri[i];
}
console.log(total / nilaiSantri.length);

var nilaiSantri = [100, 20, 35, 70, 99, 80, 100, 97, 84];

var total = 0;
var banyakNilai = nilaiSantri.length;

for (i = 0; i < banyakNilai; i++) {
  console.log(i);
  total += nilaiSantri[i];
}
document.write(total / banyakNilai);

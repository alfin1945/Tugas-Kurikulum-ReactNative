var umur = prompt("Masukkan umur");

if (umur <= 10) {
  document.write("Anak-anak");
} else if (umur <= 18) {
  document.write("Remaja");
} else if (umur <= 35) {
  document.write("Dewasa");
} else if (umur <= 65) {
  document.write("Parubaya");
} else {
  document.write("Tua");
}

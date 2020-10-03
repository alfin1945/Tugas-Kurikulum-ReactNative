var angkaAcak = [77, 62, 55, 16, 26, 66, 75, 79, 39, 62, 59, 92, 45, 54, 8];

var angkaAcak = angkaAcak
  .filter((a) => a <= 60)
  .map((a) => a / 5)
  .filter((a) => a < 10)
  .map((a) => angkaAcak.length / a)
  .reduce((a, m) => a / 3 + m);

console.log(angkaAcak);

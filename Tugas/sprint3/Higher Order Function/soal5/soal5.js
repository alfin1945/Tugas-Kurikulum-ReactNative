var randomNumbers = [
  19,
  65,
  86,
  4,
  100,
  56,
  92,
  41,
  80,
  30,
  22,
  35,
  72,
  74,
  78,
  27,
  21,
  83,
  23,
  60,
  96,
  14,
  67,
  55,
  86,
  80,
  67,
  13,
  30,
  96,
  79,
  42,
  65,
  69,
  37,
  28,
  88,
  57,
  55,
  73,
  7,
  87,
  79,
  17,
  38,
  1,
  100,
  54,
  85,
  83,
  59,
  38,
  16,
  21,
  8,
  73,
  28,
  62,
  1,
  18,
  12,
  21,
  33,
  87,
  9,
  57,
  39,
  10,
  55,
  45,
  32,
  66,
  52,
  36,
  92,
  79,
  79,
  31,
  3,
  81,
  6,
  81,
  73,
  77,
  71,
  26,
  19,
  37,
  34,
  90,
  87,
  85,
  23,
  52,
  87,
  18,
  78,
  96,
  80,
  68,
];

const hasil = randomNumbers
  .filter((a) => a >= 65)
  .map((a) => a / 2)
  .filter((a) => a < 40)
  .map((a) => randomNumbers.length / a)
  .reduce((acc, cur) => acc / 2 + cur);
console.log(hasil);

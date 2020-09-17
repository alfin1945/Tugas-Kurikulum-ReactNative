const arr2 = [
  "rizal",
  "prabumulih",
  ["smknegeripramulih", "pramujaya", "sukajadi"],
];

const [nama, asal, ...rest] = arr2;

console.log(nama);
console.log(asal);
console.log(rest);

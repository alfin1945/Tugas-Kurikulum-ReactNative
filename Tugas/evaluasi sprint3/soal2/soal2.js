const asalSantri = {
  Sidik: "Lampung",
  Wandi: "Prabumulih",
  Rahmad: "Medan",
  Usamah: "Ceribon",
  Syofyan: "Purwokerto",
  Aldi: "Kendari",
  Kardi: "Lombok",
};

var { Sidik,Wandi,Rahmad,Usamah,...lain } = asalSantri;

console.log(Sidik,Wandi,Rahmad,Usamah);
console.log(lain);
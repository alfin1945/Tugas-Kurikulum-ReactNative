function santriProgrammer(nama, status, asal) {
  console.log("Nama santri "+nama+"berasal dari kota "+ asal);
  status();
}

function status() {
  alert("Status nya adalah santri");
}

santriProgrammer("Rahmad", status, "Medan");

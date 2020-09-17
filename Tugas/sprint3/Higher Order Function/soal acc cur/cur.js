function newCallback(nama, nama2, ulek) {
  console.log(nama, nama2);
  ulek();
}

function kebon() {
  console.log("pulang kampung");
}

newCallback("adi", "yusuf", kebon);

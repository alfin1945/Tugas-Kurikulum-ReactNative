// var listKota = [
//   "Kabupaten Aceh Barat",
//   "Kabupaten Aceh Barat Daya",
//   "Kabupaten Aceh Besar",
//   "Kabupaten Aceh Jaya",
//   "Kabupaten Aceh Selatan",
//   "Kabupaten Aceh Singkil",
//   "Kabupaten Aceh Tamiang",
//   "Kabupaten Aceh Tengah",
//   "Kabupaten Aceh Tenggara",
//   "Kabupaten Aceh Timur",
//   "Kabupaten Aceh Utara",
//   "Kabupaten Bener Meriah",
//   "Kabupaten Bireuen",
//   "Kabupaten Gayo Lues",
//   "Kabupaten Nagan Raya",
//   "Kabupaten Pidie",
//   "Kabupaten Pidie Jaya",
//   "Kabupaten Simeulue",
//   "Kota Banda Aceh",
//   "Kota Langsa",
//   "Kota Lhokseumawe",
//   "Kota Sabang",
//   "Kota Subulussalam",
//   [
//     "Kabupaten Badung",
//     "Kabupaten Bangil",
//     "Kabupaten Buleleng",
//     "Kabupaten Gianyar",
//     "Kabupaten Banjarnegara",
//     "Kabupaten Banyumas",
//     "Kabupaten Batang",
//     "Kabupaten Blora",
//     "Kabupaten Boyolali",
//     "Kabupaten Brebes",
//     "Kabupaten Cilacap",
//     "Kabupaten Demak",
//     "Kabupaten Grobogan",
//     "Kabupaten Jepara",
//     "Kabupaten Karanganyar",
//     "Kabupaten Kebumen",
//     "Kabupaten Kendal",
//     "Kabupaten Klaten",
//     "Kabupaten Kudus",
//     "Kabupaten Magelang",
//     [
//       "Kabupaten Bengkayang",
//       "Kabupaten Kapuas Hulu",
//       "Kabupaten Kayong Utara",
//       "Kabupaten Ketapang",
//       "Kabupaten Kubu Raya",
//       "Kabupaten Landak",
//       "Kabupaten Melawi",
//       "Kabupaten Pontianak",
//       "Kabupaten Sambas",
//       "Kabupaten Sanggau",
//       "Kabupaten Sekadau",
//       "Kabupaten Sintang",
//       "Kota Pontianak",
//       "Kota Singkawang",
//     ],
//     "Kabupaten Pati",
//     "Kabupaten Pekalongan",
//     "Kabupaten Pemalang",
//     "Kabupaten Purbalingga",
//     "Kabupaten Purworejo",
//     "Kabupaten Rembang",
//     "Kabupaten Semarang",
//     "Kabupaten Sragen",
//     "Kabupaten Sukoharjo",
//     "Kabupaten Tegal",
//     "Kabupaten Temanggung",
//     "Kabupaten Wonogiri",
//     "Kabupaten Wonosobo",
//     "Kota Magelang",
//     "Kota Pekalongan",
//     "Kota Salatiga",
//     "Kota Semarang",
//     "Kota Surakarta",
//     "Kota Tegal",
//     "Kabupaten Jembrana",
//     "Kabupaten Karangasem",
//     "Kabupaten Klungkung",
//     "Kabupaten Tabanan",
//     "Kota Denpasar",
//   ],
// ];

// var kota = listKota[23][20];
// // // ket :
// // [23] disebut dengan array dan [20] disebut dengan dimensi

// for (i = 0; i < kota.length; i++) {
//   document.write("<li>" + kota[i] + "</li>");

// (<li></li>) digunakan utk membuat hsilnya menjadi ke bawah dengan urut
// }

// // hasil nya tidak akan bisa urut/menampilkan nomornya sebelum di masukkan (<ol></ol>) di letakkan antara body html.

// var listDesa = [
//   "argodadi,sedayu",
//   "argomulyo,sedayu",
//   "argorejo,sedayu",
//   "argosari",
//   "bangunjiwo,kasihan",
//   "banguntapan,banguntapan",
//   "bantul,bantul",
//   "baturetno,banguntapan",
//   "bawuran,pleret",
//   "canden,jetis",
//   "caturharjo,pandak",
//   "cetan srigandi",
// ];

// // var banyakDesa = listDesa.length

// // for (index =1;index<banyakDesa;index++){}

// for (i in listDesa) {
//   document.write("<li>" + listDesa[i] + "</li>");
// }

// var nilaiSantri = [50, 90, 65, 67, 89, 80, 50, 97, 84];

// var total = 0;
// var banyakNilai = nilaiSantri.length;

// for (i = 0; i < banyakNilai; i++) {
//   console.log(i);
//   total += nilaiSantri[i];
// }
// document.write(total / banyakNilai);

function luasPersegiPanjang(panjang, lebar) {
  var total = panjang * lebar;
  console.log(total);
}
luasPersegiPanjang(5, 4);

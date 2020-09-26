var  nilaiSantri = [ 50, 90, 65, 67, 89, 80, 50, 97, 84 ]

var total = 0 ;

for (i in nilaiSantri){
    console.log(i);
    total+= nilaiSantri[i]
}
document.write(total/nilaiSantri.length)
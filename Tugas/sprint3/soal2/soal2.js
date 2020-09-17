const arr = [90, 102, 1231, 3112, 801, 812];

// utk mendapatkan nilai pada masing-masing angka!.
// ini jga kita bisa tidak menuliskannya, karena var di bawah dari 6 var ini sudah mewakilinya.

// var a = arr[90];
// var b = arr[102];
// var c = arr[1231];
// var d = arr[3112];
// var e = arr[801];
// var f = arr[812];

// ini lah var yg mewakili var diatas.
var [a, b, c, d, e, f] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

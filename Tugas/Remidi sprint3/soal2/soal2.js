var kodeUnix = [23, 89,67,29,192,6,2,129,21,872,891,901,70,61,78,62,32,90,90];

var kodeUnix = kodeUnix.map(a=>a - 50 + kodeUnix.length)
.filter(a=>a < 20)
.reduce((a,d)=> a+d)

console.log(kodeUnix)
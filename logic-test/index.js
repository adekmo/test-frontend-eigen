// Test Algoritma

// 1. Reverse 
function reverse(str) {
    // let names = "Adek1"
    let name = str.split(""); // ["a", "d", "e", "k", "1"]
    let lastIndex = name.splice(name.length - 1, 1);
    let wordRev = name.reverse();
    let final = wordRev.concat(lastIndex);
    console.log(final);

}
reverse("daron7");

// 2. Kata Terpanjang

function panjangKata(kalimat) {
    let t = 0;
    let ts = kalimat.split(' ');
    for (let i = 0; i < ts.length; i++) {
        if (ts[i].length > t) {
            kalimat = ts[i];
            t = ts[i].length;
        }
    }
    return kalimat;
}
let kalimat = panjangKata('Kalau gak salah hari ini tuh kamu mau ngerjain pekerjaans yang kemarin belum selesai kan  ?');
console.log(kalimat + ': ' + kalimat.length + ' karakter');


// 3. array INPUT dan array QUERY
let input = ['xc', 'dz', 'bbb', 'dz'];
let query = ['dz', 'ac', 'bbb'];

function compare(input, query) {
    let array = [];
    for (let i = 0; i < query.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (query[i] === input[j]) {
                array.push(1);
            } else {
                array.push(0);
            }

        }

    }
    return array;
}
let arr = compare(input, query);
let hasil1 = arr.splice(0, input.length);
let hasil2 = arr.splice(0, input.length);

let totalArr = arr.reduce((val, nilaiSekarang) => {
    return val + nilaiSekarang
}, 0);

let totalHasil1 = hasil1.reduce((val, nilaiSekarang) => {
    return val + nilaiSekarang
}, 0);

let totalHasil2 = hasil2.reduce((val, nilaiSekarang) => {
    return val + nilaiSekarang
}, 0);


let myFunc = num => Number(num);

let intArr1 = Array.from(String(totalArr), myFunc);
let intArr2 = Array.from(String(totalHasil2), myFunc);
let intArr3 = Array.from(String(totalHasil1), myFunc);

let join = intArr3.concat(intArr2);
let output = join.concat(intArr1);
console.log(output);
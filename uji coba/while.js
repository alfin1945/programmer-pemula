// // var ulang = true;
// // while (ulang) {
// //     console.log('hello world');
// //     ulang = confirm('lagi?')

// // for (y = 1; y < 10; y++) {
// //     for (x = 1; x < 10; x++) {
// //         if (y + x == 10 || y == x || x == 5) {
// //             document.write("*");
// //         } else {
// //             document.write("_");
// //         }
// //     }
// //     document.write("<br>");
// // }
// // for (y = 1; y < 10; y++) {
// //     for (x = 1; x < 10; x++) {
// //         if (y && x) {
// //             document.write("*");
// //         } else {
// //             document.write("_");
// //         }
// //     }
// //     document.write("<br>");
// // }
// // function siswa(nama, usia) {
// //     var anak = {}
// //     anak.nama = nama,
// //         anak.usia = usia
// //     return anak
// // }
// // console.log(siswa('hafif', 19))

// function santri(nama, usia) {
//   var anak = {};
//   (anak.nama = nama), (anak.usia = usia);
//   return anak;
// }
// console.log(santri("david", 19));


var cosmetic = {
    promo: function () {
        document.write('Mbak, saya${this.nama}, ingin menawarkan sebuah prodak ${this.merek}, bulan ${this.bulan},baru keluar kemarin')
    }
};

// const prodak = Object.create(cosmetic);

// prodak.nama = "gurame"
// prodak.merek = "pepsodent"
// prodak.bulan = "mei"
// prodak.promo();

// const siswa = {
//     muslim: false,
//     perkenalan: function () {
//         console.log(`Nama saya ${this.nama}. Apakah saya muslim ? ${this.muslim}`);
//     }
// };

// const saya = Object.create(siswa);

//contoh true

// saya.nama = "Hafif"
// saya.muslim = true
// saya.perkenalan();

// const orang = {
//     muslim: false,
//     perkenalan: function () {
//         document.write(`Nama saya ${this.nama}. Apakah saya muslim ? ${this.muslim}`);
//     }
// };

// const kamu = Object.create(orang);

// kamu.nama = "satria"
// kamu.muslim = true
// kamu.perkenalan();
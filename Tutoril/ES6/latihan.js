// // // contoh array

// // const ListNilai = [90, 92, 42];

// // var [a, e, r] = ListNilai;
// // console.log(e);

// //contoh object

// const santri = { nama: "alfin", devisi: "mobile" };
// const { nama, devisi } = santri;
// console.log(nama, devisi);

// contoh Soal evaluasi kemarin soal1

// var dataSantri = [50, 55, 36, 80, 50];
// var total = 0;
// var nilai = dataSantri.length;// length utk mencari jlh parameter nya

// for (i = 0; i < nilai; i++) {

//   total += dataSantri[i];
// }
// console.log(total / nilai);

// // contoh soal no2 evaluasi

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
//];

// cara pertama
// var banyakDesa = listDesa.length;

// for (i = 1; i < banyakDesa; i++) {
//   console.log(i + "." + listDesa[i]);
// }

// // cara kedua
// for (i in listDesa){

// }

// // contoh soal no3 evaluasi

// var persegiPanjang = function (panjang, lebar) {
//   return panjang * lebar;
// };
// console.log("panjang: 2 <br>");
// console.log("lebar: 4 <br><br>");
// console.log("totalnya adalah: " + persegiPanjang(2, 4));

// cara kedua

function luas(panjang, lebar) {
  var luas = panjang * lebar;
  return luas;
}

document.write("panjang: 8 <br>");
document.write("lebar: 5 <br>");
document.write("<br><br>jawaban:<br>luas persegi panjang: " + luas(8, 5));

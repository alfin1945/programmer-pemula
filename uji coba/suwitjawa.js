var tanya = true;
while (tanya) {
  // menangkap pilhan player
  var p = prompt("pilih : orang, gajah, semut");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "orang";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gajah";
  } else {
    comp = "semut";
  }

  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    // if (comp == 'orang') {
    //   hasil = 'MENANG!'
    //} else {
    //  hasil = 'KALAH!'
    //}
    hasil = comp == "semut" ? "MENANG" : "KALAH";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else if (p == "gajah") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "Memasukkan pilihan yang salah!!!";
  }

  // tampilkan hasilnya
  alert(
    "Kamu memlilih : " +
    p +
    "  dan komputer memilih: " +
    comp +
    " \nMaka hasilnya : kamu " +
    hasil
  );

  tanya = confirm("lagi??");
}

alert("terima kasih telah bermain!!");
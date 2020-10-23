let toplama = function (a, b, c, d) {
  return a + b + c + d;
};

let uye = function (isim = "Anonim", sehir = "Bilinmiyor") {
  return `Merhaba ${isim} Senin şehrin ${sehir}`;
  // let sonuc  =  "Merhaba " + isim + " senin şehrin " + sehir;
};

console.log(uye());
//Global Değişken ( metreToKilometre, uzunluk)
//Lokal Değişken (sonuc, metre)
// Lokal Değişken (yurume)

let uzunluk = 5000;

let metreToKilometre = function (metre = 0) {
  let sonuc = metre / 1000;
  if (sonuc > 1) {
    return false;
  }

  return true;
};

console.log(metreToKilometre(400));

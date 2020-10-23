// Fonksiyonlar

// input (argümanlar) /arguments
// code
// output -> sonuç / return

let merhabaKullanici = function () {
  console.log("Merhaba Kullanıcı");
};

// merhabaKullanici();
// merhabaKullanici();

let isim = function (isim) {
  console.log(isim);
};

// isim("Batuhan");

let kare = function (numara) {
  console.log(numara * numara);
};

// kare(5);
// kare(15);
// kare(9);

let metreToCm = function (metre) {
  let cm = metre * 100;
  return cm + " cm";
};

let sonuc = metreToCm(6);
console.log(sonuc);

let vergiHesapla = function (tutar = 0, vergiOrani = 18) {
  let vergi = (tutar * vergiOrani) / 100;
  let sonuc = `Alışverişiniz ${tutar} TL tutmuştur. Üzerine %${vergiOrani}, ${vergi} TL vergi eklenince, toplamda ${
    tutar + vergi
  } TL ödemeniz gerekmektedir.`;
  return sonuc;
};

console.log(vergiHesapla(1000, 18));

let tk101 = {
  kalkis: "Ankara",
  varis: "İstanbul",
  ucusSaati: "10:00",
  ucakKapasitesi: 150,
  satilanBilet: 30,
  biletSatisKontrol: function (kisiSayisi) {
    let kalanKoltukSayisi = this.ucakKapasitesi - this.satilanBilet;
    return kisiSayisi <= kalanKoltukSayisi;
  },
  satisYap: function (kisiSayisi) {
    this.satilanBilet = this.satilanBilet + kisiSayisi;
  },
  iptalEt: function (kisiSayisi) {
    this.satilanBilet = this.satilanBilet - kisiSayisi;
  },
};

tk101.satisYap(20);
tk101.iptalEt(10);
console.log(tk101.biletSatisKontrol(50));

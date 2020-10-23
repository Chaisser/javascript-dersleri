let bitcoinCuzdan = {
  adres: "1XH247n1k2j921HJHsdJAN",
  kazanc: 0,
  harcama: 0,
};

let kazancEkle = function (cuzdan, miktar) {
  cuzdan.kazanc = cuzdan.kazanc + miktar;
};

let harcamaEkle = function (cuzdan, miktar) {
  cuzdan.harcama = cuzdan.harcama + miktar;
};

let hesapSifirla = function (cuzdan) {
  cuzdan.harcama = 0;
  cuzdan.kazanc = 0;
};

let hesapOzeti = function (cuzdan) {
  let ozet = cuzdan.kazanc - cuzdan.harcama;
  return `${cuzdan.adres} hesabının bakiyesi ${ozet} BTC'dir. Toplamda ${cuzdan.kazanc} BTC kazanç sağlanmış ve ${cuzdan.harcama} BTC harcama yapılmıştır.`;
};

kazancEkle(bitcoinCuzdan, 300);
harcamaEkle(bitcoinCuzdan, 100);
hesapSifirla(bitcoinCuzdan);
kazancEkle(bitcoinCuzdan, 10);
console.log(hesapOzeti(bitcoinCuzdan));

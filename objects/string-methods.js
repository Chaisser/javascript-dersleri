let isim = " Doruk Karaboncuk   ";

// Length Özelliği
console.log(isim.length);

// toUpperCase()
console.log(isim.toUpperCase());

// toLowerCase()
console.log(isim.toLowerCase());

// trim()
console.log(isim.trim());

// includes()
let cumle = "Ben uyumaya gidiyorum";
console.log(cumle.includes("yuma"));

let sifreKontrol = function (sifre) {
  return sifre.length > 6 && !sifre.includes("1234");
};

console.log(sifreKontrol("abc1234de"));

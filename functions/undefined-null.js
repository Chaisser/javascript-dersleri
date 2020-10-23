let isim;

isim = "Ahmet";

if (isim === undefined) {
  console.log("isim değişkeni herhangi bir değere sahip değildir.");
} else {
  console.log(isim);
}

// Fonksiyonlar argümanlarında değer yoksa undefined
// Fonksiyonların return ettiğinde değer yoksa undefined
let kare = function (numara) {
  let result = numara;
  return result;
};

let twitchAccount = "dorukkaraboncuk";

twitchAccount = null;

console.log(twitchAccount);

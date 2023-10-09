
let arr = [
  {
    en: "Coffe",
    uz: "Kofe",
  },
  {
    en: "Stadium",
    uz: "Stadion",
  },
  {
    en: "Library",
    uz: "Kutubxona",
  },
  {
    en: "Beach",
    uz: "Sohil",
  },
  {
    en: "Schools",
    uz: "Maktab",
  },
  {
    en: "Bank",
    uz: "Bank",
  },
  {
    en: "Cinema",
    uz: "kino teart",
  },
  {
    en: "Museum",
    uz: "Muzey",
  },
  {
    en: "Park",
    uz: "Park",
  },
  {
    en: "Universuty",
    uz: "Universitet",
  },
  {
    en: "Restaraunt",
    uz: "Restaran",
  },
  {
    en: "Beauty salon",
    uz: "Gozallik Saloni",
  },
  {
    en: "Shop",
    uz: "Dokon",
  },
  {
    en: "meat",
    uz: "gosht",
  },
  {
    en: "orange",
    uz: "apelsin",
  },
  {
    en: "chocalate",
    uz: "Shikalat",
  },
  {
    en: "jam",
    uz: "qiyom",
  },
  {
    en: "butter",
    uz: "saryog'",
  },
  {
    en: "leaves",
    uz: "barg",
  },
  {
    en: "soup",
    uz: "sho'rva",
  },
  {
    en: "egg",
    uz: "tuhum",
  },
  {
    en: "coffee",
    uz: "kofe",
  },
  {
    en: "elephant",
    uz: "Fil",
  },
  {
    en: "milk",
    uz: "sut",
  },
  {
    en: "cups",
    uz: "chashka",
  },  {
    en: "lemons",
    uz: "limon",
  },
  {
    en: "bread",
    uz: "non",
  },
  {
    en: "doll",
    uz: "qogirchoq",
  },
  {
    en: "glass",
    uz: "oyna",
  },
  {
    en: "slice",
    uz: "tilim",
  },
  {
    en: "flower",
    uz: "Gul",
  },
  {
    en: "apple",
    uz: "olma",
  },
  {
    en: "banana",
    uz: "banan",
  },
  {
    en: "cheese",
    uz: "pishloq",
  },
  {
    en: "lemons",
    uz: "limon",
  },
  {
    en: "lemons",
    uz: "limon",
  },


];
let btn = document.querySelector("#btn");
let btnUz = document.querySelector("#btn-uz");
let text = document.querySelector("#text");
let count =  document.querySelector("#count")
let countAll = document.querySelector("#count-end")
let countClose = document.querySelector("#countClose")
let i = 1
countAll.textContent = arr.length
btn.addEventListener("click", function () {
  count.textContent = count.textContent*1 + i
  arr.map((item, index) => {
    let random = Math.trunc(Math.random() * index);
    text.textContent = arr[random].en;
    btnUz.addEventListener("click", function () {
      text.textContent = arr[random].uz;
    });
  });
});

btnUz.addEventListener('click' , function(){
  let x= 1
  countClose.textContent = countClose.textContent*1 + x
})
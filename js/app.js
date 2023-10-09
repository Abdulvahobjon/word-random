let btn = document.querySelector("#btn");
let btnUz = document.querySelector("#btn-uz");
let text = document.querySelector("#text");
let count =  document.querySelector("#count")
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
];

let i = 1
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

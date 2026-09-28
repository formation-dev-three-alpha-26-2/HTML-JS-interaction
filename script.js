const div = document.getElementsByTagName("div"); // selectionner par nom de balise ctt

const list = document.getElementById("list"); //  selectionner un seul element par son identifiant

const p = document.querySelector("p"); // selectionner le premier seul element

const li = document.querySelectorAll("li"); // selectionner tous les elements par n'importe quel selecteur

const img = document.getElementById("vacation-image");

const ul = document.querySelector("ul");
const add = document.getElementById("add");

let form = document.getElementById("form");
let perror = document.createElement("p");

li.forEach((element) => {
  element.textContent += " hello world";
});

p.style.color = "blue";
p.style.fontSize = "20px";
p.style.fontWeight = "bold";

img.style.height = "300px";
// p.innerHTML = "<h1>  hello </h1>"
// console.log(p);

const cities = ["San Francisco", "Cairo", "Tokyo", "Nairobi"];

ul.innerHTML = "";

cities.forEach((el) => {
  let newli = document.createElement("li");

  newli.textContent = el;

  ul.append(newli);
});

const imgs = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGGqi2qlurG-KY5Dfr2cm7FPxRlta8eWTyp38JGX_GuE8GdUWpPrMq3O-&s=10",
  "https://cdn.kimkim.com/files/a/images/a8afe7409abdd0280bcf00268fbbc6792358dae3/big-67c02a9c5806f2e4ab594b5a3feecdde.jpg",
];

let counter = 1;

img.addEventListener("click", () => {
  if (imgs.length === counter) {
    counter = 0;
  }

  img.src = imgs[counter];
  counter++;
});

// setInterval(() => {

//   if (imgs.length === counter) {
//     counter = 0;
//   }

//   img.src = imgs[counter];
//   counter++;
// } , 3000)

add.addEventListener("click", () => {
  const inputcity = document.getElementById("city");

  let input = inputcity.value;
  console.log(input);
  if (inputcity.value !== "") {
    let nvLi = document.createElement("li");

    nvLi.textContent = input;
    ul.append(nvLi);
    perror.innerHTML = "";
    inputcity.value = "";
  } else {
    perror.textContent = " please write before clicking";
    perror.style.backgroundColor = "red";
    form.append(perror);
    console.log("error");
  }
});



ul.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

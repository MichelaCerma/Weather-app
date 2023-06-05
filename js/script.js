import { createEl, genOption, genWeathCard } from "./fn.js";

//elements
const provinces = [
  "Agrigento",
  "Caltanissetta",
  "Catania",
  "Enna",
  "Messina",
  "Palermo",
  "Ragusa",
  "Siracusa",
  "Trapani",
];

const nav = document.querySelector("nav");
const main = document.querySelector("main");
const Wrapper = createEl("div", "", { name: "class", value: "wrapper" });
const select = createEl("select", "", { name: "name", value: "provinces" });

provinces.forEach((province) => {
  select.append(genOption(province));
});

//append
main.append(genWeathCard());
nav.appendChild(Wrapper);
Wrapper.appendChild(select);

import { createEl, genOption, genWeathCard, genSingleWeath } from "./fn.js";
import { GET, weatherData } from "./http.js";

//elements
const provinces = [
  "Province of Agrigento",
  "Province of Caltanissetta",
  "Catania",
  "Enna",
  "Messina",
  "Province of Palermo",
  "Province of Ragusa",
  "Syracuse",
  "Province of Trapani",
];

const nav = document.querySelector("nav");
const main = document.querySelector("main");
const Wrapper = createEl("div", "", { name: "class", value: "wrapper" });
const select = createEl("select", "", { name: "name", value: "provinces" });
const generalSelect = createEl(
  "option",
  "dawdwd",
  {
    name: "value",
    value: "try",
  },
  { name: "selected", value: "selected" }
);
provinces.forEach((province) => {
  GET(province).then((data) => {
    weatherData.push(data);
    main.append(genWeathCard(data));
  });
});

provinces.forEach((province) => {
  select.append(genOption(province));
});

nav.appendChild(Wrapper);
Wrapper.appendChild(select);
select.appendChild(generalSelect);

//eventi
select.addEventListener("change", (e) => {
  let prova = weatherData.find((item) => e.target.value == item.name);
  if (!!prova) {
    main.textContent = "";
    main.append(genSingleWeath(prova));
  } else {
    main.textContent = "";
    weatherData.forEach((data) => main.append(genWeathCard(data)));
  }
});

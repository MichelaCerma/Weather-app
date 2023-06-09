import { createEl, genOption, genWeathCard, genSingleWeath } from "./fn.js";
import { GET, weatherData } from "./http.js";

//elements

const provinces = [
  "Agrigento",
  "Caltanissetta",
  "Catania",
  "Enna",
  "Messina",
  "Palermo",
  "Ragusa",
  "Syracuse",
  "Trapani",
];

const nav = document.querySelector("nav");
const main = document.querySelector("main");

export const select = createEl("select", "", {
  name: "name",
  value: "provinces",
});
const generalSelect = createEl(
  "option",
  "Select your province",
  {
    name: "value",
    value: "Select your province",
  },
  { name: "selected", value: "selected" }
);
provinces.forEach((province) => {
  GET(province).then((data) => {
    weatherData.push(data);
    main.append(genWeathCard(data));
  });
});

select.appendChild(generalSelect);

provinces.forEach((province) => {
  select.append(genOption(province));
});

nav.appendChild(select);

//eventi
select.addEventListener("change", (e) => {
  let filtData = weatherData.find((item) => item.name.includes(e.target.value));

  if (!!filtData) {
    main.textContent = "";
    main.append(genSingleWeath(filtData));
  } else {
    main.textContent = "";
    weatherData.forEach((data) => main.append(genWeathCard(data)));
  }
});
